# Javascript_function  

### 목표  

자바스크립트 전반적인 이론을 알고자한다.  

### index  

- [IIFE 패턴](#iife패턴)  
- [호이스팅](#호이스팅)  
- [스코프](#스코프)  
- [클로져](#클로져)  
- [프로토타입](#프로토타입)  
- [call-apply-bind](#call-apply-bind)  
- [for(in)](#forin)
- [forEach](#foreach)

(계속 추가될 것이다.)   
### IIFE패턴  

(Immediately-Invoked Function Expression)    

```  
기본 패턴: (function () {
 //함수를 바로 실행한다.
  }())
```

> 예제  

```javascript  
  (IIFE = function ( know ) {
    console.log( know || "I don'n know")
    }
  ) (); // I don'n know
  IIFE("know"); // know
  IIFE(); // I don'n know
```  

IIFE 함수는 선언과 동시에 실행, **재사용** 할 수 있다.  
예 두개의 괄호는 JS컴파일러에게 익명 함수를 실행 시키라 한다.  
이것을 IIFE라고 부른다.  

> 왜 사용하지?  

전역을 오염시키지 않기 위해 사용한다.  

[ [Index 바로가기](#index) ]  

### 호이스팅  
(Hoisting)    

모든 변수선언은 호이스트 된다  
호이스트란, 변수의 정의가 그 범위에 따라 선언과 할당으로 분리되는 것을 의미한다.   
즉, 변수가 함수내에서 정의되었을 경우 선언이 함수의 최상위,  
함수 바깥에서 정의되었을 경우는 전역 컨텍스트의 최상위로 변경

[ [Index 바로가기](#index) ]  

### 스코프  

```javascript  
var foo = 0 //전역 스코프
console.log(foo); // 0이 기록됨.

var local_1 = function() {
  var foo = 1 // 지역 스코프  
   console.log(foo); // 1이 기록됨.  
}();

var local_2 = function() {
  var foo = 2 // 지역 스코프  
  console.log(foo); //2이 기록됨.
}();
```  
전역 스코프는 체인의 최종 도착점에 있다.  
함수를 포함한 함수는 서로 연결된 스코프 체인을 형성한다.  
블록스코프가 없다.  

> key  

var 키워드 없이 변수를 선언하면 지역 스코프가 아닌 전역 스코프에 변수가 추가된다.( 함수 스코프에서도 전역이 된다.)  

```js
var foo = function() {
  var boo = function() {
    bar = 2;
  }();
}();  

console.log(bar); // bar는 전역 스코프에 있으므로 2를 나타냄
```


[ [Index 바로가기](#index) ]  


### 클로져    

클로저는 외부함수(포함하고 있는)의 변수에 접근할 수 있는 내부 함수를 말한다.  
 스코프 체인(scope chain)으로 표현되기도 한다.  
클로저는 세가지 스코프 체인을 가진다.   
1. 클로저 자신에 대한 접근(자신의 블럭내에 정의된 변수)  
2. 외부 함수의 변수에 대한 접근  
3. 전역 변수에 대한 접근  

[ [Index 바로가기](#index) ]  

### 프로토타입    

사용자가 생성한 모든 함수는 prototype 속성(프로퍼티)을 가지는데 이는 프로토타입은 객체(빈 객체)를 참조한다. 프로토타입 객체에 멤버를 추가하면 상속을 통해 생성자를 통해 생성된 객체(인스턴스)는 이를 물려받아 사용가능하다.  

[ [Index 바로가기](#index) ]  

### call()-apply()-bind()    

call() : apply()와 유사하지만 매개변수를 전달하는 방식이 다르다. this가 첫 번째 매개변수인 점은 같지만, call()을 사용할 때는 반드시 **매개변수** 를 각각 나열해야 한다.  

apply() : 매개변수로 소유자 함수에 넘길 this와 매개변수 배열을 받는다. 두 번째 매개변수는 **Array** 의 인스턴스일 수도 있고 **arguments 객체** 일 수도 있다.  


bind(): this 컨텍스트 교체 후 실행 시점을 조작할 수 있다.  

[ [Index 바로가기](#index) ]  

### for(in)    

for루프와는 다르게 객체만을 순환하기 위해 사용한다.
for_in루프는 prototype 체인까지 탐색을 한다.
프로토타입 프로퍼티를 걸러내기위해 hanOwnProperty()를 사용해 자기 자신만을 순회하게한다.  

```javascript  
// for문
for (var i = 0; i < array.length; i++){
  console.log(array[i]);
}
// for_in문  
array = { a: 1, b: 2, c: 3, d: 4, e: 5};

for (var i in array){
  console.log(i, ' ', array[i]);
}

// i는 객체의 key값, array[i]는 객체의 value값을 나타낸다.  
```  
[ [Index 바로가기](#index) ]  

### forEach    

```javascript
var array = ["a", "b", "c", "d", "e"];

array.forEach( function (item, index) {
    //item은 배열의 값들  
    //index는 배열의 순서번호를 나타낸다.
    console.log( item, index)
})
```  
forEach문은 배열을 대상으로 사용 할 수 있으며 내부적으로 함수를 사용한다.  

[ [Index 바로가기](#index) ]  


---
출처: 자바스크립트를 깨우치다.
