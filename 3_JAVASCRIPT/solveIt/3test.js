document.getElementById("btn").addEventListener("click", () =>{
  const tag = document.getElementById("tagName").value
  const it = document.getElementById("tagInnerText").value
  const color = document.getElementById("colorName").value

  const box = document.getElementById("result")

  const newE = document.createElement(tag)
  newE.innerHTML = it
  newE.style.color = color
  box.append(newE)

  console.log(newE)
})