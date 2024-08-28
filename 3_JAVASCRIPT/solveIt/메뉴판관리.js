
//식당명
let signContainer = document.querySelector(".res-name-container")

document.getElementById("resName").addEventListener("click", (e) =>{
  let input = document.getElementById("resNameInput")
  input.classList.remove("res-name-hidden")
  e.target.remove();
  input.placeholder = "식당명을 입력하세요"
});

document.getElementById("resNameInput").addEventListener("blur", (e) =>{
  e.target.classList.add("res-name-hidden")
  const span = document.createElement("span")
  span.id = "resName"
  span.innerText ="식당명을 입력하세요"
  signContainer.append(span)
  console.log(span)
});