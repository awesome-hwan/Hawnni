
# Hwanni 페이지    

`blog`와 연동한 `repo`입니다.  
같은 실수를 방지하고 내 실력을 차곡차곡 쌓기 좋은 방법은 내가 공부한 내용을 기록하는것 이라고 생각한다.

그래서 기록하기 위해 `blog`를 시작한다.

<details>

<summary>(현) Scroll 이벤트 구현중</summary>

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

[ Button효과 바로보기 ]( https://awesome-hwan.github.io/Hawnni/Sololearn/CSS(Sass)/Button_Effect/ )

<details>

<summary>Button 효과</summary>  

#### 목표  

각 버튼별 CSS속성을 달리함.  
position:absolute 의 활용, 가상요소 ::after를 활용하여 효과를 줌.  
가상클래스:hover, transition을 통한 특정 이벤트 발생시 애니매이션 발생.  

### #기능  


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
