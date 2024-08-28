// <!-- 문제1 : 주어진 두 숫자 a와 b가 있을 때, 어느 숫자가 더 큰지 판단하여 출력
//   let a = 5;
//   let b = 10;

//   문제2 : 짝수/홀수 판별 - 주어진 숫자 n이 짝수인지 홀수인지 판단하여 출력
//   let n = 7; // n이 짝수라면 "짝수입니다", 홀수라면 "홀수입니다"를 출력하세요.

//   문제3 : 주어진 세 숫자 x, y, z 중 가장 큰 숫자를 찾아서 출력
//   let x = 15;
//   let y = 22;
//   let z = 9;

//   문제4 : 입력받은 문자열 str이 "apple"인지, "banana"인지, 혹은 다른 문자열인지를 판단하여 출력

//   문제5 : 점수에 따른 학점 부여 - 입력받은 score에 따른 학점을 출력
//   90점 이상 A
//   71~80 사이 B
//   61~70 사이 C
//   51~60 사이 D
//   60점 미만 F
// 문제6 : 놀이기구 탑승 제한 검사
// 나이와 키를 입력받아 조건에 맞는지 판단하여 출력
// [조건]
// 나이가 12세 이상, 키 140.0cm 이상일 경우에만 "탑승 가능" 출력
// 나이가 12세 미만 : "적정 연령이 아닙니다." 출력
// 키 140.0cm 미만  : "적정 키가 아닙니다." 출력
// 나이를 0세 미만 또는 100세 초과 입력 시 : "잘못 입력 하셨습니다."


// 문제7 : 입력받은 달(month)에 따른 계절 출력
// 3,4,5 월은 "봄" 출력
// 6,7,8 월은 "여름" 출력
// 9,10,11 월은 "가을" 출력
// 12,1,2월은 "겨울" 출력

// 단, 여름/겨울에 해당하는 달 입력 시 온도를 입력받아
// 여름에는 30도 이상시 "폭염" 출력
// 겨울에는 0도 이하시 "한파" 출력


//   -->

// 문제1

let a = 5;
let b = 10;

if(a > b){
  console.log("a")
} else if ( b > a){
  console.log("b")
}


// 문제2

let n = 7;

if(n%2 == 0){
  console.log("짝수입니다")
}else {
  console.log("홀수입니다")
}

//문제 3
let x = 15;
let y = 22;
let z = 9;


//for 문이라면 max 변수를 하나 만들어서 거기에 대입해가지구 max = x하고 돌리면 됨
// if(y>max)max=y , if(z>max)max=z console.log(max)로 세줄로 쉽게 끝나기도함

if(x > y){
  if(x > z){
    console.log(x)
  } else {
    console.log(z)
  } 
} else {
  if ( y > z ){
    console.log(y)
  } else{
    onsole.log(z)
  }
}
 


//문제4
const input1 = document.getElementById("input1");

function pro4(){
  const value = input1.value;
  if( value == "apple"){
    alert("사과입니다")
  } else if ( value == "banana"){
    alert("바나나입니다")
  } else {
    alert("이건 뭐죠")
  }
}



// 문제 5
const inputScore = document.getElementById("inputScore");

function pro5(){
  //여기서 넘버로 씌우는거 밸류까지 써서 한꺼번에 해도 되나?
  //수업 자료 한번 보고 위아래로 한번씩 봐보기
const score = Number(inputScore.value);
  if (score >= 90){
    alert("A")
  } else if (score > 70){
    alert("B")
  } else if (score > 60){
    alert("C")
  } else if (score > 51){
    alert("D")
  } else {
    alert("F")
  }
}



//문제6
const inputAge = document.getElementById("inputAge");
const inputHeight = document.getElementById("inputHeight");

function pro6(){
 const age = Number(inputAge.value);
 const height = Number(inputHeight.value);
  if(age >= 0 && age <= 100 ){
    if (age >= 12 && height >= 140){
      alert("탑승 가능")
    } else if (age < 12) {
      alert("적정 연령이 아닙니다")
    } else if (height < 140) {
      alert("적정 키가 아닙니다")
    }
  } else {
    alert("잘못 입력 하셨습니다")
  }
}



//문제7
const inputMonth = document.getElementById("inputMonth");


function pro7(){
  
  const month = Number(inputMonth.value);
  
  if(month == 3 || month ==4 || month ==5 ){
    alert("봄")} 
  else if (month == 6 || month ==7 || month ==8  ){
    alert("여름")
    const degree = prompt("온도를 입력해주세요")
    if(degree >= 30){
      alert("폭염")
    }}

  else if (month == 9 || month ==10 || month ==11){
    alert("가을")}
  else if (month == 12 || month ==11 || month ==1){
   alert("겨울")
   const degree = prompt("온도를 입력해주세요")
    if (degree <= 0 ){
      alert("한파")
    }}
}