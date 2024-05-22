//문제8)
const user = {
  이름: "병수",
  나이: 20,
  주소: "시골",
};

localStorage.setItem("user", JSON.stringify(user));

const parsedUser = JSON.parse(localStorage.getItem("user"));
console.log(parsedUser);

const agedUser = { ...parsedUser, 나이: 30 };
console.log(agedUser);
localStorage.setItem("user", JSON.stringify(agedUser));

localStorage.removeItem("user");
console.log(localStorage.getItem("user"));

//문제1)
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((fetch의응답결과) => fetch의응답결과.json())
  .then((json까지완료한결과) => console.log(json까지완료한결과))
  .catch((err) => console.error(err));
