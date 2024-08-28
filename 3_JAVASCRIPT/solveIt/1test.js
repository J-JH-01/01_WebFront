
//a.shift() 맨앞 없애기

function generateWelcomeMessage(){
  const name = document.getElementById("name").value
  const box = document.getElementById("welcomeMessage")
  
  const span = document.createElement("span")
  span.classList.add("wellcome")
  box.append(span)

  span.innerHTML = `${name}님 환영합니다`
  
}