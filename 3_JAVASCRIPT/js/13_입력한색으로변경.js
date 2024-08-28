document.querySelector("#changeButton").addEventListener("click", function(){
  const list= document.querySelectorAll(".color-input")
  const bg = document.querySelectorAll(".box")
  console.log(list)
  console.log(bg)
  list.forEach((element,index) => {
    console.log(element.innterText)
    bg[index].style.backgroundColor = element.value
  });
})

//forEach는 배열에만 가능함
//HTMLCollerction 은 배열이 아니라 Array.from(list).foreach로 변환해서 써야함
//Nodelist는 배열이라 사용가능
//input은 밸류값을 저장하고, Nodelist==[input1,input2,input3 ...]이라 Nodelist[i].value로 써야 찾을 수 있음

// --------------------------------------------------------------------



// // console.log(boxList)
// // console.log(inputList)

// // #changeButton 요소를 클릭했을 때
// document.querySelector("#changeButton").addEventListener("click", function(){
  
// // 배경색 적요할 각 div 배열
// const boxList = document.querySelectorAll(".box");
// console.log(boxList)

// // 배경색 입력할 각 input 배열
// const inputList = document.querySelectorAll(".color-input")
// console.log(inputList)
// console.log(inputList.value)
//  // value 속성은 개별 input 요소에만 존재하므로, inputList[i].value와 같이 접근해야 합니다.
//  // 이건 inputList는 배열이라 밸류가 안먹히기 때문 value는 인풋에만 들어있는 속성
//  // input은 값을 value에다가 저장한다


// // console.log(boxList)

//   //inputList에 작성된 각 내용을 boxList에 있는 각 div에 대입
//   for(let i=0 ; i < boxList.length ; i++){
//     console.log(inputList[i].value)
//     boxList[i].style.backgroundColor = inputList[i].value;
//   }
// })
