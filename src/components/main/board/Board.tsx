import { useEffect, useState } from 'react';
import styles from '../../../styles/main/_board.module.scss';
import {
  COMPLETE_WORD,
  KEYS,
  CHANCE,
  GameStatus,
  LENGTH,
} from '../../constants';
import Completerow from '../../reusable/Completerow';
import Currentrow from '../../reusable/Currentrow';
import Emptyrow from '../../reusable/Emptyrow';
import { useWindow } from '../../reusable/useWindow';
import { API, API_KEY } from '../../constants';
import axios from 'axios';
import Modal from '../../reusable/Modal';
import Swal from 'sweetalert2';

const Board =  () => {
  const [answer, setAnswer] = useState<string>('');
  const [turn, setTurn] = useState<number>(1);
  const [completedWord, setCompletedWord] = useState<string[]>(COMPLETE_WORD);
  const [currentWord, setCurrentWord] = useState<string>('');
  const [gameState, setGameState] = useState<GameStatus>('Playing');
  const [valid, setValid] = useState<Boolean>(false);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const Reload = async () => {
    try {
      const res = await axios.get(API + '/word?length=' + LENGTH);
      const answer = res.data[0];
      setAnswer(answer);
    } catch (e) {
      setAnswer('basic');
    }
  };

  useEffect(() => {
    answer !== '' && localStorage.setItem('answer', answer);
  }, [answer]);

  useEffect(() => {
    localStorage.getItem('answer')
      ? setAnswer(localStorage.getItem('answer')!)
      : Reload();
  }, []);

  const validation = (ans: string): Promise<boolean> => {
    const apiKey = API_KEY; // WordsAPI 키
    const url = `https://wordsapiv1.p.rapidapi.com/words/${ans}/hasMembers`;
  
    return new Promise<boolean>((resolve, reject) => {
      fetch(url, {
        method: 'GET',
        headers: {
          'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com',
          'X-RapidAPI-Key': apiKey,
        },
      })
        .then(response => response.json())
        .then(data => {
          if (data.success === false) {
            resolve(false);
          } else {
            resolve(true);
          }
        })
        .catch(error => {
          console.error('Error:', error);
          resolve(false);
        });
    });
  };

  const handleKeyDown = async (event: KeyboardEvent) => {
    /* delete는 버튼이 눌리고, currentWord가 0보다 클 때만 작동 */
    if (event.key === 'Backspace' && currentWord.length > 0) {
      onDelete();
      return;
    }
    if (event.key === 'Enter') {
      event.preventDefault();
      onEnter(currentWord);
      return;
    }
    /* 5자리가 넘어가면 더 이상 입력되지 않음 */
    if (currentWord.length >= 5) return;

    if (KEYS.includes(event.key)) {
      onInput(event.key);
      return;
    }
  };

  const onInput = (letter: string) => {
    const newWord = currentWord + letter;
    setCurrentWord(newWord);
  };

  const onDelete = () => {
    const newWord = currentWord.slice(0, -1);
    setCurrentWord(newWord);
  };

  const onEnter = async (letter: string) => {
    if (letter.length < 5) {
      Swal.fire({
        icon: 'warning',
        title: 'Not Enough Word!',
        showCloseButton: true,
      });
    } else {
      const isValid = await validation(letter); // validation 함수의 반환값을 저장
  
      if (isValid) {
        // 사전에 있는 단어인지 검사
        if (letter === answer) {
          setCompletedWord([...completedWord, letter]);
          setCurrentWord('');
          setGameState('Victory');
          Swal.fire({
            icon: 'success',
            title: 'Victory!!',
            showCloseButton: true,
          });
          return;
        }
  
        // turn이 6턴을 넘어가게 되면 게임오버
        else if (turn >= 6) {
          setGameState('Defeat');
          Swal.fire({
            icon: 'error',
            title: 'GameOver',
            showCloseButton: true,
          }).then(() => {
            Swal.fire({
              icon: 'question',
              title: 'Do you want more Chance?',
              showDenyButton: true,
              confirmButtonText: 'Yes',
              denyButtonText: 'No, New Game',
              showCloseButton: true,
            }).then((result) => {
              if (result.isConfirmed) {
                // Yes 버튼이 클릭되었을 때의 동작
                location.reload();
              } else if (result.isDenied) {
                // No, New Game 버튼이 클릭되었을 때의 동작
                localStorage.removeItem('answer');
                location.reload();
              }
            });
          });
          
        }
  
        // 단어를 썼으니 턴을 소모하고 다음 행으로 넘어가기
        else if (gameState !== 'Defeat') {
          setTurn(turn + 1);
        }
  
        // 지금 쓴 단어는 완료한 단어 목록에 저장
        setCompletedWord([...completedWord, letter]);
        // currentWord 초기화
        setCurrentWord('');
      } else {
        Swal.fire({
          icon: 'warning',
          title: 'Not in Wordlist!',
          showCloseButton: true,
        });
      }
    }
  };
  
  /* keydown 이벤트 window에 부착 */
  useWindow('keydown', handleKeyDown);

  return (
    <div className={styles.container}>
      {completedWord.map((word, i) => (
        <Completerow word={word} solution={answer} key={i} />
      ))}
      {gameState !== 'Playing' ? null : <Currentrow word={currentWord} />}
      {gameState === 'Defeat'
        ? null
        : Array.from(Array(CHANCE - turn)).map((_, i) => <Emptyrow key={i} />)}
    </div>
  );
};

export default Board;
