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
    Login / SignUp

- /auth 경로에 로그인 / 회원가입 기능을 개발합니다
  - 로그인, 회원가입을 별도의 경로로 분리해도 무방합니다
  - [x] 최소한 이메일, 비밀번호 input, 제출 button을 갖도록 구성해주세요
- 이메일과 비밀번호의 유효성을 확인합니다
  - [x] 이메일 조건 : 최소 `@`, `.` 포함
  - [x] 비밀번호 조건 : 8자 이상 입력
  - [x] 이메일과 비밀번호가 모두 입력되어 있고, 조건을 만족해야 제출 버튼이 활성화 되도록 해주세요
- 로그인 API를 호출하고, 올바른 응답을 받았을 때 루트 경로로 이동시켜주세요
  - [x] 응답으로 받은 토큰은 로컬 스토리지에 저장해주세요
  - [ ] 다음 번에 로그인 시 토큰이 존재한다면 루트 경로로 리다이렉트 시켜주세요
  - [ ] 어떤 경우든 토큰이 유효하지 않다면 사용자에게 알리고 로그인 페이지로 리다이렉트 시켜주세요

Todo List

- Todo List API를 호출하여 Todo List CRUD 기능을 구현해주세요
  - [x] 목록 / 상세 영역으로 나누어 구현해주세요
  - [x] Todo 목록을 볼 수 있습니다.
  - [x] Todo 추가 버튼을 클릭하면 할 일이 추가 됩니다.
  - [x] Todo 수정 버튼을 클릭하면 수정 모드를 활성화하고, 수정 내용을 제출하거나 취소할 수 있습니다.
  - [x] Todo 삭제 버튼을 클릭하면 해당 Todo를 삭제할 수 있습니다.
- 한 화면 내에서 Todo List와 개별 Todo의 상세를 확인할 수 있도록 해주세요.
  - [x] 새로고침을 했을 때 현재 상태가 유지되어야 합니다.
  - [x] 개별 Todo를 조회 순서에 따라 페이지 뒤로가기를 통하여 조회할 수 있도록 해주세요.
- 한 페이지 내에서 새로고침 없이 데이터가 정합성을 갖추도록 구현해주세요

  - [x] 수정되는 Todo의 내용이 목록에서도 실시간으로 반영되어야 합니다

    </p>


<h2 id='library'>라이브러리</h2>
![image](https://user-images.githubusercontent.com/81793748/215048476-a56f378b-7454-4832-afdf-4b3acf63d82d.png)

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
solution === testy이고
answer가 tatty일 때 
c a p a c 상태가 된다 c a a c c 여야하는데
correct를 먼저 계산하게 해야 할까?
우선순위를 설정해야한다.

<h2 id='improve'>개선사항</h2>
##이미 지나간 단어는 안하는 방법
replace 넣어줬음
solution.replace(letter, " ")
여기서 완전 공백("")으로 해주면 solution의 길이 자체가 줄어서 비교가 안 된다.
" " 로 해줘서 문자열 길이 유지해주자.

state ==="correct"
이런거는 에러가 발생할 확률이 있고 메모리 누수가 있기 때문에
const CORRECT = 0; 이런식으로 만들어서 인텔리센스가 가능하도록 한다면
코드 작성 시 오류를 막을 수 있다 문자열로 하면 심하니까 숫자로 대체하거라
항상 이분법적으로 컴퓨터가 이해할 수 있게
너무 많은 걸 한꺼번에 하려고 하지말고 2개로 나누는거에 focus해라
