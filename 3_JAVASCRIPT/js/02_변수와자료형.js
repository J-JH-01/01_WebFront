// 브라우저 콘솔에 값 띄우려면
// console.log(값);
// -> 괄호 내부의 값을 출력

console.log(1234);
console.log("문자열은 양쪽에 쌍따옴표 작성");
console.log('JS는 홑따옴표도 문자열로 취급');
// console.log(문자열);  // 이건 변수(상자)로 취급된다 


// --------------------------------------------------------------------------------------------------

// 변수의 선언
// 메모리에 값을 저장할 공간을 만들고 이름을 붙이는 것
// [작성법]
// 변수종류 변수명;

var number1; // number1 이라는 이름의 상자가 만들어진 것

console.log(number1);  // 이 단계에서 읽으면 초기화 된 값이 없어서 언디파인으로 나옴

// 초기화 ( == 변수에 처음 값을 할당하는 과정 )
// 선언된 변수에 값을 처음 대입하는 것
//[작성법]
// 변수명 = 값;
number1 = 10; // "=" 대입연산자라 함, 오른쪽 값을 왼쪽에 대입

//콘솔에 number1 값 출력하기
console.log(number1);

// 변수의 선언과 초기화
var number2 = 20;

console.log(number2);

// number1, number2의 합 출력하기
console.log(number1+number2);

// 변수에 대입한 값 변경하기
number1 = 300;
number2 = 400;

// 1) 문자열 + 문자열/숫자/변수 == 이어쓰기

console.log("number1의 값 : " + number1); // "number1의 값 : 300"
console.log("number2의 값 : " + number2); // "number2의 값 : 400"
console.log("100" + 100); // "100100" 뒤의 숫자100은 형태를 잃어버리고 문자열이 되어버림

// 2) 괄호 내부에 , 를 작성해 각각 값을 독립적으로 출력
// 형변환 없이 출력되어 문자열 따로, 다른 데이터타입 따로 출력됨
console.log("number1 : " , number1 , "/ number2 : " , number2) 
//"number1 : "  300  "/ number2 : "  400

// --------------------------------------------------------------------------------------------------

// var, let ,const의 차이점



// 1. var (변수, 변수 선언 시 중복되는 변수명으로 선언 가능)
// -> 먼저 선언된 변수가 나중에 선언된 변수에 덮어 씌워짐

var menu = "삼겹살"; // 변수 선언 및 초기화
console.log("menu : " + menu);

var menu = "초밥";
console.log("menu : " + menu);

// --------------------------------------------------------------------------------------------------

// 2. let (변수, var의 변수명 중복 문제 해결)

let number3 = 25;

// 같은 이름으로(변수명) 선언을 또 다시 하려고 해서 에러남
// let number3 = 500; // 빨간줄 에러남
//오른쪽 스크롤바 보면 에러난 위치에 빨간색이 쳐져있음
// 빨간 밑줄쳐진 부분에 마우스 올려놓으면 이유도 알려줌

number3 =  500; // 기존 변수 number3에 새로운 값 덮어쓰기(재대입)

console.log("number3 : " + number3);

// --------------------------------------------------------------------------------------------------

// 3. const (상수,constant, 항[상] 같은 [수])
// 한 번 값이 대입되면 새로운 값을 대입할 수 없음(재대입(X))
// 중복 선언 불가
// 선언만 할 수 없음
// -> 선언과 초기화가 동시에 이루어져야 함

const PI = 3.141592;

// const PI;
// const A;   //선언만 불가
//PI = 1; // TypeError: Assignment to constant variable.
// -> 상수에 새로운 값을 대입할 수 없는데, 대입하려고 해서 에러

console.log("PI : ", PI);

// --------------------------------------------------------------------------------------------------
// 블록 레벨 scope / 함수 레벨 scope (scope: 범위)

// 블록 레벨 scope (let, const)
// : let과 const로 선언된 변수/상수는 변수가 선언된 블록(중괄호{}) 내부에서만 유효하다 라는 것을 의미한다
// 즉, 코드 블록 내부에서 선언한 변수(let,const)는 해당 블록 외부에서는 접근할 수 없다

// 전역 변수 
let foo1 = 123;
const foo2 = 456;


//
{ //블록 레벨 scope
  let num1 = 789;
  const num2 = 0;
}



console.log(foo1); // 123, 전역변수이기 때문에 (블록과 관계없음) 접근 가능 
console.log(foo2); // 456, 전역변수이기 때문에 (블록과 관계없음) 접근 가능

// console.log(num1); // ReferenceError: num1 is not defined
// console.log(num2); // ReferenceError: num1 is not defined
// -> 둘 다 블록레벨 스코프이기 때문에 블록 밖에서 접근 할 수 없음



// 함수 레벨 scope (var)
// : var 키워드로 선언된 변수는 함수 내 어디서든 접근 할 수 있다
// 블록 레벨 스코프를 무시하고, 변수(var)가 선언된 함수 전체에서 유효함

var test1 = 123; // 전역 변수
{
  var test2 = 456; // 전역변수
}

console.log(test1); // 123


console.log(test2); // 456
// WHY? -> 함수레벨 스코프인 var는 블록을 무시하기 때문에

// 그럼 함수 안에서는 어떻게 될까


//함수의 선언
function example() { // 이렇게 함수 형태로 만들어진 코드블록은 함수레벨 scope
  var test3 = "함수레벨 var 테스트";

  console.log(test3);
}

