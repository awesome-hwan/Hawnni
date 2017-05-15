<template>
  <div class="wrapper">
  <div class="modal__box">
    <section class="loginSignup__container">
      <div class="loginSignupBox">
        <div class="loginSignupBox__heading">
          <!-- <img src="../../images/harulogo.svg" alt="" class="login__logo"> -->
          <h1 class="loginSignup__heading">하루한장</h1>
        </div>

      <form class="signup__form" id="signup__form" ref="form" method="POST" @submit.prevent="submitData" enctype="multipart/form-data">
        <fieldset class="signup__filedset">
          <legend class="signup__legend">하루 한장 Signup form </legend>
          <label class="signup__label-email" for="user-id">이메일</label>
          <input v-model="user_input.email" name="email" type="email" class="signup__input-email" id="user-id" placeholder="이메일" required>
          <label class="signup__label-password" for="user-pw">비밀번호</label>
          <input v-model="user_input.password" name="password" type="password" class="signup__input-password" id="user-pw" placeholder="비밀번호" minlength="8" required >
          <label class="signup__label-passwordConfirm" for="confirm-userPw">비밀번호</label>
          <input @keyup="validatePassword" type="password" class="signup__input-passwordConfirm" id="confirm-userPw"  placeholder="비밀번호확인" minlength="8" >
          <!-- <input  type="password" class="signup__input-passwordConfirm" id="confirm-userPw"  placeholder="비밀번호확인" minlength="8" > -->
          <button class="signup__button" type="submit">가입</button>
          <button class="signup__button-facebook">
            <span class="fb__icon"></span>
            <span href="#" class="signup__facebook">Facebook으로 로그인</span>

          </button>
        </fieldset>
      </form>

        <div class="user__box">
          <p class="user__text">계정이 있으신가요?</p>
          <!-- <a href="#" class="newuser_signup">로그인 하러 가기</a> -->
          <router-link tag="a" to = "/login" active-class="current-page" class="newuser_signup">로그인 하러 가기</router-link>
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
        password: '',
        passwordConfirm: '',
        validation: false
      },
      datalist: [],
      resource: {},
      form: ''
    }
  },
   methods: {
    //  비밀번호 재확인 함수
     validatePassword(){
       var password = document.getElementById("user-pw")
       var confirm_password = document.getElementById("confirm-userPw");
       if(password.value !== confirm_password.value) {
        confirm_password.setCustomValidity("비밀번호가 맞지 않습니다.")
        this.user_input.validation = false;
       } else {
         confirm_password.setCustomValidity('');
         this.user_input.validation = true;
       }
     },
  
         submitData() {
           var _this  = this
            // console.log(_this);
           var userData = new FormData(this.$refs.form);

           axios.post('/signup/', userData)
           .then(function (response) {
            //  console.log('응답:',response.status)
             if ( response.status === 201 ) {
                alert(_this.user_input.email + '님 회원가입을 축하드립니다.');

                _this.$router.push({path: '/login'});

             } else {

                alert(_this.user_input.email + '은 이미 존재합니다.');

             }

           })
           .catch(function (error) {

             alert(_this.user_input.email + '은 이미 존재합니다.');
             var email = document.querySelector('#user-id')

             email.value = '';


             console.log('에러:',error);
           });



     }

   }
}
</script>
<style lang="sass" scoped>
  @import "../Sass_login_signup/signup.sass"
</style>
