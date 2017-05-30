# 구분 할 줄 아니?


## Target  

헷갈리는 두개의 용어, 이론을 정리하고자 한다.  

## Index  

- [Argument vs Parameter ](#argument-vs-parameter )  
- [Function declaration vs Function expression  ](#function-declaration-vs-function-expression)  
- [UX vs UI](#ux-vs-ui)

---  

### Argument vs Parameter  

> key point  

```javascript   
function sum( para1, para2, para3 ) {
// para1, para2, para3 은 parameter, 즉 함수를 '정의'할 때 외부에 변수를 받아들이는 임이의 값을 뜻함.

return para1 + para2 + para3;

}

sum ( 3 , 5 , 7 );
//함수를 호출시 사용한 3,5,7 은 argument가 된다.  
```  
같은위치에 존재하지만 다르게 이름이 불리우며 같은위치에 있더라도 호출되는 시점을 보면된다.  
[ [Index 바로가기](#index) ]  

---
### Function declaration vs function expression  

함수 정의는 변수 할당 없이 이름 있는 함수를 정의한 것이다.   

> key point  

#### Function declaration(함수선언)  
```javascript  
function bar() {
  // 말 그대로 함수를 정의,선언하는것을 말한다.
    return 3;
}
bar(); // 3

bar // function  
```  
함수명은 자신의 영역(Scope)과 자신의 부모의 영역(Scope)에서 접근 가능하다(visible).  

#### function expression(함수표현)  
```javascript  
//무명, 익명함수 표현식
var a = function() {
  return 3;
}

//명명 함수 표현식
var a = function bar() {
  return 3;
}

//자기 호출 함수 표현식
(function sayHello() {
  alert("hello!");
})();
```
문장을 function 으로 시작하면 함수 선언!  
문장을 function 으로 시작하지 않으면 함수 표현!  
자기 호출 함수에서도 function 앞에 소괄호가 있다! 함수 표현식이다!  
[ [Index 바로가기](#index) ]  

---  

### UX vs UI  

* [UX]: User Experience(사용자 경험)  
* [UI]: User Interface(사용자 인터페이스)    

두개가 같았으면 따로 단어를 분리해 놓지 않았겠죠?
근데 정말 구분하기 애매한 단어가 아닐까 싶다.    

> key point  

```
UI: 정보기기나 소프트웨어의 화면 등 사람과 접하는 면을 통들어 말한다. (도구적 측면)  
UX: 특정 정황과 목표를 갖는, 정보기기/서비스 사용자의 "느낌,태도,행동"을 말한다. (정신적 측면)
```  
[ [Index 바로가기](#index) ]  
