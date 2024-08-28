const list = ['q','w','e','r']

document.querySelector("*").addEventListener("keydown", function(e){
  list.forEach((_,index) => {
    if(list[index]==e.key.toLowerCase() )document.getElementsByClassName("key")[index].style.backgroundColor = "deepPink";
  });
});

document.querySelector("*").addEventListener("keyup", function(e){
  list.forEach((_,index) => {
    if(list[index]==e.key.toLowerCase() )document.getElementsByClassName("key")[index].style.backgroundColor = "white";
  });
});

// --------------------------------------------------------------------------------

// //<수업내용>

// // 문자열.toLowerCase() : 영어를 모두 소문자로 변경(A -> a)
// // 문자열.toUpperCase() : 영어를 모두 대문자로 변경(a -> A)


// //화면에 존재하는 key 모두 얻어오기
// const keys = document.querySelectorAll(".key");
// console.log(keys);

// // 문서(화면 전체)에서 키가 눌러지는걸 감지했을 떄
// document.addEventListener("keydown", function(e){
//   //console.log(e.key)

//   let idx; // 인덱스 값을 저장할 변수

//   //대문자로 입력되도 소문자로만 일단 받게
//   switch(e.key.toLowerCase()) {
//     case 'q' : idx = 0; break;
//     case 'w' : idx = 1; break;
//     case 'e' : idx = 2; break;
//     case 'r' : idx = 3; break;
//     default : return // 함수종료
//     //인덱스 번호만 바뀌면 되는걸 알게됨 그래서 인덱스 번호값 저장 변수를 만들면 편할것 같아보임
//   }
  
//   // idx 번호와 일치하는 keys 배열의 요소의 배경색을 변경
//   keys[idx].style.backgroundColor = "deepPink"
//   //

// })

// document.addEventListener("keyup", function(e){
//   let idx; 

//   switch(e.key.toLowerCase()) {
//     case 'q' : idx = 0; break;
//     case 'w' : idx = 1; break;
//     case 'e' : idx = 2; break;
//     case 'r' : idx = 3; break;
//     default : return}
  
//   keys[idx].style.backgroundColor = "transparent"
// })



// -----------------------------------------------------------------------------------------------
// <개량전>

// document.querySelector("*").addEventListener("keydown", function(e){
//   let a ;
//   const list = document.getElementsByClassName("key")
//   console.log(list)
//   if(e.key == "q")a=0;
//   if(e.key == "w")a=1;
//   if(e.key == "e")a=2;
//   if(e.key == "r")a=3;

//   if(e.key == "q" || e.key == "w" || e.key == "e" || e.key == "r"){ 
    
//     document.getElementsByClassName("key")[a].style.backgroundColor = "pink";
//   }
// });

// document.querySelector("*").addEventListener("keyup", function(e){
//   let a ;
//   if(e.key == "q")a=0;
//   if(e.key == "w")a=1;
//   if(e.key == "e")a=2;
//   if(e.key == "r")a=3;

//   if(e.key == "q" || e.key == "w" || e.key == "e" || e.key == "r"){ 
    
//     document.getElementsByClassName("key")[a].style.backgroundColor = "white";
//   }
// });