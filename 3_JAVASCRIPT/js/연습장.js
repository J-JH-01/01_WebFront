// //동시에 전역선언하면 왜 안되나? 

// const A = document.getElementById("pw");

// //이 시점에서 input에 값이 안적혀있는 상황이라 무조건 null을 참조할 수밖에없음 

// const B = Number(A.value);

// console.log(A, B);





// 소수구하기


function prime(){
  const k = Number(document.getElementById("prime").value);
  let j = 0;
  let x = 2;

  if(k == 0){console.log("값없음")}
  else{
    while (j < k){

      for(let i=2 ; i <= x; i++){
        if(x%i == 0 && i!=x){
          x++;
          break;
        }
        else if(i == x){
          x++;
          j++;
          //break를 안걸면 조건식 i<=x 에서 i랑 x 둘다 증가해서 영원히 못따라잡음
          break;
        }
      }
    }
  
    console.log(x-1);
  }
}



//피보나치 수열
function Fibonacci(){
  const k = Number(document.getElementById("Fibonacci").value);

  let x = 1;
  let y = 1;
  let z = x+y;

  if(k==1 || k==2){
    y = 1;
  } else {
    for(let i = 1 ; i <= k-2 ; i++){
      x=y;
      y=z;
      z=x+y;
    }
  }

  console.log(y);
}



// 별찍기
function star(){
  const line = Number(document.getElementById("star").value);
  const half = Math.ceil(line/2);

  for(let i=1 ; i<=line ; i++){
    let result = "";
    for(let k=1 ; k<=i ; k++){
      result += " ";
    }
  }

}