document.getElementById("btn").addEventListener("click", () =>{
  const input = document.getElementById("numberInput").value
  let oe = false;
  if(Number(input)%2 ==0){ oe = true }
  
  if(oe){setTimeout(()=> {alert("짝수입니다")},3000)}
  else {setTimeout(()=> {alert("홀수입니다")},3000)}
})