// 유사배열이란?
// 배열처럼 index, length를 가지고 있으나 배열 전용기능(메서드)를 제공하지 않음
// pop(),push(),map,filter() ... 등등을 못쓴다는 뜻임

  // 클래스 접근 테스트
function classTest(){
  // cls-test 요소 모두 얻어오기
  const divs = document.getElementsByClassName("cls-test")

  // -> HTMLCollection( == 유사배열)로 반환해줌
  console.log(divs)

  //divs 0,1,2, 쨰 요소에 배경색 변경
  divs[0].style.backgroundColor = "rgb(114,204,80)";
  divs[1].style.backgroundColor = "blue";
  divs[2].style.backgroundColor = "deepPink";

  //coolors 라는 사이트에서 사이트에 어울리는 색상 조합 알려주는 사이트 잇음
}


// 태그명으로 요소 접근하기
function tagNameTest(){
  //HTMl 문서에 존재하는 모든 li 태그 요소를 얻어와 배열로 묶어서 반환

  const tagList = document.getElementsByTagName("li");

  console.log(tagList)

  for(let i=0 ; i< tagList.length ; i++){

    // tagList[i].innerText : 작성된 내용을 얻어오기
    // tagList[i].innerText = "abc" : 내용으로 "abc" 대입하기
    console.log(tagList[i].innerText)

    tagList[i].style.backgroundColor =  tagList[i].innerText;
  }
}

//name으로 요소 접근하기
function nameTest() {
  // name 속성 값이 "hobby"인 요소를 모두 얻어와 변수에 저장

  const hobbyList = document.getElementsByName("hobby");

  console.log(hobbyList)
  //참고
  // Nodelist : 정적/동적 , forEach 사용가능
  // 동적 : forEach 사용불가

  let str = ""; // 체크된 값 누적
  let count = 0 ; 

  for(let i=0 ; i<hobbyList.length ; i++){
    // checkbox, radio 전용 속성(.checked)
    // input요소. checked - > 요소가 체크되어 있으면 true, 아니면 false 반환
    // input 요소.checked = true  - > 해당 요소를 체크하겠다
    // input 요소.checked = false - > 해당 요소를 체크 해제하겠다

    if(hobbyList[i].checked){
      str += hobbyList[i].value + " ";
      count++;
    }
  }
  // #name-div 요소에 내용으로 결과 출력
  document.getElementById("name-div").innerHTML = `${str} <br><br>선택된 취미 개수 : ${count}`

}









function cssTest(){
  //[요소 1개]
  // 1) document.querySelector("CSS 선택자");
  //   -> 선택자가 선택한 요소 중 첫번째 요소를 반환

  //[요소 n개 -> 배열]
  // 2) document.querySelectionAll("CSS 선택자");
  //   -> 선택한 요소 모두를 배열(유사 배열) 형태로 반환

  // target-div 속성 값이 "css-div" 요소에 접근
  const container = document.querySelector('[target-div="css-div"]') // 쌍따옴표 썻으면 안은 홑, 홑썼으면 안은 쌍 이렇게 해야 열리고 닫히는 구간을 잘 파악함

  container.style.border = "10px solid red"

  //첫번째 자식 div에 접근해서 내용을 "css 선택자로 선택해서 값 변경됨" 넣기

  const div1 = document.querySelector('[target-div="css-div"] > div');
  div1.innerText = 'Css 선택자로 선택해서 값 변경됨'
  
  //두번째 자식 div
  const div2 = document.querySelector('[target-div="css-div"] > div:last-child');
  div2.innerText = "첫번째 요소가 아니면 querySelector() 특징 활용 못함"

  //모든 자식 div 한 번에 선택(배열)
  const divList = document.querySelectorAll('[target-div="css-div"] > div');

  //index를 이용해서 요소 하나씩 접근해보기
  divList[0].style.fontFamily ="궁서";
  divList[1].style.fontSize = "20px";

  for(let i=0 ; i<divList.length ; i++){
    divList[i].onclick = function(){
      alert(`${i}번째 요소입니다`)
    }
  }
}



//카카오톡 채팅 화면 만들기
function readValue(){

  // 채팅이 출력되는 배경 요소 얻어오기
  // getElementByID랑 같음 써도됨
  const bg = document.querySelector("#chatting-bg")

  // 채팅 내용 입력 input 요소 얻어오기
  const input = document.querySelector("#user-input")

  // 입력된 값이 없을 경우
  // 1) 진짜 안적은 경우
  // 2) 공백만 적은 경우

  // 문자열.trim() : 문자열 좌우 공백 제거
  if(input.value.trim().length == 0){
    alert("채팅 내용을 입력해 주세요");

    input.value=""; // 이전 input에 작성된 값 삭제 -> 공백이 <------------------>요만큼 있었으면 이걸 초기화 시키는 것
    input.focus(); // input 커서 활성화

    return ; // 현재 수행중인 함수 종료 + 호출한 곳으로 돌아감
    // 조건에 안맞으니까 채팅을 출력하면 되는데 채팅 까지도 출력 시킬수 잇으니 적어두는 것
    
  }
  
    //채팅출력
    //채팅창에서 채팅이 기준 넘어가면 채팅이 아래로 붙어서 딱 스크롤되는것을 뭉탱로 표현함
    bg.innerHTML += `<p><span>${input.value}</span></p>`;
    bg.scrollTop = bg.scrollHeight ;
    // bg.scrollTop : 현재 스크롤의 위치( 스크롤이 현재 얼마나 내려와 잇는지름 나타냄)
    // bg.scrollHeight : bg의 스크롤 전체 높이 (스클로바를 이용해 스크롤 할 수 있는 전체 높이)
    // bg.scrollTop = 값 : 스크롤 윗부분의 값의 위치로 이동

    input.value = "";
    input.focus;
 
    
    // 아이디가 user-input인 input요소에서
    // 키가 올라오는 동작이 발생했을 떄(감지되었을 때)
    // 올라온 키가 "Enter"키 이면 readValue()함수를 호출

    // keyup(키보드 자판을 누르고/올라올때 올라왔을때를 감지) : 눌러지던 키가 떼어졌을 때(1회만 인식)
    // keydown(키보드를 누르고 있는걸 감지) : 키가 눌러졌을때 ( + 꾹 누르고 있으면 계속 인식됨)

}

document.querySelector("#user-input").addEventListener("keyup", function(e){

  // e : 이벤트 객체(발생한 이벤트 정보를 담고 있는 객체)
  // console.log(e)
  if(e.key == "Enter" ){ //엔터가 눌러졌을 때
    readValue();
  }
});
