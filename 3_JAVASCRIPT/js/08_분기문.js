

//break 확인
function check1(){

  // 1부터 10까지 1씩 증가하다가 5가 되면 멈춤
  for (i=1 ; i<=10 ; i++){
    console.log(" i : ", i)
    if(i==5)break; // 한 줄 짜리 코드는 괄호 안써도댐
  }
}
 
//무한 반복하는 while문 멈추기
function check2(){
  let i = 1;
  // i가 10초과 시 멈춤
  while(1){
    console.log(i++);
    if(i > 10)break;
  }
}

// continue 확인
function check3(){
  //1부터 20까지 1씩 증가하며 출력
  //단 3의 배수는 건너 뛸래
  for(let i=1 ; i<=20 ; i++){
    if(i%3 ==0)continue;
    //3의 배수인경우 아래 코드까지 안가짐
    console.log("i : ", i)
  }
}

function check4(){
//1부터 30까지 1씩 증가하며 출력 단, 홀수 또는 10의 배수는 건너뜀
  for(let i=1 ; i<=30 ; i++){
    if(i%2!=0 || i%10==0)continue;

    //3의 배수인경우 아래 코드까지 안가짐
    console.log("i : ", i)
  }
}
//   let i = 1;
// while(1){
//   if(i%2!=0 || i%10==0){
//     i++;
//     continue;
//   }
//   console.log(i++);
//   if(i > 10)break;
// }

function check5(){

  for(i=0 ; i<5 ; i++){
    if(i>2)break;
    let str ="";
    for(k=0 ; k<10 ; k++){
      if(k!=0 && k%4==0)continue; // 그냥하면 0도 사라짐
      str += k;
    }
    console.log(str)  
  }
}

//break & continue 둘 다 적용해보기


function startGame(){
  const x = Math.floor(Math.random()*200)+1;
  let Try = 0;
  let ud ="";

  let y = prompt("숫자를 입력하세요")
  let first = true;

  while(1){

    if(y == null){
      alert("종료합니다");
      break;}
    
    //잘못 입력한 경우

    //1. 숫자가 아닌 글자를 넣은 경우
    // Nan(Not a Number : 숫자가 아니다)
    // isNaN(값) : 값이 Nan이면 true
    //2. 범위를 초과한 경우

    y = Number(y);

    if(isNaN(y)){
      alert("숫자만 입력해 주세요")
      y = prompt("숫자를 입력하세요")
    } else if(y < 1|| y>200 ){ 
      alert("1~200사이 값만 작성해주세요")
       y = prompt("숫자를 입력하세요")
    } else{

        if(first != true){
        y = prompt(`[${ud}] / 시도횟수 : ${Try}`)
        } 
        else first = false;

        Try++;
        
        if(y > x){
          ud = "down";
          continue;
        }
        else if(y < x){
          ud = "up";
          continue;
        }
        else if ( y == x){
          alert(`정답입니다!  시도횟수 : ${Try}`)
          break;
        }
      }
    } 
}

// 2024.8.21 수업진도