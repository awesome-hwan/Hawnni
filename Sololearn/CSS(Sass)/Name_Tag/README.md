# Name_Tag  

### 목적  

overflow: hidden 속성의 이해, 이벤트 발생시(:hover) transform: translateY를 사용하여 움직이는 명함을 만들고자 하였다.  

### 기능  

1. hover시 그림이 설정 translateY만큼 이동한다.(구현)  
2. 지정 구역 overflow: hidden을해 가리고 싶은 부분의 영역을 설정한다.(구현)  
3. display: flex를 사용해 가운데 배치.(구현)  

### Issue  

그림에 호버시 transition이 잘 적용되나 마우스를 그림에서 벗어나면 그림이 **갑자기** 원래자리로 돌아오게됨.  

```css
.face-window {
  width: 259px;
  height: 195px;
  transition: all 1s ease-in-out;
  transform: translateY(0%);
}

.face-window:hover {
  /*transition: all 1s ease-in-out;*/
  transform: translateY(-100%);
}
```

이벤트 자체에 transition을 주는것이아닌 이벤트 주체에 transition을 주어 전체적으로 transition이 적용될 수 있도록 한다.
