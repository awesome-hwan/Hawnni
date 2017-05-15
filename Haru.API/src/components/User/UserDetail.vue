<template>
  <div class="wrapper">
    <!-- 모달 윈도우 -->
    <div v-show='this.view' class="modal">
      <!-- 상세 페이지 컨텐츠 영역 -->
      <!-- <section v-for="data in this.$store.haruinfo" class="detail-contents"> -->
      <section class="detail-contents">
        <!-- 상세페이지 나가기 버튼 -->
        <img @click.prevent="gohome" class="detail-contents--exit" src="../../images/x_button.png" alt="나가기 버튼" width="32" height="32">
        <!-- 컨텐츠 내용 영역 -->
        <article  class="detail-contents__article">
          <figure class="detail-contents__figure">
            <!-- 컨텐츠 이미지 -->
            <!-- <img src="../../images/21.stephanie-mccabe-24620.jpg" alt="" class="detail-contents--image" width="600" height="400"> -->
            <img :src=this.$store.detailData.image alt="" class="detail-contents--image" width="600" height="400">
            <!-- <img src="../../images/emotions/happy.svg" alt="기쁨" class="detail-contents--emotion" width="40" height="40"> -->
            <img src="" alt="기쁨" class="detail-contents--emotion" width="40" height="40">
          </figure>
          <!-- <div class="untitle"> -->
            <!-- 컨텐츠 제목 영역 -->
            <h1 class="detail-contents__title">{{ this.$store.detailData.title }}</h1>
            <!-- 컨텐츠 내용 영역 -->
            <p class="detail-contents__text">{{ this.$store.detailData.content }}</p>
            <!-- 날짜 시간 영역 -->
            <p class="detail-content--date">
              <time class="nowtime"></time>
            </p>
            <div class="detail-contents__button--box">
              <button type="button" class="detail-contents--modify__button" @click.prevent="postmodifier">수정</button>
              <button type="button" class="detail-contents--delete__button" @click.prevent="postdelete" >삭제</button>
            </div>
          <!-- </div> -->
        </article>

        <div class="arrow-box">
          <button type="button" class="detail-contents--arrow-left">
            <img src="../../images/arrow-left.png" alt="이전 컨텐츠 이동" width="60" height="80">
          </button>
          <button type="button" class="detail-contents--arrow-right">
            <img src="../../images/arrow-right.png" alt="다음 컨텐츠 이동" width="60" height="80">
          </button>
        </div>
      </section>
    </div>


      <div v-show="!this.view" class="write__box">
        <form class="write__contentsBox" ref="form" method="POST"  enctype="multipart/form-data" @submit.prevent="postHaru">
          <!---######################### 이미지 영역 ###################-->
          <div  class="write__imageBox">
            <div v-if="image" class="imageInputbox">
              <input type="file" @change="onFileChange" class="pa haruphoto" id="haruphoto"/>
              <img src="../../images/writepage/buttons/imageIcon.svg" alt="컨텐츠 이미지" title="컨텐츠 이미지" class="imageIcon">
            </div>

            <div v-else class="prevImgBox">
              <img v-show='!this.image' name="image" v-model="haru_diary.image" :src=this.$store.detailData.image  class="prevImg" >
              <img v-show='this.image'name="image" v-model="haru_diary.image" :src="image"  class="prevImg" >
              <button @click="removeImage" class="pa img-upload-cancel-btn">Remove image</button>
            </div>
            <progress v-show="Show" value="0" max="100" id="uploader">0%</progress>
        </div>
          <!---######################### 텍스트 +감정영역 ###################-->
          <div class="write__textBox">

            <input class="write__haru-title" type="text" name="title" :placeholder=this.$store.detailData.title v-model="haru_diary.title" >
            <div name="emotions" class="write__emotions">
              <input value = 1 title="기쁨" type="radio" name="status" v-model="haru_diary.status" class="write__emotions-happy"><img src="../../images/emotions/happy.svg" alt="기쁨" width="25" height="25">
              <input value = 2 title="그럭저럭" type="radio" name="status" v-model="haru_diary.status" class="write__emotions-normal"><img src="../../images/emotions/normal.svg" alt="보통" width="25" height="25">
              <input value = 3 title="슬픔" type="radio" name="status" v-model="haru_diary.status" class="write__emotions-sad"><img src="../../images/emotions/sad.svg" alt="슬픔" width="25" height="25">
              <input value = 4 title="짜증" type="radio" name="status" v-model="haru_diary.status" class="write__emotions-rage"><img src="../../images/emotions/irritation.svg" alt="짜증" width="25" height="25">
              <input value = 5 title="분노" type="radio" name="status" v-model="haru_diary.status" class="write__emotions-angry"><img src="../../images/emotions/angry.svg" alt="분노" width="25" height="25">
            </div>
            <textarea class="write__haru-text" name="content" v-model="haru_diary.content" :placeholder=this.$store.detailData.content ></textarea>

          </div>
          <button type="submit" name="button" class="wirte__button" @click.prevent="Totalmodifier">수정완료</button>
          <span class="nowtime"></span>
        </form>
        <button class="modal-close" @click="gotoMain"></button>
      </div>



  </div>
