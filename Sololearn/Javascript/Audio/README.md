# Audio 만들기  

### 목적  

DOM API, 함수의 속성을 응용하여 Audio를 만듬.  

### 기능  

1. Audio 기본속성에 없는 stop속성을 추가한다.(pause & currentTime = 0)( 구현 )  
2. 게이지 바를 만들어 음악의 시간이 흐름에 따라 게이지가 채워진다.( 구현 )  
3. 진행중인 음악의 현재시간, 전체시간을 업데이트해준다.( 구현 )  
4. 플레이리스트 & 커버사진 배치. ( 구현 )
5. 데이터를 가로방향으로 뿌려준다. ( 구현 )
6. 하나의 커버당 하나의 플레이리스트를 가진다.  

---  
### Issue  

- 일반 함수와 자가실행함수의 차이로 한 함수를 여러번 사용해야할 경우를 자가실행함수를 이용  

```javascript
var currentTime = ( function () {

var current = 0;
//클로져속성을 이용해 내부에서 외부의 변수를 읽었다.
//함수는 1급객체이므로 함수를 반환할 수 있다.
  return function (audio) {

    current = audio.currentTime;

 return  current;}
})();
```

위 함수는 현재의 시간을 나타내어 반복을 많이 요하는 함수이다.  
자가실행함수로 사용하지않으면 재사용이 되지않아 한번 실행후 에러가 남.  

>  변수 data에 넣은 데이터하나씩 명시적으로 가져올 수 있으나, 반복문을 사용하여 한번에 가져올 수 없다. 커버사진을 개별로 클릭하여 플립이 되는 상황을 연출하고 싶으나 개별 속성을 배열에서 끄내어 사용할 수 없음.  

- 하나의 커버당 하나의 플레이리스트를 만들려하는데 싱크바와 음악 재생, 멈춤, 일시정지 버튼을 cloneNode 상태로 어디에도 못 붙이고있음.  

- 케러셀이 끝나는 시점에 무한루프를 시켜준다.

- 동적으로 오디오 재생관련 버튼들을 생성시킨다.
