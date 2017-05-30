# Javascript_function  

### 목표  

자바스크립트 기초적 기반을 다지고자 한다.  

---  

### index  

- [객체](#객체)  
- [생성자 함수](#생성자-함수)  


(계속 추가될 것이다.)   

---

### 객체  

**자바스크립트는 모든것들이 객체처럼 작동하거나 객체이다.**  
**객체: 이름이 있는 값(속성이라도고 한다)들의 집합이다.**  

```js
// 빈객체 생성
var Hwanni = new Object;

//점 표기법으로 객체의 속성을 지정한다.
Hwanni.living = 'ansan';
Hwanni.age = '26';
Hwanni.gender = 'male';

console.log(Hwanni);
//Object {living: "ansan", age: "26", gender: "male"}
```
객체는 속성을 담는 그릇일 뿐이며 이름과 값을 가지고 있다는 점에 유의하자.

[ [Index 바로가기](#index) ]  

---  
### 생성자 함수  

**내장되어 있는 함수가 아니여도 만들어 사용 가능하다.**  

```js
var Hwanni = function (living, age, gender) {
  this.living = living;
  this.age = age;
  this.gender = gender;

  console.log(this);
  // 생성자 함수가 실행되기전에 this는 window를 가리친다.
  // 하지만 실행되고 나서는 Hwanni( 객체 ) 를 가리쳐 속성을 추가한다.
}

  var Person = new Hwanni( 'ansan', 26, 'male')
  // Hwanni() 안에 값들은 문자열로 처리하지 않으면 변수 설정된것이 없기 떄문에 에러가 발생한다.  
  console.log(Person);
  // Hwanni {living: "ansan", age: 26, gender: "male"}
```

**우리가 기억해야할 내장 객체 생성자함수**
**new 키워드를 앞에 붙여줘야 한다는 사실도 잊지 말자**
```js
Number()
String()
Boolean()
Object()
Function()
Array()
Date()
RegExp()
Error()
// 생성자함수는 맨앞문자가 대문자이다.
```


[ [Index 바로가기](#index) ]  


---  

출저: 자바스크립트를 깨우치다.
