
/* 인라인 이벤트 모델 확인 */

function check1(btn){

  // 매개변수 btn == 클릭한 버튼(this가 들어갈것)
  // <button onclick="check1(this)" style="background-color: yellow;">인라인 이벤트 모델 확인</button> 가 확인됨

  console.log(btn);

  //버튼의 배경색을 얻어와 저장
  const bgColor = btn.style.backgroundColor;

  console.log(bgColor);

  // 버튼이 클릭될 때 마다 pink <-> yellow 변경

  if(bgColor == "yellow"){
    btn.style.backgroundColor = "pink";
  } else {
    btn.style.backgroundColor = "yellow";
  }
}




//--------------------------------------------------------------------------------------



// 고전 이벤트 모델 확인
// HTML이 아닌 JS단에서 모두 작성

// 아이디 test1-1인 요소를 얻어와 test1a 변수에 저장
const test1a = document.querySelector("#test1-1")

// 고전 이벤트 모델 작성법
//요소.이벤트리스너 = 이벤트 핸들러

test1a.onclick = function() {
  alert("고전 이벤트 모델 확인 버튼 클릭됨")
}



// 고전 이벤트 모델 제거

// #test1-2 버튼 클릭 시
// #test1-1의 onclick 이벤트 리스너의 이벤트 핸들러 제거

document.querySelector("#test1-2").onclick = function(){
  //test1-1 기존 onclick 이벤트 핸들러를
  //null 로 덮어씌움(이벤트 제거)
  test1a.onclick = null; // 함수가 있었다가 사라짐
  alert("이벤트 제거됨")
}

// 고전 이벤트 모델 단점

// #test1-3 요소를 얻어와 test1c 변수에 저장
const test1c = document.querySelector("#test1-3");

// test1c 요소가 클릭되었을 때 배경색을 red로 변경
test1c.onclick = function () {
  test1c.style.backgroundColor = "red"
}


// ............... A few moments latet...............

// test1c 요소가 클릭되었을 때 글자색을 "white"로 변경

test1c.onclick = function () {
  test1c.style.color = "white";
}

// -> onclick에 저장된 값이 덮어씌워지면서 이전 코드가 사라지는 문제가 발생


// --------------------------------------------------------------------------------

// 표준 이벤트 모델 확인

const test2 = document.querySelector("#test2");

// 표준 이벤트 모델 작성법
// 요소.addEventListener("이벤트종류", 이벤트핸들러(함수))

test2.addEventListener("click", function(){
  // 현재 test의 투명도 확인 
  // 투명도 1(불투명) -> 0(투명) 0.1씩 감소
  let curr = test2.style.opacity;

  //맨처음에는 투명도 '' -> 1대입
  //console.log(curr);

  if(curr == ''){
    test2.style.opacity = 1;
    curr = 1;
  }

  // 투명도 0.1 감소
  test2.style.opacity = curr - 0.1;

  if(test2.style.opacity ==0){ //완전 투명해졋을때
    test2.style.opacity = 1 // 다시 불투명하게
  }

})

//test2 요소를 클릭하면 클릭 횟수 확인
let count = 0;

test2.addEventListener("click", function(){

  count++;

  // 표준 이벤트 모델의 이벤트 핸들러(함수)안에서
  // this == 이벤트가 발생한 요소
  this.innerText=count;
})

// 코딩 처음에 막히면 한번 역할들을 주석으로 표기해보자

// 입력한 색상으로 배경색 변경하기
// ->
// 내가 입력할 input 태그 요소를 얻어오기
// 얻어온 색상(내용)으로 배경색을 줄 div 요소 얻어오기

// 얻어온 input 요소의 내용(작성된값) 얻어오기

const bg = document.querySelector("#box3")
const input = document.querySelector("#input3")

function changeColor(){

  if(input.value.trim().length == 0){
    alert("채팅 내용을 입력해 주세요");
    input.value=""; 
    input.focus(); 
    return ; 
  } else {
    bg.style.backgroundColor = input.value
    input.value = ""
  }
}
// input요소에 이벤트 추가
// e : 이벤트 객체(발생한 이벤트에 대한 정보를 담은 객체)

// 키보드가 올라왔을때, (이벤트핸들러)함수안의 작성된 내용 수행!
// 조건 : 이벤트로써 감지된 키가 Enter면 얻어온 input 요소의 내용(작성된값) 얻어오기
// 실행 : bg에 배경색 대입
document.querySelector("#input3").addEventListener("keyup", function(e){
  //조건 : 감지된 키가 Enter
  if(e.key == "Enter" ){ 
    changeColor();
  }
});

// ++ box3를 클릭하면 
// box3가 가지고있는 배경색을 alter으로 출력

bg.addEventListener("click",function(e){

  // e.target : 이벤트가 발생한 대상 요소
  alert(`배경색 : ${e.target.style.backgroundColor}`)
  // bg, this, e.target 전부 적용된다
})












// 2024.8.22 수업진도
