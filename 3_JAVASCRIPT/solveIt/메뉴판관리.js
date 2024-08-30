
//map 형식이라 이름이 중복되면 안된다!


//식당명
let signContainer = document.querySelector(".res-name-container")

document.getElementById("resName").addEventListener("click", (e) =>{
  const input = document.getElementById("resNameInput")
  const text = e.target.innerText
  input.classList.toggle("res-name-hidden")
  e.target.classList.toggle("res-name-hidden")
  
  input.value = text
});

document.getElementById("resNameInput").addEventListener("blur", (e) =>{
  let span = document.getElementById("resName")
  const text = e.target.value
  span.classList.toggle("res-name-hidden")
  e.target.classList.toggle("res-name-hidden")

  span.innerText = text
});

// --------------------------------------------------------------------------
let tb ;


// 수정 버튼
document.getElementById("updateBtn").addEventListener("click", () =>{
  document.getElementsByClassName("normal-container")[0].classList.toggle("b-hidden")
  document.getElementsByClassName("edit-container")[0].classList.toggle("b-hidden")

  let x = document.getElementsByClassName("menu")
  let name = document.getElementsByClassName("menu-name")
  let price = document.getElementsByClassName("menu-price")

  const leng = Math.max(name.length, price.length)

  const map = new Map();

  for(let i=0; i < leng ; i++){
    map.set(name[i].textContent, price[i].textContent)}

  for(let i=0; i < leng ; i++){
    let span = x[i].querySelectorAll("span")
    span.forEach(span => span.remove())
  }

  for(let i=0; i < leng ; i++){
    let a = document.createElement("input");
    a.classList.add("menu-name")
    let b = document.createElement("input");
    b.classList.add("menu-price")
    first = map.keys().next().value
    a.value = first
    b.value = map.get(map.keys().next().value)
    map.delete(first)

    x[i].append(a, b)
  }
  tb = true;
})



//종료 버튼
document.getElementById("exitBtn").addEventListener("click", () =>{
  document.getElementsByClassName("normal-container")[0].classList.toggle("b-hidden")
  document.getElementsByClassName("edit-container")[0].classList.toggle("b-hidden")

  let x = document.getElementsByClassName("menu")
  let name = document.getElementsByClassName("menu-name")
  let price = document.getElementsByClassName("menu-price")
  let k = 0;

  //남은 정보 만들어 기록
  let leng = Math.max(name.length, price.length)

  if(!tb){
    for(let i=0 ; i < leng ; i++){
    const dbtn = x[i].getElementsByClassName("remove-row")
    dbtn[0].remove()
  }}
  
  const map = new Map();
 
  for(let i=0; i < leng ; i++){
    if (name[i].value == "" || price[i].value == ""){
      k = i;
      break;}
    map.set(name[i].value, price[i].value)}
  
  for(let i=0; i < leng ; i++){
    let inputs = x[i].querySelectorAll("input")
    inputs.forEach(input => input.remove())
  }
  
  //이거 왜그런지 연구해보기!!!!!!!!!!!!@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  if(k != 0){
    for( let i = leng-1 ; i >= k ; i--){
      x[i].remove()
    }
    leng = k
  }

  for(let i=0; i < leng ; i++){
    let a = document.createElement("span");
    a.classList.add("menu-name")
    let b = document.createElement("span");
    b.classList.add("menu-price")
    first = map.keys().next().value
    a.innerText = first
    b.innerText = map.get(first)
    map.delete(first)

    x[i].append(a, b)
    }

})




//추가 버튼
document.getElementById("addMenu").addEventListener("click", () =>{

  //남은 정보 맵으로 만들어 기록
  let x = document.getElementsByClassName("menu")
  const name = document.getElementsByClassName("menu-name")
  const price = document.getElementsByClassName("menu-price")
  const container = document.getElementsByClassName("menu-container")

  const leng = Math.max(name.length, price.length)
  if(!tb){
    for(let i=0 ; i < leng ; i++){
      const dbtn = x[i].getElementsByClassName("remove-row")
      dbtn[0].remove()
    }
  } 
  
  const newLi = document.createElement("li")
  newLi.classList.add("menu")
  let a = document.createElement("input")
  a.classList.add("menu-name")
  let b = document.createElement("input")
  b.classList.add("menu-price")
  newLi.append(a, b)

  container[0].append(newLi)

  tb=true;
})




// 삭제 버튼

document.getElementById("deleteMenu").addEventListener("click", () =>{

  if(!tb) return; // 삭제버튼 다시 누르면 행동 취하지않기
  
  //남은 정보 맵으로 만들어 기록
  const x = document.getElementsByClassName("menu")
  const name = document.getElementsByClassName("menu-name")
  const price = document.getElementsByClassName("menu-price")

  const leng = Math.max(name.length, price.length)

  //x버튼 추가
  for(let i=0; i < leng ; i++){
    const xbtn = document.createElement("span");
    xbtn.classList.add("remove-row");
    xbtn.innerHTML = "&times"

    xbtn.addEventListener("click", (e) =>{ // 삭제버튼마다 이벤트 추가
    const parent = e.target.parentElement
    parent.remove()
    })

    x[i].prepend(xbtn)
  }
     
  tb = false; // 삭제버튼 다시누르기 금지
})

