/* answer는 가변적이지만 일단 이렇게 써두자 
 => answer 자체는 string 배열로 두고 
    랜덤으로 뽑아서 쓰면 되겠다.
    answer[MATH.floor(MATH.random() * answer.Length())]

    사전에 있는 단어중에서 랜덤으로 바뀌게 해야하는데 새로고침 할 때마다도 랜덤으로 해주고 싶다
    [] 배열안에 넣어두고 랜덤으로 바꾸기
*/

export const answer: string[] = ["TREND",
    "DREAM", "PARTY", "SPINE", "SHINE", "SNAKE",
    "CAMEL", "POINT", "FRANC", "FARCE"
]