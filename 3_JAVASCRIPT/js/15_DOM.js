// Node 확인하기
document.querySelector("#btn1").addEventListener("click", () => {
 const test = document.querySelector("#test") // ul태그

 console.log(test)

 // test의 모든 자식 노드 얻어오기

 const list = test.childNodes;

 console.log(list) // Nodelist -> 유사배열

//  NodeList(13) [text, comment, text, li#li1, text, li.cls, text, comment, text, li, text, li, text]
// 0: 
// text -> data : "\n             "
// 1: 
// comment -> 주석
// 2: 
// text -> data "\n\n"
// 3: li#li1  ->
// 4: 
// text
// 5: 
// li.cls
// 6: 
// text
// 7: 
// comment
// 8: 
// text
// 9: 
// li
// 10: 
// text
// 11: 
// li
// 12: 
// text 등등을 나옴
const li1 = list[3];
console.log(li1);

//1. 부모 노드 찾기(요소.paraentNode)
// -> li1 부모 노드 배경색 변경
li1.parentNode.style.backgroundColor = "skyblue";

// 2. 첫번째 자식 노드 찾기(기준이될 요소.firstchild)
// #test(ul)의 첫번째 자식 노드찾기
console.log(test.firstChild);

// 3. 마지막 자식 노드 찾기(요소.lastChild);
// -> #test(ul)의 마지막 자식 노드 찾기
console.log(test.lastChild);

// 4. 원하는 위치(index)에 존재하는 자식 노드 찾기
// (요소.childNodeS[index])
// -> #test의 자식 노드 중 , 노드리스트를 보고 요소 위치를 파악한느 것
// 3번째 li 태그를 찾아서 배경색 pink로 저장
test.childNodes[9].style.backgroundColor ="pink"

// 5.이전/다음 형제 노드 찾기
//(이전 형제 노드 : 요소.previouSibling)
//(다음 형제 노드 : 요소.nextSibling)

// -> 탐색용 코드는 연달아서 작성 가능

// test.childNodes[9]의 다음 다음 형제 노드 선택 == test.childNodes[11]

console.log(test.childNodes[9].nextSibling.nextSibling)

// #test의 마지막 자식 노드의 이전 형제 노드 선택

console.log(test.lastChild.previousSibling)


// 노드추가

// 1. 마지막 자식 노드로 추가하기 ( appendChild(노드) )

// ->list[11]의 마지막 자식으로 "ZZZ"라는 TextNode 추가

list[11].appendChild( document.createTextNode("ZZZ") )

// 2. 마지막 자식으로 추가 (append("내용" 또는 노드 또는 요소*n개))
list[11].append("12345", "abcd", "가나다라")

// 3. 첫 번째 자식으로 추가 ( prepend("내용" 또는 노드 또는 요소*n))
list[11].prepend("오늘","점심","뭐먹지");

// 4. 이전/다음 형제로 추가 (before/after("내용"또는 노드 또는 요소))
// #test 전/후에 내용 추가

test.before("이전 입니다")
test.after("이후 입니다")

});



// -------------------------------------------------------------------

const btn2 = document.querySelector("#btn2");

// test2 얻어오기(ul)
btn2.addEventListener("click" , () => {
  const test2 = document.querySelector("#test2");

  // #test2의 모든 자식 요소(children)
  console.log(test2.children)

  //test2의 첫 번째 자식 요소 찾기
  console.log(test2.firstElementChild);

  //test2의 마지막 자식 요소 찾기
  console.log(test2.lastElementChild);

  //test2의 부모 요소
  console.log(test2.parentElement);

  //test2의 이전 형제 요소
  console.log(test2.previousElementSibling);

  //test2의 다음 형제 요소
  console.log(test2.nextElementSibling);

});