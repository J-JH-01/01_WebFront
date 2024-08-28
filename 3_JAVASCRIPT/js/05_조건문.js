const input1 = document.getElementById("input1");

function check1() {
  const value = Number(input1.value);

  if(value > 0){
    alert("양수입니다");
  }
  else {
    alert("양수가 아닙니다");
  }
}


// 난수 발생 홀/짝 판별 (if - else 문)


function check2() {
  //난수 발생 : Math.random()
  //Math : 수학적 툴 모음 패키지
  //random : 난수발생 툴
  //범위 : 0 <= math.random() < 1 (소수점 숫자값만)

  //Math.floor() : 소수점을 내림하여 정수로 만든다
  // ex) Math.floor(50.5) ->

  // 0 ~ 100 사이 난수
  const randomNumber = Math.floor(Math.random() * 101)

  if(randomNumber % 2 == 0){
    alert(`선택결과 : ${randomNumber} , 짝수입니다`)
  } 
  else{
    alert(`선택결과 : ${randomNumber} , 홀수입니다`)
  }
  
}

function check3(){
  const random = Math.floor(Math.random() * 7)-3;

  let message = random + "은/는 ";
  
  if (random > 0){
    message += "양수 입니다"
  } else if(random == 0){
    message += "0 입니다"
  } else{
    message += "음수 입니다"

    alert(message);
  }
}





//if - else if - else (나이 판별식)
const inputAge = document.getElementById("inputAge");


function check4(){
  let age = inputAge.value;

  const leng = inputAge.value.length
  // "문자열".length : 문자열의 길이
  // 빈값 넣으면 이게 0인데 이걸로 input이 null 일때의 분기를 만들어 줄 수 있으나 다른방법으로 해보려함
  // 이게 코드수가 줄어서 더 좋기는 한듯?
  let message = "";

  if(age != "" ){
    age = Number(inputAge.value);
    if(age >= 0 && age <= 13){
      message += "어린이"
    } else if(age >= 14 && age <= 19 ){ // 이미 위에서 걸러졌으니까 19세 이하로 적어도 괜찮음
      message += "청소년"
    } else if(age >=20 && age <= 150){
      message += "성인"
    } else {
      message += "잘못 입력하셨습니다"
    }
  
  } else {
    message += "값을 입력해주세요"
  }

  alert(message)
}






// switch (계산기)


// op = 연산자 ,operator
// 클릭 시에 calc('+') 이렇게 되어있다면 op자리에 +를 넘겨준다는 것임

const number1 = document.getElementById("number1"); 
const number2 = document.getElementById("number2");

const calcResult = document.getElementById("calcResult");


function calc(op){

  const v1 = Number(number1.value);
  const v2 = Number(number2.value);

  // switch(식)에서
  // "식"은 다양한 값이 나타날 수 있는 변수 또는 계산식

  let result; // 계산결과 저장 변수 선언

  // break : switch문을 멈춤
  // 안쓰면 안멈추고 다음 case로 넘어간다

  switch(op){
    case '+' : result = v1 + v2; break;
    case '-' : result = v1 - v2; break;
    case '*' : result = v1 * v2; break;
    case '/' : result = v1 / v2; break;
    case '%' : result = v1 % v2; break;

    //맞는 case가 없을 경우에 적용할 기본 값(else 같은)
    default : result = "잘못된 연산자"; break; // 어짜피 마지막줄이라 break 생략  ㄱㅊ
    // 디폴트문도 꼭 있어야하는건 아님 
  }

calcResult.innerText = result;



// //if 문으로 제작하기
// if(op == '+'){
//   result = v1 + v2;
// } else if( op == "-") {
//   result = v1 - v2;
// } else if( op == "*") {
//   result = v1 * v2;
// } else if( op == "/") {
//   result = v1 / v2;
// } else if( op == "%") {
//   result = v1 % v2;
// } else {
//   result = "잘못된 연산자"
// }
// calcResult.innerText = result;

}


























