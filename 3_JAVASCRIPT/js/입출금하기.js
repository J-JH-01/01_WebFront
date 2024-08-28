
const amount = document.getElementById("amount");
let balance = 10000;
const password = '1234';
const output = document.getElementById("output");


output.innerText = balance; // 초기금액 설정

//입금
function deposit(){
  const total = Number(amount.value);
  const lengTotal = amount.value.length;
  
  if(lengTotal == 0){
    alert("입금할 금액을 입력해 주세요")
  }
  else{
  balance += total;

  output.innerText = balance;

  // input에 기존에 작성된 값 제거하기
  amount.value= '';
  }
}


//출금
function withdrawal(){
  const total = Number(amount.value);
  const lengTotal = amount.value.length;

  if(lengTotal == 0){
    alert("출금할 금액을 입력해 주세요")
  }
  else{
    const pw = prompt("비밀번호를 입력하세요")
    if(pw == password){
      if(total > balance){
        alert("출금 금액이 잔액보다 클 수 없습니다")
      } else{
        balance -= total;
        output.innerText = balance;
        amount.value= '';
        alert(`${total}원이 출금 되었습니다. 남은 잔액 : ${balance}`)
        
      }
    }
    else if ( pw == null ){
      alert("출금을 취소하였습니다")
    } 
    else{
      alert("비밀번호가 일치하지 않습니다")
    }
  }
}
