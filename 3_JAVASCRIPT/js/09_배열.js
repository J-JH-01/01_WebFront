function check1(){

  const arr1 = new Array();
  const arr2 = new Array(3); //3칸짜리배열
  const arr3 = []; //3칸짜리배열
  const arr4 = ["사과","바나나","딸기"]; //3칸짜리배열

  console.log(arr1);
  console.log(arr2);
  console.log(arr3);
  console.log(arr4);

  //배열명.length : 배열의 길이(배열에 잇는 칸 수 또는 저장된 데이터 수);
  console.log(arr1.length)
  console.log(arr2.length)
  console.log(arr3.length)
  console.log(arr4.length)

  // 배열의 index
  /*
    - 배열의 각 칸을 구분하는 번호
    - 0 부터 시작!
    - 중간에 번호를 생략할 수 없음(항상 연속적)
    - 마지막 index 번호는 == 배열 길이 -1
  */

  // 배열명[index] -> 배열의 해당 index에 존재하는 데이터 반환
  // arr4 -> ['사과','바나나','딸기']
  console.log( arr4[0] );
  console.log( typeof arr4[0] );
    
  // 배열명[index] = 값; -> 해당 인덱스에 저장된 값
  arr2[0] = 100; 
  arr2[1] = "배고파";
  arr2[2] = true;

  console.log("arr2 : ", arr2);
  // JS 배열의 특징 : 인덱스별로 자료형을 다르게 넣을 수 있다!

  arr1[0] = '가'
  arr1[1] = '나'
  arr1[2] = '다'

  console.log("arr1 : ", arr1);

}

//배열과 for문
function check2(){
  //for문을 이용해서 배열 요소 초기화 하기
  
  //for 이용 x
  const arr1=[];

  arr1[0] = 0;
  arr1[1] = 10;
  arr1[2] = 20;
  arr1[3] = 30;
  
  console.log("arr1 : ", arr1)

  //for문 이용 O
  const arr2 = [];

  for(let i = 0; i < 4 ; i++){
    arr2[i] = i*10
  }
  console.log("arr2 : ", arr2)

  const arr = [10,20,50,100,500,1000];

  arr.forEach((element, index) => {
    console.log(`${index}, ${element}`)
  });
}

//배열과 for문2
function check3() {
// 배열에 저장된 값 하나씩 순서대로 출력하기
//  -> for 문을 이용해서 배열에 모든 요소 접근하기

const arr = [10,20,50,100,500,1000];

for(let i = 0 ; i < arr.length ; i++){
  console.log(`arr[${i}] == ${arr[i]}`)
}

}

function check4(){
  //for문을 이용해서 배열을 순서대로 초기화 한 후
  // 다른 for 문을 이용해서 배열 요소를 하나씩 모두 출력

  const arr = new Array(5);
  //5칸 짜리 배열 (요소별로 내용 없음)

  // 1. 배열을 순서대로 초기화
  for(let i=0 ; i < arr.length ; i++){
    arr[i] = Number(prompt(`${i}번째 숫자 입력`))
  }
  
  //만들어진 arr 확인
  console.log(arr);

  // 2. 배열 요소를 하나씩 모두 출력 + sum

  let sum = 0 ; // 합계 저장 변수
  for(let i=0 ; i < arr.length ; i++){
    console.log(`arr[${i}] == ${arr[i]}`)
    sum += arr[i] // 값 누적
  }
  console.log("sum : ", sum)
}






function seletMenu(){

  //결과 출력 span
  const menuResult = document.getElementById("menuResult")



  //점심 메뉴로 초기화된 배열 생성
  const menu = ["순두부찌개","파스타","피자","부대찌개","설렁탕","갈비탕","텐동","햄버거","백반","대림국수","콩국수"]; // 길이 11

  const r = Math.floor(Math.random() * menu.length);

  menuResult.innerText = menu[r]
}





// 2차원 배열
function check5(){

  const arr = [ [1,2,3,4],      // 0행
                [5,6,7,8],      // 1행
                [9,10,11,12] ]  // 2행

  const arr1 = [100,200,300,400];
  const arr2 = [900,800,700,600];              

  // 배열명[행][열]
  // 8을꺼내고 싶다
  console.log(arr[1][3]) // 8
  console.log(arr[2][2]) // 11
  
  arr[3] = arr1;
  arr[4] = arr2;
  console.log(arr) 
  console.log(arr[4][3]) // 600
}




//2부터 2씩 증가하는 수를 5행 5열 배열의 모든 요소에 차례대로 대입하고 출력하기
function check6(){
  let count = 2;
  const arr =[];

  for(let row = 0 ; row < 5; row++){ //행제어
    arr[row] = [];
    // arr[0] = [] //[[]]
    // arr[1] = [] //[[2,4,6,8,10], []]
    // arr[2] = [] //[[2,4,6,8,10], [12,14,16,18,20], []]
    // arr[3] = [] //[[2,4,6,8,10], [12,14,16,18,20], [22,24,26,28,30],[]]

    for(let col=0 ; col<5 ; col++){ // 열제어
      arr[row][col] = count; // row행 col 열에 count를 대입
      count += 2;

      //arr[0][0] = 2; / [[2]]
      //arr[0][1] = 4; / [[2,4]]
      //arr[0][2] = 6; / [[2,4,6]]
      //arr[0][3] = 8; / [[2,4,6,8]]
      //arr[0][4] = 10; / [[2,4,6,8,10]]
    }
  }
  console.log(arr)

}
