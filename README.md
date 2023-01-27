<h1 align='center'>wordle</h1>

##  목차

<ol>
    <li>
        <a href='#overview'>Overview</a>
    </li>
    <li>
        <a href='#run'>환경설정 및 실행</a>
    </li>
    <li>
        <a href='#features'>요구사항</a>
    </li>
    <li>
        <a href='#library'>라이브러리</a>
    </li>
    <li>
        <a href='#structure'>폴더 구조</a>
    </li>
    <li>
        <a href='#agonize'>고민한 부분</a>
    </li>
    <li>
        <a href='#improve'>개선사항</a>
    </li>
    
</ol>


<h2 id='overview'>Overview</h2>

<h2 id='run'>환경설정 및 실행</h2>

Frontend
<pre>
    npm install
    
    npm run dev
</pre>

<h2 id='features'>요구사항</h2>
<p>


    </p>


<h2 id='library'>라이브러리</h2>
<img src=https://user-images.githubusercontent.com/81793748/215048476-a56f378b-7454-4832-afdf-4b3acf63d82d.png> </img>

<h2 id='structure'>폴더 구조</h2>
<pre>
 ─src
    │  App.css
    │  App.tsx
    │  index.css
    │  logo.svg
    │  main.tsx
    │  vite-env.d.ts
    │
    ├─components
    │  │  constants.ts
    │  │
    │  ├─header
    │  │      Header.tsx
    │  │
    │  ├─main
    │  │  │  Main.tsx
    │  │  │
    │  │  ├─board
    │  │  │      Board.tsx
    │  │  │
    │  │  └─keyboard
    │  │          Keyboard.tsx
    │  │
    │  └─reusable
    │          Completerow.tsx
    │          Currentrow.tsx
    │          Emptyrow.tsx
    │          Keycap.tsx
    │          Modal.tsx
    │          tile.tsx
    │          useWindow.ts
    │          wordList.ts
    │
    └─styles
        │  _variable.module.scss
        │
        ├─header
        │      _header.module.scss
        │
        ├─main
        │      _board.module.scss
        │
        └─reusable
                _key.module.scss
                _modal.module.scss
                _tile.module.scss</pre>

<h2 id='agonize'>고민한 부분</h2>
정답 검사 시, correct, present, absent 3가지 상태가 존재하는데
solution이 testy이고 answer가 tatty일 때 
c a p a c 상태가 된다 c a a c c 여야하는데
correct를 먼저 계산하게 해야 할까?
우선순위를 설정해야겠다.

<h2 id='improve'>개선사항</h2>
##이미 지나간 단어는 안하는 방법
replace를 넣어주었고,
solution.replace(letter, " ")
여기서 완전 공백("")으로 해주면 solution의 길이 자체가 줄어서 비교가 안 된다.
" " 로 해줘서 문자열 길이 유지해주자.

state ==="correct"
이런거는 에러가 발생할 확률이 있고 메모리 누수가 있기 때문에
const CORRECT = 0; 이런식으로 만들어서 인텔리센스가 가능하도록 한다면
코드 작성 시 오류를 막을 수 있다 문자열로 하면 심하니까 숫자로 대체하거라
항상 이분법적으로 컴퓨터가 이해할 수 있게
너무 많은 걸 한꺼번에 하려고 하지말고 2개로 나누는거에 focus해라
