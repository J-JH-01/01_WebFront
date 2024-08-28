const createBox = document.querySelector("#createBox"); // button
const container = document.querySelector(".container"); // div

// createBox 버튼 클릭 시 div.box 를 생성하여 
// container에 마지막 자식으로 추가

createBox.addEventListener("click" ,() => {
  
  // 1. div를 생성을 위해 div 요소 생성
  const box= document.createElement("div"); // <div></div>가 바디 태그외부에 둥둥 떠다니는 상태인거임
  console.log(box);

  // 2. 만들어진 div 요소에 "box" 클래스 추가
  box.classList.add("box"); // <div class="box"></div>

  // 3. container에 마지막 자식으로 만들어둔 div를 추가
  container.append(box);

  // 4. input 요소 생성
  const input = document.createElement("input"); // <input>
  input.type = "text" ; // <input type="text">

  // 5. 생성된 input을 box의 마지막 자식으로 추가 
  box.append(input);
});

/*
  요소.classList : 요소의 클래스 목록
  -> 클래스 존재여부, 추가, 제거 등을 할 수 있음
  console.log(container.classList)

  * 요소.classList
  -> 요소 목록이 [배열] 형식으로 반환

  * 요소.classList.contains("클래스명")
  -> 클래스가 있으면 true 없으면 false를 반환

  * 요소.classList.add("클래스명")
  -> 클래스 추가

  * 요소.classList.remove("클래스명")
  -> 클래스 제거

*/

//innerHTMl로 요소 추가
const innerHTMLBox = document.querySelector("#innerHTMLBox")

innerHTMLBox.addEventListener("click", () =>{
  container.innerHTML += "<div class='box'><input type='text'></div>"
})