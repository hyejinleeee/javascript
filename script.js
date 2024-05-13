const title = document.querySelector('.title');
const btn = document.querySelector('.btn');

btn.addEventListener('click', function(){
    title.innerText = '제목아니다';
})

function sum(num1, num2) {
    console.log(num1 + num2);
};

sum(3,5);

function isEvenOrOdd(num){
    return num % 2 === 0 ? "짝수입니다" : "홀수입니다";
};

console.log(isEvenOrOdd(5));

const name = '병수';
const age = 20;

console.log(`이름: ${name}`);
console.log(`나이: ${age}`);


