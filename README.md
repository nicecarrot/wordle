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
