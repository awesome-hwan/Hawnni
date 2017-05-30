# modal_window

## 목표  

- Vusjs, bulma를 활용하여 modal_window창 완성하기( 구현 )  
- v-if 를 활용하여 모달의 상태 변화주기( 구현 )  
- Close 버튼 클릭시 상태 변화 주기 ( 구현 )
- $emit을 활용하여 이벤트를 부모에게 전달시키기 ( 구현 )



### 구성  

> body  

```html
<div id="app">
  <!-- v-if boolean 형식으로 값을 반환하기 때문에 변수에 담아 초기값 true 설정 -->
  <!-- @close라는 이벤트를 자식에게 전달받으면 closeModal 이라는 함수를 발생시키게한다 -->
  <!-- $emit인자를 전달받는 곳이다. -->
  <modal_window v-if="is_visible" @close="closeModal"></modal_window>
</div>
```

> contect  

<details>
<summary> contect 살펴보기 </summary>  
```js

var modal = {
  template: `
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-content">
    <div class="card">
<header class="card-header">
  <p class="card-header-title">
    Component
  </p>
  <a class="card-header-icon">
    <span class="icon">
      <i class="fa fa-angle-down"></i>
    </span>
  </a>
</header>
<div class="card-content">
  <div class="content">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
    <a>@bulmaio</a>. <a>#css</a> <a>#responsive</a>
    <br>
    <small>11:09 PM - 1 Jan 2016</small>
  </div>
</div>
<footer class="card-footer">
  <a class="card-footer-item">Save</a>
  <a class="card-footer-item">Edit</a>
  <a class="card-footer-item">Delete</a>
</footer>
</div>
    </div>
    <button
    // 버튼 클릭시 부모가 가진 close이벤트를 실행하게하라.
    @click="$emit('close')"
    class="modal-close"
    ></button>
  </div>
`
}


// Vue 생성자 안에 el, components, data, methods를 두어 사용한다.
//  
var vm = new Vue({
  el: '#app',
  components: {"modal_window": modal},
  data : {
    "is_visible": true
  },
  methods : {
   closeModal: function() {
      this.is_visible = false
    }
  }
})
```
</details>
