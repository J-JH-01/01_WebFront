
//식당명
let signContainer = document.querySelector(".res-name-container")

document.getElementById("resName").addEventListener("click", (e) =>{
  let input = document.getElementById("resNameInput")
  input.classList.remove("res-name-hidden")
  e.target.classList.add("res-name-hidden")
  input.placeholder = "식당명을 입력하세요"
});

document.getElementById("resNameInput").addEventListener("blur", (e) =>{
  let span = document.getElementById("resName")
  span.classList.remove("res-name-hidden")
  e.target.classList.add("res-name-hidden")
  e.target.placeholder.remove()
});



// --------------------------------------------------------------------------

// 수정 버튼

document.getElementById("updateBtn").addEventListener("click", () =>{
  document.getElementsByClassName("normal-container")[0].classList.add("b-hidden")
  document.getElementsByClassName("edit-container")[0].classList.remove("b-hidden")
})

//종료 버튼

document.getElementById("exitBtn").addEventListener("click", () =>{
  document.getElementsByClassName("normal-container")[0].classList.remove("b-hidden")
  document.getElementsByClassName("edit-container")[0].classList.add("b-hidden")
})


//추가 버튼

document.getElementById("addMenu").addEventListener("click", () =>{
  let x = document.getElementsByClassName("menu")
  let name = Array.from(document.getElementsByClassName("menu-name"))
  let price = Array.from(document.getElementsByClassName("menu-price"))

  console.log(name)


})













// 삭제 버튼

document.getElementById("deleteMenu").addEventListener("click", () =>{





})

