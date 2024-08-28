
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


