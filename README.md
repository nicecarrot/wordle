# wordle-vite
 WORDLE using vite, react-ts

# 커밋을 원상태로 복구하는 방법
commit reset

reset에는 3가지 종류가 있고
그냥 reset
$ git reset {어디로 돌아갈지}
git add, git commit을 해주면 다시 reset전으로 돌아올 수 있다


soft reset
$ git reset --soft {어디로 돌아갈지}
git commit을 하면 기존 상태로 돌아옴


hard reset
$ git reset --hard {어디로 돌아갈지}
썼던 코드가 영영 날라가버린다

HEAD~
HEAD~1 현재 로컬 브랜치에서 하나 뒤에 있는 커밋으로 돌아가라는 의미

https://animista.net/play/basic/scale-up
여기 진짜 좋다 애니메이션 원하는거 맘대로 쓰기가

키보드에 이벤트 달아주기, 키보드 css도 state 맞추어서 바뀌게 해주기, 게임 State변화함에 따라 모달 띄우기, 배포 연습하기, 단어 맞추기에서 치명적인 오류 수정하기

##이미 지나간 단어는 안하는 방법
replace 넣어줬음
solution.replace(letter, " ")
여기서 완전 공백("")으로 해주면 solution의 길이 자체가 줄어서 비교가 안 된다.
" " 로 해줘서 문자열 길이 유지해주자.

허허 우선순위를 둬야겠는데?
solution === testy이고
answer가 tatty일 때 
c a p a c 상태가 된다 c a a c c 여야하는데
correct를 먼저 계산하게 해야 할까?


### 이종형의 가르침
state ==="correct"
이런거는 에러가 발생할 확률이 있고 메모리 누수가 있기 때문에
const CORRECT = 0; 이런식으로 만들어서 인텔리센스가 가능하도록 한다면
코드 작성 시 오류를 막을 수 있다 문자열로 하면 심하니까 숫자로 대체하거라
항상 이분법적으로 컴퓨터가 이해할 수 있게
너무 많은 걸 한꺼번에 하려고 하지말고 2개로 나누는거에 focus해라
