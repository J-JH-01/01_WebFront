// 두 수가 같은지 비교

const cv1 = document.getElementById("compareValue1"); 
const cv2 = document.getElementById("compareValue2"); //Input

const result1= document.getElementById("result1");

function compareFn1(){
  const v1 = cv1.value;
  const v2 = cv2.value;
  
  console.log(v1==v2);

  result1.innerText = (v1==v2);
}



















const input3_1 = document.getElementById("input3_1"); 
const input3_2 = document.getElementById("input3_2"); 
const result3= document.getElementById("result3");

function checkFn3(){
  const v1 = Number(input3_1.value)
  const v2 = Number(input3_2.value)
  
  console.log(v1 % v2 == 0);

  // result3.innerText = v1 +"은/는 " + v2 + "의 배수 : " + (v1 % v2 == 0);
  // 백틱(`)을 이용한 문자열 작성기
  // - 문자열 전체를(``)로 감싼 후 변수,연산결과 출력되는 자리에 ${변수명},${연산식} 을 작성
 result3.innerText = `${v1}은/는 ${v2}의 배수 : ${v1 % v2 == 0}`;

}












let temp = 0;
const result4 = document.getElementById("result4");

function minus4() {
  const value = Number(input4.value)
  temp -= value;

  result4.innerText=temp;
};

function plus4(){
  const value = Number(input4.value)

  temp += value;
  result4.innerText=temp;
};









//논리 연산자 확인하기

function checkFn5(){

  // And(&&)
  //ex) 104는 100 이상의 수 이면서 짝수인가?
  const bool1 = (104 >= 100) && (104 % 2 == 0);
  //ex) 50은 70 이하이고, 4의 배수인가?
  const bool2 = (50 <= 70) && (50 % 4 == 0);
  // ex) 3은 1 부터 10 사이의 수가 맞는가?
  const bool3 = (13 > 1) && (10 > 13);
  console.log(`104는 100 이상의 수 이면서 짝수인가? : ${bool1}`)
  console.log(`50은 70 이하이고, 4의 배수인가? : ${bool2}`)
  console.log(`3은 1 부터 10 사이의 수가 맞는가? : ${bool3}`)


  // Or(||)
  // ex) 4는 10을 초과 하거나, 짝수인가?
  const bool4 = (4 >10) || (4%2 == 0);
  // ex) 50은 0 이하 또는 40 이상인가?
  const bool5 = (50 <= 0) || (50 >= 40);
  console.log(`4는 10을 초과 하거나, 짝수인가? : ${bool4}`)
  console.log(`50은 0 이하 또는 40 이상인가? : ${bool5}`)

  // NOT (!)

  let test = true;
  
  console.log(`!true = ${!true}`);
  console.log(`!false = ${!false}`);

  const bool6 = false
  console.log(!(bool6 != true)) //false
}


// 삼항 연산자
const inputID = document.getElementById("inputID");
const inputPw = document.getElementById("inputPw");

function login(){
  const id = inputId.value;
  const pw = inputPw.value;
  
  const success ="로그인 성공!"
  const fail ="아이디 또는 비밀번호 불일치!"

  //alert창에 출력될 내용을 저장할 변수 선언

  const message
  = (id == "member01") && (pw == "pass01!") ?
  success :
  fail ;

  alert(message);
   
}


// 2024. 8. 19 수업 진도



