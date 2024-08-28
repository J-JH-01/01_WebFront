// .js 파일 내부를 <script></script> 내부라고 생각하면 됨

console.log("html 파일과 연결됨");

function externalFn() {
  alert('외부 파일에 작성된 함수가 호출됨');
}


// -----------------------------------------------------

// JS 맛보기
// 버튼 클릭시 body 태그의 글자색, 배경색 변경

// 1. body 태그를 선택
const body = document.querySelector("body");
// 바디라는 박스 안에다가(const body의 의미) document~;까지를 넣어두는 것 이라는 뜻

/* 실행되면 다크모드로 바꾸는 함수(기능) */
function darkMode() {
  body.style.color = "white"; // 글자색을 흰색으로 변경
  body.style.backgroundColor = "black"; // 배경을 검정색으로 변경
}

/* 실행되면 라이트모드로 바꾸는 함수(기능) */
function lightMode() {
  body.style.color = "black"; // 글자색을 흰색으로 변경
  body.style.backgroundColor = "white";
}