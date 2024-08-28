const container = document.querySelector(".container")


// 추가 버튼 클릭시
document.querySelector("#add").addEventListener("click", () => {
  //div 만들기
  const row = document.createElement("div");
  row.classList.add("row");
  container.append(row);

  //input 만들기
  const input = document.createElement("input");
  input.classList.add("input-number");
  input.setAttribute("type","number");
  // input.setAttribute("class","input-number"); 도 가능
  // input.setAttribute("name","inputNumber"); 도 가능
  // ==( input.type = "number" )
  row.append(input);

  //span버튼 만들기
  const x = document.createElement("span");
  x.classList.add("remove-row");
  x.innerHTML = "&times" ; // innerText로 하면안됨 ㅠㅠ 못읽음
  row.append(input, x); //인풋옆에 span 나열한다는 뜻

  // -------------------------------------------------------------------------
  
  // 클릭된 x 버튼의 부모 요소(div.row)를 제거
  x.addEventListener("click", (e) =>{
    //현재 이벤트가 발생한 요소 (클릭된 x 버튼)의 부모요소를 선택
    const parent = e.target.parentElement ; // == div.row
    parent.remove()
  })
})



// 계산 버튼 클릭시
document.querySelector("#calc").addEventListener("click" , () => {
  const list = document.getElementsByClassName("input-number")
  let sum = 0;
  for(let i=0 ; i<list.length ; i++){
    sum += Number(list[i].value)
  }
  alert("결과 : " + sum);
});




/*
  1.추가버튼,계산버튼,컨테이너 정보 불러와 변수에 담기
  2.견본을 보면 div, input, span이 있으니 그걸 만들기
    2-1 : 클래스 row추가, 
    2-2: 클래스 input-number 추가, 타입 number추가, 
    2-3: 클래스 remove-low 추가 , 이너텍스트 times 추가, 
  3. 조립하기
    3-1 : 컨테이너에 넣기
    3-2 : 로우에 넣기
    3-3 : 로우에 넣기
*/
/*
  1.모든 클래스 .input-number 요소 얻어오기
  2.for문으로 number를 전부 순회하면서 안에 값 더하기
    -> 작성된 값(value)를 얻어와 숫자로 변경(number) **input은 무조건 밸류임 ㅠㅠㅠ
    합계 저장 변수 sum 누적

*/