example();  // 함수의 호출. 호출을 해야 함수가 수행되면서 함수내에 작성된 코드가 실행됨
//선언과 호출 세트 .. 선언을 했으면 호출을 꼭 하자~

//console.log(test3); // ReferenceError : test3 is not defined
// -> var는 블록레벨만 무시할 뿐, 함수레벨은 무시되지 않음
// 즉, 함수 블록 안에서 선언된 var 변수는 함수 안에서만 사용 가능
//(== 함수 외부에서 사용 불가)

// --------------------------------------------------------------------------------------------------

// 1. var의 호이스팅
// : var로 선언된 변수는 선언만 해당 스코프의 최상단으로 호이스팅 됨
// 초기화는 원래 코드 위치에서 수행된다

// var a; (내부적으로 이렇게 선언만 되어있는 상태)
console.log(a); // undefined
// -> 호이스팅되어 var a; 라는 선언이 상단으로 끌어올려짐(코드 맨위로 올라감)
// -> 선언은 되어있으나 값이 초기화되지 않았기 때문에 undefined를 출력함

// 변수의 선언과 초기화
var a = 10;
// 초기화는 원래 코드의 위치에서 이루어짐

console.log(a); // 10

// 2. let/const 의 호이스팅
// :/ let/const 로 선언된 변수는 선언만 해당 스코프의 최상단으로 호이스팅됨
// var와 달리 , let/const로 선언된 변수는 초기화가 이루어지기 전에는 사용될 수 없음
// console.log(x);  // ReferenceError: Cannot access 'x' before initialization


/* 
* TDZ(Temporal Dead Zone)
:시간적으로 죽은 구역
코드 실행과정에서 특정 시점까지 변수가 접근 불가능한 상태를 의미함
-Javascript에서 let/const 키워드로 선언된 변수가 초기화 되기 전까지 접근할 수 없는 구간을 의미
*/


//let x; (내부적으로 이렇게 되어있는 상태)
let x = 50; // 변수의 선언 및 초기화 

console.log(x); // 50

// 이러한 특성들 때문에 let/const는 var 보다 예측 가능한 코드를 작성할 수 있다(오늘날 let/const의 사용 이유)
// --------------------------------------------------------------------------------------------------

// js 자료형 확인하기
// typeof 연산자 : 변수/값의 자료형을 출력해주는 연산자
// undefined : 정의되지 않은 변수/값 -> 값이 아직 대입되지 않았다

let undef; //변수의 선언
console.log("undef  : ", undefined, typeof undef)

//string(문자열) : "" 또는 '' 내부에 작성된 값
const userName = '홍길동'
console.log("name =" , userName, typeof userName)


//한 글자만 작성해도 문자열(sting == M)


//number(정수, 실수, 양수, 음수, 0 등 모든 순자)

const age = 20;
const height = 185.7;
console.log("age0 : ", age, typeof age)
console.log("height : ", age, typeof height)


//boolean (논리값 true/false)\
const isTrue = true;
const isFalse = false;

console.log("isTrue : ", isTrue, typeof isTrue);
console.log("isFalse : ", isFalse, typeof isFalse);

// 2024. 8. 16 수업진도

// object (객체)
// 값을 여러개 저장할 수 있는 형태


// 1) 배열(Array) : 여러 값이 나열되어 있는 것의 묶음
// JS의 배열은 [] 작성

// [] 인덱스는 0,1,2... 이렇게 출발
const numbers = [10,20,30];

console.log("numbers : ", numbers, typeof numbers);
console.log("numbers 배열 값 중 0번째 : ", numbers[0], typeof numbers[0]);
console.log("numbers 배열 값 중 1번째 : ", numbers[1], typeof numbers[1]);
console.log("numbers 배열 값 중 2번째 : ", numbers[2], typeof numbers[2]);

// console.log("numbers 배열 값 중 3번째 : ", numbers[3], typeof numbers[3]);
// undefined - numbers[3]에는 아무값도 할당되지 않아 Undefined가 된다. ( 3번 빈방을 만들고 그걸 호출한 것)

// 2) JS 객체
// 값을 K:V (Map) 형식으로 여러개 저장하는 형태
// -> { Key:Value, K:V, K:V, ...}

//K(Key) : 값을 구분하는 이름(변수명 비슷)
//V(Value) : K에 대응되는 값(변수에 대입되는 값 비슷)

const user = { id : "user01", pw : "pass01", userName : "홍길동" };

// 3행 2열 짜리 테이블이라 생각해보자, 1열은 K 2열은 V
// (1,1) = id (1,2) =user01 , (2,1) = pw , (2,2) = pass01 , (3,1) = userName, (3,2) = 홍길동

console.log("user : ", user);

// 객체에 존재하는 값 하나씩 얻어오기

// 방법 1 : 변수명['key']
console.log("user['id'] : ", user['id']);
console.log(user['pw']);
console.log(user['userName'], typeof userName);

// 방법 2 : 변수명.key
console.log(user.id, user.pw, user.userName);

// 함수 (function)

// 작성법
//const 변수명 = function() {}; <-익명함수, 변수명 == 함수명

const sumFn = function(a,b) {return a+b}; // 꼭 const로 안해도 댐, 함수내용 자체는 안변하니까 걍 const로 하는것
// 함수를 정의할 때 사용(전달받은)하는 변수 : 매개변수 (Parameter) == (a,b)

// function sumFn(a,b) { return a+b }; 위와 동일한 함수

console.log(typeof sumFn); // function 나옴

console.log(sumFn(3,4)); 
// 함수를 호출 할 때 전달하는 값 : 전달인자(Argument) == (3,4)


