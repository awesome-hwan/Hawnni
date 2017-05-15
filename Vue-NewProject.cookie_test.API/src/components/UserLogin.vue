<template>

  <div class="wrapper">
    <div class="modal__box">
      <section class="loginSignup__container">
        <div class="loginSignupBox">
          <div class="loginSignupBox__heading">
            <!-- <img src="../../images/harulogo.svg" alt="" class="login__logo"> -->
            <h1 class="loginSignup__heading">하루한장</h1>
          </div>

        <form class="login__form" id="login__form"
              ref="form" method="POST" @submit.prevent="login" enctype="multipart/form-data">
          <fieldset class="login__filedset">
            <legend class="login__legend">하루 한장 log in form </legend>
            <label class="login__label-email" for="user-id">이메일</label>
            <input v-model="user_input.email" name="email" type="email" class="login__input-email" id="user-id" placeholder="이메일" required>
            <label class="login__label-password" for="user-pw">비밀번호</label>
            <input v-model="user_input.password" name="password" type="password" class="login__input-password" id="user-pw" placeholder="비밀번호" minlength="8" required>
            <button class="login__button" type="submit">로그인</button>
            <button class="login__button-facebook">
              <span class="fb__icon"></span>
              <span href="#" class="login__facebook">Facebook으로 로그인</span>

            </button>
            <a href="#" class="login__password-find">비밀번호를 잊으셨나요?</a>
          </fieldset>
        </form>

          <div class="newuser__box">
            <p class="newuser__text">계정이 없으신가요?</p>
            <!-- <a href="#" class="newuser_signup" @click="gotoSignup">가입하기</a> -->
              <router-link to = "/signup" active-class="current-page" class="newuser_signup">가입하기</router-link>
          </div>
      </div>
      </section>
    </div>
  </div>

</template>

<script>

export default {
  data() {
    return {

      user_input: {
        email: '',
        password: ''

      },
      datalist: [],
      resource: {},
      form: ''

    }
  },
   methods: {
        login() {
          var _this = this

          var userData = new FormData(this.$refs.form);

          axios.post('/login/', userData)
          .then(function (response) {

            if ( response.status === 200 ) {
               alert(_this.user_input.email + '님 반갑습니다 ^^');

                _this.$store.token = response.data.key

                  console.log('_this.$store.token :', _this.$store.token)

                localStorage.setItem('token', _this.$store.token)

                // setCookie('Harutoken', _this.$store.token, 90);


              axios.defaults.headers.common['Authorization'] =  'Token ' + _this.$store.token;

               _this.$router.push({path: '/home'});

            } else {

               alert('이메일 또는 비밀번호를 다시 확인해주세요');

            }
          })
          .catch(function (error) {
            console.log('에러:',error);

            alert('이메일 또는 비밀번호를 다시 확인해주세요');

          });
    }
 }
}

</script>
<style lang="sass" scoped>
@import "../Sass_login_signup/login.sass"
</style>
