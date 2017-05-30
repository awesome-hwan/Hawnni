<template>
  <div class="wrapper">
    <div class="signup__total-box">
      <section class="signup__container">
        <div class="signup__image">
          <div class="dynamic__image">
            <!-- <img src="#" alt="#"> -->
          </div>
        </div>
        <div class="signup__items-box">
          <div class="signup__box">
            <h1 class="signup__logo"> 하루한장</h1>
            <h2 class="signup__intro">오늘의 기록하고 싶은 순간을 하루한장으로 기록해보세요</h2>
            <form action="javascript:alert('회원님 반갑습니다');" class="signup__form" id="signup__form">
            <button class="signup__button-facebook" @click="fetchData">
              <span class="fb__icon"></span><span href="#" class="signup__facebook">Facebook으로 로그인</span>
            </button>
            <div class="line__or">
              <span class="signup__line"></span><p class="or">또는</p><span class="signup__line"></span>
            </div>
              <fieldset class="signup__filedset">
                <legend class="signup__legend">하루 한장 log in form </legend>
                <label class="signup__label-email" for="user-id">이메일</label>
                <input v-model="user_input.email" type="email" class="signup__input-email" id="user-id" placeholder="이메일" required>
                <label class="signup__label-name" for="name">성명</label>
                <input v-model="user_input.name" type="text" class="signup__input-name" id="name" placeholder="성명" required>
                <label class="signup__label-username" for="username">사용자이름</label>
                <input v-model="user_input.user_name" type="text" class="signup__input-username" id="username" placeholder="사용자이름" required>
                <label class="signup__label-password" for="user-pw">비밀번호</label>
                <input v-model="user_input.password" type="password" class="signup__input-password" id="user-pw" placeholder="비밀번호" minlength="8" required>
                <button class="signup__button" type="submit" @click="submitData">가입</button>
              </fieldset>
              <p class="signup__article">가입하면 하루한장의 약관 및 개인정보처리방침에 동의하게 됩니다.</p>
            </form>
        </div>
            <div class="user__box">
              <p class="user__text">계정이 있으신가요?</p>
              <a href="#" class="user_login"><router-link to="/login">로그인</router-link></a>
            </div>
          <div class="download__app">
            <p class="downlaod__text">앱을 다운로드 하세요</p>
            <div class="downlaod__buttons">
              <button type="button" name="button" class="download__ios"></button>
              <button type="button" name="button" class="download__android"></button>
            </div>
          </div>
      </div>
      </section>
    </div>
      <footer class="signup__footer">
        <div class="signup__fotter-items">
        <ul class="haru__link-list">
          <li><a href="#" class="haru__info">하루한장 정보</a></li>
          <li><a href="#" class="haru__support">지원</a></li>
          <li><a href="#" class="haru__blog">블로그</a></li>
          <li><a href="#" class="haru__news">관련기사</a></li>
          <li><a href="#" class="haru__api">API</a></li>
          <li><a href="#" class="haru__recruit">채용정보</a></li>
          <li><a href="#" class="haru__privacy-info">개인정보처리방침</a></li>
          <li><a href="#" class="haru__provision">약관</a></li>
          <li><a href="#" class="haru__dir">디렉토리</a></li>
          <li><a href="#" class="haru__lang">언어</a></li>
          <li v-for="data in datalist">{{ data.email }}</li>
        </ul>
        <span class="haru__copyright"> &copy; 2017 하루한장</span>
        </div>
      </footer>
  </div>
</template>
<script>
export default {

  data() {
    return {
      user_input: {
        email: '',
        password: '',
        name: '',
        user_name: ''
      },
      datalist: []
    }
  },
   methods: {
     submitData() {
       this.$http.post('', this.user_input)
                 .then(function(response) {
                   console.log(response);
                 })
                 .catch(function(error) {
                   console.log(error.message);
                 })
     },
    fetchData() {
      this.$http.get('')
                .then( response => {return response.json()} )
                .then( data => {this.datalist = Object.values(data)} )
                .catch( error => console.log(error.message) )
    }
   }
}
</script>
<style lang="sass">
  @import "../Sass_login_signup/haru.signup.2.sass"
</style>
