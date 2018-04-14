// 함수표현식 <-> 함수선언문
// let circleArea = function(pi, r) {
//     let area = pi * r * r;
//     return area;
// };

// 위의 문장을 한줄로 작성하시오.
// arrow function
// 익명함수를 애로우 펑션으로 변경가능
// function을 없애고, 인자와 파라메터와 {} 사이의 => 삽입
// 파라메터가 한개면 괄호가 생략가능
// 중괄호가 한줄이면 중괄호 생략가능
// 한줄일 경우엔 return 생략가능

let circleArea = (pi, r) => pi * r * r;

let result = circleArea(3.14, 3);

console.log(result); //실행 결과 "28.26"
