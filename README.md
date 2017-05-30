
# Hwanni 페이지    

`blog`와 연동한 `repo`입니다.  
같은 실수를 방지하고 내 실력을 차곡차곡 쌓기 좋은 방법은 내가 공부한 내용을 기록하는것 이라고 생각한다.

그래서 기록하기 위해 `blog`를 시작한다.

<details>

<summary>(현) Scroll 이벤트 구현중 ( 세부정보 보기 )</summary>

#### 작업기간  

5월 20일 ~ ing   

#### 목표
Javascript에 더 많은 비중을 두어 페이지 액션을 나타내고 싶음.  

#### 모델  

[리니지M](https://lineagem.plaync.com/), [텀블러](https://www.tumblr.com/) 사이트에 사용되는 스크롤 이벤트 구현  

#### 리니지 M  

transition: translateY를 이동하는 방식으로 구현  

#### 텀블러  

z-index활용 및 position absolute를 이용하고 클래스 부여하는 방식으로 구현  

## 작업 이슈  

텀블러 형식으로 진행중 현재 클래스 부여가능 그러나 mousewheel시 이벤트가 중첩되서 한번에 동시진행됨. ( 해결 17.05.29 )

</details>  

---

### [ Button효과 바로보기 ]( https://awesome-hwan.github.io/Hawnni/Sololearn/CSS(Sass)/Button_Effect/ )

<details>

<summary>Button 효과 ( 세부정보 보기 )</summary>  

#### 목표  

각 버튼별 CSS속성을 달리함.  
position:absolute 의 활용, 가상요소 ::after를 활용하여 효과를 줌.  
가상클래스:hover, transition을 통한 특정 이벤트 발생시 애니매이션 발생.  

#### 기능  


1. 색이 가득 채워지는 효과  

2. 밑줄만 채워지는 효과  

3. 밑줄이 가운데서 갈라지는 효과  


#### 구현 방법   

> 공통  

``  
가상요소를 사용, 가상요소엔 position:absolute 본인엔 position:relative를 사용.  
가상요소가 본인의 위치를 기준으로 효과가 구현됨.  
position:absolute상태에서 top:0, right:0, bottom:0, left:0 사용시 부모의 너비를 가득 채움.  
가상요소의 content:''; 를 하지않으면 가상요소는 보이지 않는다.
``  

> 가득 채워지는 효과  

top:0, right:100%, bottom:0, left:0 를 주어 가상요소가 부모요소의 왼쪽으로 모두 들어가서 숨게된다.  

이때 호버시 right: 0 으로 설정하면 색이 가능 채워진다.  

다음에 부모에 transition을 넣어 애니매이션 효과를 부여한다.  

> 밑줄만 채워지는 효과  

top:97%, right:100%, bottom:0, left:0를 주어서 오른쪽에서는 꽉차고, 위에서부터는 97%만큼 이동하여 밑에 3%정도만 보이게 설정한다.  

호버시 right: 0 으로 설정하면 색이 밑줄만 채워지게 된다.  

다음에 부모에 transition을 넣어 애니매이션 효과를 부여한다.  

> 가운데서 갈라지는 효과  

top:97%, right:50%, bottom:0, left:50% 를 주어 가상요소가 오른쪽, 왼쪽으로 50% 이동하여서 가운데 겹쳐있게된다.  

호버시 right: 0, left: 0 으로 설정하여 밑줄이 가운데서 양옆으로 나오게 된다.  

다음에 부모에 transition을 넣어 애니매이션 효과를 부여한다.

</details>  

---  

### [반응형 Flex]( https://awesome-hwan.github.io/Hawnni/Sololearn/CSS(Sass)/Flex%20Patten/ )  

<details>  

<summary> 반응형 Flex </summary>

#### 목적  

Flex 응용구현

#### 기능  

- 반응형  

```  
@media screen and (max-width: 700px)
```  
미디어쿼리를 사용하여 700px을 전후로 화면구성을 변경  

- display: flex  

flex를 걸어줄 대상에대해 알고자함.  
order사용하여 위치 변경.


- module 비율  

```css
.module{
  width: 100%;
  height: 0;
  padding-bottom: 100%;
}
```  
위 패턴으로 가로: width, 세로: padding-bottom; 사용하여 모듈의 비율을 1:1, 2:1로 설정하였다.  



#### Issue

```css  
/*.module__colwarpper는 display:flex*/
.module__colwarpper:nth-child(1) {
  order: 3;}
/*2번을 적지않으면 기본값이 0이되어 의도치않은 결과가 나오게된다.*/
.module__colwarpper:nth-child(2){
  order: 2;}
.module__colwarpper:nth-child(3){
  order: 1;}
```  

1과 3의 위치를 변경하려했을떄 2번의 order을 설정하지 않았을경우
order의 기본값은 0이 되어 2번이 맨 앞으로 오게되어 의도하지 않은 결과가 도출됨.  

</details>  

---  

### [Name Tag]( https://awesome-hwan.github.io/Hawnni/Sololearn/CSS(Sass)/Name_Tag/ )

<details>  

<summary> Name Tag </summary>  

#### 목적  

overflow: hidden 속성의 이해, 이벤트 발생시(:hover) transform: translateY를 사용하여 움직이는 명함을 만들고자 하였다.  

#### 기능  

1. hover시 그림이 설정 translateY만큼 이동한다.(구현)  
2. 지정 구역 overflow: hidden을해 가리고 싶은 부분의 영역을 설정한다.(구현)  
3. display: flex를 사용해 가운데 배치.(구현)  

#### Issue  

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

</details>  

---  

### [그림정렬 반응형]( https://awesome-hwan.github.io/Hawnni/Sololearn/CSS(Sass)/Picture_Set/ )

<details>  
<summary> 그림정렬 반응형 </summary>  

#### 목표  

1. 브레이크 포인트(반응형) 별로 사진의 개수를 다르게 한다.  
2. 크기가 다른 사진을 크기가 같게 배치하기위한 구상을한다.  
3. hover됬을 때, 글씨가 보이도록한다.  

---  

#### 방법  


- mobile을 기준삼아 브레이크 포인트(변환점) 768px, 960px 을 지정한다.  
- mobile, tablet, desktop = 2장, 3장, 4장 (width기준)을 보이기한다.   

---  

>  배치  

- 전체구도: flex를 사용해 가로 배치, 줄바꿈변경.  
- img의 높이가 모두 달라 min-height: 100%을 주로 높이를 같게 설정.  

> 이미지 크기  

- position: absolute, 네방향값 0 을해주어 부모의 크기만큼 커지게함. 미설정시 공백이 생김.(h1의 공간만큼)  

- padding-bottom 위에서부터 사진의 크기를 아래쪽으로 보이게 해주는 중요한 속성이다. %로 잘 조정하여 정사각형같이 만듬.  

- div의 overflow: hidden의 속성을 주어 해당영역을 벗어나면 보이지 않게 만듬.

> 미디어쿼리    

- break point 768px, 960px일때의 div의 height: 0;   padding-bottom: n% , width: n% 을 같게 바꾸어줌(n:n 비율유지)  


</details>  
