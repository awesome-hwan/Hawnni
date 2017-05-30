# Todo_list   

### 목적  

DOM API를 사용해 컨트롤러 생성  

### 기능  

1. 플립형식 다이어리를 넘기는 듯한 기분이 들게함. (구현)
2. 추가 버튼 클릭시 input.value를 리스트에 추가. (구현)
  - 글 추하고 input.value값 비우기, input에 focus 하기 (구현)  
  - enterkey, spacekey key값으로 리스트 추가하기 __( issue )__ (구현)  

3. 리스트의 최대 갯수 5개로 설정. (구현)  

4. 글을 삭제하는 버튼.  __( issue )__ (구현)  
5. 체크박스 체크시 리스트에 밑줄, opacity 0.5  

### Issue  

1. input안에서 space(문자간 공백) 사용할 수 없음.(onkeyup사용시)  
  - onkeyup에서 onkeydown으로 변경하여 스페이스바를 문자와 문자 사이에도 사용할 수 있게함.  

2. filp시 y 축으로 스크롤 발생하여 body에 overflow-y: hidden 처리를하여 스크롤 생성 방지  

3. transition은 움직임을 가진 본인한테 속성을 걸어준다.  

4. delete_button 변수에 미리 생성한 제거함수를 버튼 클릭시 제거할 수 있도록 하였다.  


#### 주사용 기능  

> querySelector  

```javascript  
var Class = documet.querySelector('.Class_name')
```   

> appendChild  

```javascript  
add_list.appendChild(list_item)    
```  

> onkeydown  

```javascript  
input.onkeydown = funtion pressKeyEvent (evt) {
  if (evt.keyCode === 13 || evt.keyCode === 32) {
    addlist
  }
}
```  

> removeChild  

```javascript  
var removeItem = function () {
  var item = this.parentNode;
  item.parentNode.removeChild(item);
}
```
