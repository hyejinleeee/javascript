// 문제1) 배열과 객체 만들기
let students = [
  { 이름: "철수", 나이: 19, 성별: "남" },
  { 이름: "짱구", 나이: 20, 성별: "남" },
  { 이름: "유리", 나이: 21, 성별: "여" },
];
console.log(students);

//문제2) 문제1에서 만든 데이터를 html에 보여주기
const container = document.querySelector("#container");

students.forEach((student) => {
  let html템플릿 = `<div>이름: ${student.이름}</div>
                  <div>나이: ${student.나이}</div>
                  <div>성별: ${student.성별}</div>
                  <hr>`;
  container.insertAdjacentHTML("beforeend", html템플릿);
});

//문제3) find 메소드
const 여학생 = students.find((student) => {
  return student.성별 === "여";
});
console.log("여학생");
console.log(여학생);

//**문제4) filter 메소드
const 남학생 = students.filter((student) => {
  return student.성별 === "남";
});
console.log("남학생");
console.log(남학생);

//**문제5) map 연습 문제**
const agedStudents = students.map((student) => {
  return {
    이름: student.이름,
    나이: student.나이 + 10,
    성별: student.성별,
  };
});
console.log("원본");
console.log(students);
console.log("10살 추가배열");
console.log(agedStudents);

//문제6) sort 연습 문제
let studentCopies = [...students];
const sortedStudents = studentCopies.sort((a, b) => {
  return b.나이 - a.나이;
});
console.log("원본");
console.log(students);
console.log("나이 많은순");
console.log(sortedStudents);

//문제7) destructuring (구조 분해 할당)
const user = {
  이름: "병수",
  나이: 20,
  주소: "시골",
};
const { 이름, 나이, 주소 } = user;
console.log(`이름:${이름}, 나이:${나이}, 주소:${주소}`);
