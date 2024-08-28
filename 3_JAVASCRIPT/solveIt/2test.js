function double(){
  const box = document.getElementById("ulTag")
  let numbers = [1, 2, 3, 4, 5];

  const list = numbers.map(number => number *2)

  for(i=0 ; i<list.length ; i ++){
  const li = document.createElement("li")
  li.classList.add(`${i}th`)
  box.append(li)
  li.innerText = list[i]
  }
}

double()