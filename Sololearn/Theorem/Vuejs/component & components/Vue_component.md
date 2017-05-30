# VueJs  

## component, components의 차이점 알기

## 뷰를 사용하기 앞서  
```js
<script src="https://unpkg.com/vue"></script>
```  
뷰를 사용하려면 위 내용을 파일안에 넣어준다.  


### component, components  

> body  

```js
<div id="app">
// template_name
   <my-component></my-component>
</div>
```

> contect  

```js
var vm = new Vue ({
  //body 내의 app아이디와 연결한다.
  el: '#app'
})
```
> component  

컴포넌트를 전역에 설정해 단일 컴포넌트를 사용한다.  
```js
Vue.component( 'my-template', {
  //백틱을 사용 문자열을 편하게 쓴다.
  template : `<div> 전역 컴포넌트! </div> `
})
```  

#### element: <img width="273" alt="2017-03-25 3 22 44" src="https://cloud.githubusercontent.com/assets/25549306/24319995/016ed93e-116f-11e7-9f9c-3c9836291b83.png">

#### Vue: <img width="188" alt="2017-03-25 3 22 54" src="https://cloud.githubusercontent.com/assets/25549306/24319996/01701d26-116f-11e7-9ff0-ad764aaf8756.png">

> Components  

```js
var Child = {
  template: `<div> 전역 컴포넌트! </div>`
}

//컴포넌트를 지역내에 설정하려했을 때
//컴포넌츠를 사용한다.
var vm = new Vue ({
  //body 내의 app아이디와 연결한다.
  el: '#app',
  components: {
    'my-component': Child
  }
})  
```  
결과는 위와 같다.

### component 와 components의 차이점을 알아보았다.  

`component`는 전역에 설정할 때 사용.
`components`는 지역에 설정할 때 사용.
