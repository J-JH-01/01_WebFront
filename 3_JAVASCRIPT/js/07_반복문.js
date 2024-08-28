for (let num = 1; num <=5 ; num++){
  // 조건식이 true인 경우 반복 수행할 코드;

  console.log("통과!");
} // 결과가 5번찍힘



//확인1
function check1(){
  let result =""; // 빈 문자열 

  for(let i=1; i<=5 ; i++){
    //console.log(i);
    result += i;
    // result = result +"i";
    // "1" = "" + 1;  -> 증감식 -> 조건식(true)
    // "12" = "1" + 2;  -> 증감식 -> 조건식(true)
    // "123" = "12" +3; -> 증감식 -> 조건식(true)
    // "1234" = "123" +4; -> 증감식 -> 조건식(true)
    // "12345" = "1234" +5; -> 증감식 -> 조건식(false)
  }
  console.log(result)
}



//확인2
function check2(){
  for(let i=1 ; i<=10 ; i++){
    console.log(i);
  }
}



//확인3
function check3(){
  for(let i=1 ; i<=20 ; i++){
    console.log(i);
  }
}


//확인4
function check4(){
  for(let i=5 ; i<=15 ; i++){
    console.log(i);
  }
}


//확인5
function check5(){
  for(let i=1 ; i<=30 ; i+=2){
    console.log(i);
  }
}

//확인6
function check6(){
  let sum=0;
  for(let i=1 ; i<=10 ; i++){
    sum+=i
  }
  console.log(sum);
};

//--------------------------------------------------------------------------------------

// 입력 받은 범위 내 모든 정수의 합 구하기
function sumFn(){
  const start = Number(document.getElementById("inputNumber1-1").value);
  const end = Number(document.getElementById("inputNumber1-2").value);


  //결과를 출력하기 위한 요소를 얻어와서 저장하자
   const result1 = document.getElementById("result1"); // span 태그

   // 합계를 저장할 변수 
  let sum=0;

  for(let i=start ; i<=end ; i++){
    sum += i;
  }

  result1.innerText=sum;
}

//강의 돌려보기, 여기서 잘 보라고했는데 ㅠㅠ 못들음
//강의 돌려보기, 여기서 잘 보라고했는데 ㅠㅠ 못들음
//강의 돌려보기, 여기서 잘 보라고했는데 ㅠㅠ 못들음
//강의 돌려보기, 여기서 잘 보라고했는데 ㅠㅠ 못들음
//강의 돌려보기, 여기서 잘 보라고했는데 ㅠㅠ 못들음
//강의 돌려보기, 여기서 잘 보라고했는데 ㅠㅠ 못들음
//강의 돌려보기, 여기서 잘 보라고했는데 ㅠㅠ 못들음
//강의 돌려보기, 여기서 잘 보라고했는데 ㅠㅠ 못들음
function executeFn2(){
  const start = Number(document.getElementById("inputNumber2-1").value);
  const end = Number(document.getElementById("inputNumber2-2").value);
  const val = Number(document.getElementById("inputNumber2-3").value);

  const ul = document.getElementById("result2"); 
  ul.innerHTML = ""; // 이전 작성된 ul 초기화
  let sum=0

  for(let i=start ; i<=end ; i+=val){
    ul.innerHTML += `<li>${i}</li>`;
    //innerText 를 이용 하면 html요소를 무시하고 문자열로 그냥 넣어버림
    //요소의 내용으로 문자열을 누적 대입
    //(HTML 태그를 해석하지않고 문자열 그대로 보여줌)

    //요소.inner.HTML += `<li>${i}</li>`;
    // -> HTML 태그를 해석해서 화면에 태그의 본 기능대로 해석해줌
    // 출력
  }

}


function executeFn3(){
  const num = Number(document.getElementById("input3").value);
  const ul = document.getElementById("result3"); 

  ul.innerHTML = "";

  if(num < 2 || num > 9 ){
    alert("2~9단 사이만 입력하세요 ㅜㅜ")
    return ; //함수를 종료하고 호출한 곳으로 돌아감
             // 지금은 함수 종료정도로 생각하쟈
  } 

  for(let i=1 ; i <= 9 ; i++){
   ul.innerHTML += `<li>${num} * ${i} = ${num*i}</li>`
  }
 
}






// ---------------------------------------------------------------------------

// 중첩 for 문

for(let y=1 ; y<=3 ; y++){
  console.log(`바깥쪽 for문 - 반복${y}`)
  for(let x=1 ; x<=2; x++){
    console.log(`안쪽 for문 - 반복${x}`)
  }
}
// x축 y축 이라 할떄 아래로 쫘라락 반복 하는건 y축이니까 y를변수로 둔다(첫번째 for문) 좌우로 쫘라락은 x축이니까 x를변수로 둔다(두번째 for문)

function check8(){
  //4바퀴 반복하는 for문
  for(let y=1 ; y<=4 ; y++){
    let str = "";

    for(let x=1 ; x<=5 ; x++){
      str += x;
    }

    console.log(str)
  }
}

function check9(){

  for(let y=1 ; y<=5 ; y++){
    let str = "";

    for(let x=1 ; x<=y ; x++){
      str += x;
    }

    console.log(str)
  }
}




// ----------------------------------------------------------------------------------------

//while문 확인
function check16(){

  // 변수를 선언만 해두기
  let val; //undefined



  // undefined과 null은 다르다
  while(val !== null) {

    
    // != , == 느슨한 비교 (undefined == null , '1'==1,0==false,1==true 모두 트루임)

    // typeof null = "object" , typeof undefined = "undefined"

    // != 비교 연산자 : 값을 비교!!!!!!!!!!!
    
    // 동일 비교 연산자(엄격한 비교)
    // !== : 값과 자료형이 모두 다른 경우 true
    // === : 값과 자료형이 모두 같은 경우 true

    // 요즘은 타입도 중요하게 생각해서 엄격한 비교 쓰는게 좋을지도

    val = prompt("취소해야 끝나"); //변수에 prompt값 대입
    // 확인 -> 입력값
    // 취소 -> null
  }

}



// 메뉴 주문하기
function check17(){

  //메뉴 가격 변수
  const gimbap = 3000;
  const ramen = 3500;
  const dks = 5000;
  //주문 개수 카운트 변수;
  let gCount = 0;
  let rCount = 0;
  let dCount = 0;

  let input; // undefined
  while(input !== null ){ // 취소 누르기 전까지 무한 반복
    input = prompt("메뉴를 입력하세요");

    switch(input){
      case "1" : gCount++; break;
      case "2" : rCount++; break;
      case "3" : dCount++; break;
      case null : alert("주문 완료!"); break;
      default : alert("메뉴에 작성된 번호만 입력해주세요"); break;
    }
  
  }
  alert(`김밥 : ${gCount}, 라면 : ${rCount} ,  돈까스 : ${dCount}`)
  let sum = (gCount * gimbap) + (rCount * ramen) + (dCount * dks);
  alert(`총 가격 : ${(gCount * gimbap) + (rCount * ramen) + (dCount * dks)}원`)
}
 

//while을 for 문 처럼 사용하기
// function check18(){
//   console.log("")

//   //1부터 10까지 1씩 증가하며 출력
//   let num = 1;

//   while(num < 11){
//     console.log(num);
//     num++;
//   }
// }

function check18(){
  let x= 10;
  console.log("")
  while(x>0){
  console.log(x)
  x--;
  }
}