// 문제1

function helloName(name){
  console.log(`"Hello [${name}]!`)};

document.querySelector("#pro1").addEventListener("click", () => {
  let a = Number(prompt("첫번째 숫자"))
  helloName(a);
});


// 문제2
function sum(a,b){
  return a+b;
};
document.querySelector("#pro2").addEventListener("click", () => {
  let a = Number(prompt("첫번째 숫자"))
  let b = Number(prompt("두번째 숫자"))
  console.log(sum(a,b))
});

// 문제3
const multi = (a,b) => a*b;

document.querySelector("#pro3").addEventListener("click", () => {
  let a = Number(prompt("첫번째 숫자"))
  let b = Number(prompt("두번째 숫자"))
  console.log(multi(a,b))
});
// 문제4
function upDown(a,b){
  if(a>b){
    console.log("첫 번째 숫자가 더 큽니다")
  } else {
    console.log("두 번째 숫자가 더 크거나 같습니다")
  }
}
document.querySelector("#pro4").addEventListener("click", () => {
  let a = Number(prompt("첫번째 숫자"))
  let b = Number(prompt("두번째 숫자"))
  console.log(upDown(a,b))
});

// 문제5
function leng(str){
  return str.length;
}
document.querySelector("#pro5").addEventListener("click", () => {
  let str= prompt("글자열");
  console.log(leng(a,b))
});

// 문제6
function repeat(str,i){
  for(k=0; k<i ; k++){console.log(str)}
}
document.querySelector("#pro6").addEventListener("click", () => {
  let str= prompt("글자열");
  let i = Number(prompt("반복횟수"))
  console.log(repeat(str,i))
});

// 문제7
function evenOdd(a){
  if (a%2 == 0) return true;
  else return false;
}
document.querySelector("#pro7").addEventListener("click", () => {
  let a= Number(prompt("짝수일까요"));
  
  console.log(evenOdd(a))
});

// 문제8
function maxNum(a,b,c){
  let max=a;
  if (b > max) max=b;
  if (c > max) max=c;
  return max;
}
document.querySelector("#pro8").addEventListener("click", () => {
  let a= Number(prompt("첫번째"))
  let b= Number(prompt("두번째"))
  let c= Number(prompt("세번째"))
  
  console.log(maxNum(a,b,c))
});

// 문제9
const call = (arr) => arr[0];
document.querySelector("#pro9").addEventListener("click", () => {
  let arr = [1,2,3]
  
  console.log(call(arr))
});

// 문제10
function sumAvg(arr){
  let sum = 0;
  let count = 0;
  arr.forEach(element => {
    sum += element
    count++;
  });
  let avg = sum/count;
  return {"합계" : sum,"평균" : avg }
}
document.querySelector("#pro10").addEventListener("click", () => {
  let arr = [1,2,3]
  
  console.log(sumAvg(arr))
});


// 문제11
function resultFn(a,b,Fn){
  return Fn(a,b)
}
document.querySelector("#pro11").addEventListener("click", () => {
  let a= Number(prompt("첫번째"))
  let b= Number(prompt("두번째"))
  
  console.log(resultFn(a,b,sum)) // 함수명으로만 기입해야함
});

// 문제12
function nameHello(name,hello){
  return console.log(name,hello);
}

function nameHello2(Fn){
  Fn;
}

document.querySelector("#pro12").addEventListener("click", () => {
  let a= prompt("이름");
  let b= prompt("인사말");
  
  nameHello2(nameHello(a,b))
});