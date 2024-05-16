
//3번
addEventListener('scroll', function() {
    console.log(window.scrollY);
});

//4번
for(let i=1; i <= 10; i++){
    console.log(i)
}

//5번
for(let i=2; i <= 20; i += 2){
    console.log(i)
}

//6번 
setTimeout(function() {   
    console.log(`3초 후에 출력되는 텍스트입니다.`)
}, 3000);