</template>
<script>
export default {
  name: "",
  data: function data() {
    return {
      view: true,
      modifier_img: true,
      // 아래서부터는 Edit data
      image: '',
      storageRef: '',
      haru_diary: {
        author: this.$store.userID,
        title: '',
        content: '',
        status: '',
        image: ''
      },
      haruUrl:'',
      Show: false

    }
  },
  mounted: function mounted() {
    //일단 날짜 표시
    var now_time = document.querySelector('.nowtime');
    var now = new Date();
    var years = now.getFullYear();
    var month = now.getMonth()+1;
    if(month<10){
      month='0'+month;
    }
    var day = now.getDate();
    var hours = now.getHours();

    now_time.innerHTML=`${years}-${month}-${day}`
    //시간 데이터를 보낼 일이 생기면 새벽 5시는 전날로 처리해서 보내기 주석 테스

    switch (this.$store.detailData.status) {
  case 1:
    var status = document.querySelector('.detail-contents--emotion')
    status.setAttribute('src', 'dist/happy.svg')
    break;
  case 2:
    var status = document.querySelector('.detail-contents--emotion')
    status.setAttribute('src', 'dist/normal.svg')
    // console.log('그럭저럭이라니~~');
    break;
  case 3:
    var status = document.querySelector('.detail-contents--emotion')
    status.setAttribute('src', 'dist/sad.svg')
    // console.log('슬픔이라니~~');
    break;
  case 4:
    var status = document.querySelector('.detail-contents--emotion')
    status.setAttribute('src', 'dist/irritation.svg')
    // console.log('짜증이라니~~');
    break;
  case 5:
    var status = document.querySelector('.detail-contents--emotion')
    status.setAttribute('src', 'dist/angry.svg')
    // console.log('분노라니~~~');
    break;

  default:
    console.error('감정을 선택해주세요');
}

  },
    methods: {


        gotoMain(){
          this.$router.push('/home')
        },
        onFileChange(e) {
          var files = e.target.files || e.dataTransfer.files;
          if (!files.length)
            return;
          this.createImage(files[0]);
          this.haru_diary.image = e.target.files[0];

        },
        createImage(file) {
          var image = new Image();
          var reader = new FileReader();
          var vm = this;

          reader.onload = (e) => {
            vm.image = e.target.result;
          };
          reader.readAsDataURL(file);
        },
        removeImage: function (e) {

          this.image = !this.image
          this.modifier_img = !true;
        },
        postHaru(){

          var _this = this

          // var userData = new FormData(this.$refs.form);

          _this.haru_diary.status = Number(_this.haru_diary.status )



          const data = new FormData();
          data.append('author', this.$store.userID);
          data.append('title', _this.haru_diary.title);
          data.append('content', _this.haru_diary.content);
          data.append('status', _this.haru_diary.status);
          // data.append('image', new Blob([_this.haru_diary.image], { type: 'multipart/form-data' }));
          data.append('image', _this.haru_diary.image);


          axios.post('/post/', data , {
            headers: {
              'Authorization': 'Token ' + this.$store.token
            }
          })
          .then( function (response) {
                _this.$store.haruinfo.push(response.data);
                // console.log('__필요한 :', response.data.id)
                    _this.$store.PostId = response.data.id;
                _this.$router.push('/home');
          });

        },



      gohome() {
        this.$router.push({path: '/home'});
      },
      postdelete() {
        var _this = this;
        console.log('삭제: ' )
        axios.delete('/post/'+_this.$store.PostId+'/', {
          headers: {
            'Authorization': 'Token ' + _this.$store.token
            // 'Authorization': _this.token
          }
        })
        .then(function(response) {
          console.log('_this.$store.PostId :', _this.$store.PostId)
        _this.$router.push({path: '/home'})

      })
    },
    postmodifier () {
      console.log('수정하기')
      this.view = !true;
    },
    Totalmodifier() {
      
    }
    }
  }

</script>
<style lang="sass" scoped>
  @import "../../Sass_detail/main.sass"
  @import "../../Sass_detail/writePage.sass"
</style>
