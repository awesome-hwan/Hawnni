<template>
  <div class="container">
    <!-- ######################### header area ######################### -->
    <header class="header">
      <h1 class="header__logo"><img src="../images/HaruLogoWithName_Black.svg" alt="하루한장 메인로고">하루한장 메인로고</h1>
      <a href="#" class="header__logout"><router-link to="/login">Log out</router-link></a>
    </header>

    <!-- ######################### main area ######################### -->
    <main class="main">
    <!-- ######################### intitle area ######################### -->
      <div class="main__years">
        <h1 class="main__years-heading">Years</h1>
        <a class="main__years-list" href="#">2017</a>
        <a class="main__years-list" href="#">2016</a>
        <a class="main__years-list" href="#">2015</a>
      </div>
  <!-- ######################### emotion ######################### -->
      <div class="main__emotions">

        <h1 class="main__emotions-heading">감정 감정</h1>

        <a class="main__emotions-happy"  href="#"> 기쁨</a>

        <a class="main__emotions-sad" href="#"> 슬픔</a>

        <a class="main__emotions-anger" href="#"> 버럭</a>

        <a class="main__emotions-fear" href="#"> 그럭저럭</a>

        <a class="main__emotions-disgust" href="#"> 짜증</a>

      </div>
      <!-- ######################### emotion ######################### -->
        <!-- ######################### main__contents area ######################### -->
        <!-- 클래스네임 main__contents-list 로 번경 -->
      <div class="main__contents">

        <a href="#" class="main__page-card">
          <div class="main__page-card__header">
            <img src="../images/trees-190865_1920.jpg" alt="고대의 유물이다." class="main__page-card__header-img">
          </div>
          <!-- ################################ 카드 중단  ############################################# -->
          <div class="main__page-card__body">
            <div class="main__page-card__body-profile">
              <img src="../images/tianjin-2185510_1920.jpg" alt="" class="main__page-card__body-profile-img">
            </div>
            <h2 class="main__page-card__body-title">제목가마나가다제목가마나가다제목가마나가다</h2>
            <p class="main__page-card__body-text">부제목부제목부제목부제목부제목부제목부제목부제목부제목부제목부제목부제목부제목부제목부제목</p>
            <div class="main__page-card__body-date"></div>
          </div>
        </a>

        <a href="#" class="main__page-card">
          <div class="main__page-card__header">
            <img src="../images/amsterdam-164818_1920.jpg" alt="고대의 유물이다." class="main__page-card__header-img">
          </div>
          <!-- ################################ 카드 중단  ############################################# -->
          <div class="main__page-card__body">
            <div class="main__page-card__body-profile">
              <img src="../images/tianjin-2185510_1920.jpg" alt="" class="main__page-card__body-profile-img">
            </div>
            <h2 class="main__page-card__body-title">제목</h2>
            <p class="main__page-card__body-text">부제목</p>
            <div class="main__page-card__body-date"></div>
          </div>
        </a>

        <a href="#" class="main__page-card">
          <div class="main__page-card__header">
            <img src="../images/back-light-350586_1920.jpg" alt="고대의 유물이다." class="main__page-card__header-img">
          </div>
          <!-- ################################ 카드 중단  ############################################# -->
          <div class="main__page-card__body">
            <div class="main__page-card__body-profile">
              <img src="../images/tianjin-2185510_1920.jpg" alt="" class="main__page-card__body-profile-img">
            </div>
            <h2 class="main__page-card__body-title">제목</h2>
            <p class="main__page-card__body-text">부제목</p>
            <div class="main__page-card__body-date"></div>
          </div>
        </a>

        <a href="#" class="main__page-card">
          <div class="main__page-card__header">
            <img src="../images/bordeaux-869032_1920.jpg" alt="고대의 유물이다." class="main__page-card__header-img">
          </div>
          <!-- ################################ 카드 중단  ############################################# -->
          <div class="main__page-card__body">
            <div class="main__page-card__body-profile">
              <img src="../images/tianjin-2185510_1920.jpg" alt="" class="main__page-card__body-profile-img">
            </div>
            <h2 class="main__page-card__body-title">제목</h2>
            <p class="main__page-card__body-text">부제목</p>
            <div class="main__page-card__body-date"></div>
          </div>
        </a>

        <a href="#" class="main__page-card">
          <div class="main__page-card__header">
            <img src="../images/bridge-19513_1920.jpg" alt="고대의 유물이다." class="main__page-card__header-img">
          </div>
          <!-- ################################ 카드 중단  ############################################# -->
          <div class="main__page-card__body">
            <div class="main__page-card__body-profile">
              <img src="../images/tianjin-2185510_1920.jpg" alt="" class="main__page-card__body-profile-img">
            </div>
            <h2 class="main__page-card__body-title">제목</h2>
            <p class="main__page-card__body-text">부제목</p>
            <div class="main__page-card__body-date"></div>
          </div>
        </a>

        <a href="#" class="main__page-card">
          <div class="main__page-card__header">
            <img src="../images/forest-2165911_1920.jpg" alt="고대의 유물이다." class="main__page-card__header-img">
          </div>
          <!-- ################################ 카드 중단  ############################################# -->
          <div class="main__page-card__body">
            <div class="main__page-card__body-profile">
              <img src="../images/tianjin-2185510_1920.jpg" alt="" class="main__page-card__body-profile-img">
            </div>
            <h2 class="main__page-card__body-title">제목</h2>
            <p class="main__page-card__body-text">부제목</p>
            <div class="main__page-card__body-date"></div>
          </div>
        </a>

        <a href="#" class="main__page-card">
          <div class="main__page-card__header">
            <img src="../images/hdr-186926_1920.jpg" alt="고대의 유물이다." class="main__page-card__header-img">
          </div>
          <!-- ################################ 카드 중단  ############################################# -->
          <div class="main__page-card__body">
            <div class="main__page-card__body-profile">
              <img src="../images/tianjin-2185510_1920.jpg" alt="" class="main__page-card__body-profile-img">
            </div>
            <h2 class="main__page-card__body-title">제목</h2>
            <p class="main__page-card__body-text">부제목</p>
            <div class="main__page-card__body-date"></div>
          </div>
        </a>

        <a href="#" class="main__page-card">
          <div class="main__page-card__header">
            <img src="../images/mushrooms-116973_1920.jpg" alt="고대의 유물이다." class="main__page-card__header-img">
          </div>
          <!-- ################################ 카드 중단  ############################################# -->
          <div class="main__page-card__body">
            <div class="main__page-card__body-profile">
              <img src="../images/tianjin-2185510_1920.jpg" alt="" class="main__page-card__body-profile-img">
            </div>
            <h2 class="main__page-card__body-title">제목</h2>
            <p class="main__page-card__body-text">부제목</p>
            <div class="main__page-card__body-date"></div>
          </div>
        </a>

        <a href="#" class="main__page-card">
          <div class="main__page-card__header">
            <img src="../images/tianjin-2185510_1920.jpg" alt="고대의 유물이다." class="main__page-card__header-img">
          </div>
          <!-- ################################ 카드 중단  ############################################# -->
          <div class="main__page-card__body">
            <div class="main__page-card__body-profile">
              <img src="../images/tianjin-2185510_1920.jpg" alt="" class="main__page-card__body-profile-img">
            </div>
            <h2 class="main__page-card__body-title">제목</h2>
            <p class="main__page-card__body-text">부제목</p>
            <div class="main__page-card__body-date"></div>
          </div>
        </a>

      </div>
      <div class="main__button-position">
        <button class="main__button-lodamore">더보기 &#xE001;</button>
      </div>
      <button class="main__button-textadd"
              ><router-link to="/detail">글쓰기 &#xE001;</router-link></button>
    </main>
    <!-- ######################### footer area ######################### -->
    <footer class="footer">
      <nav class="footer__nav">
        <ul class="footer__nav-haru">
          <a href="#" class="footer__nav-haru-info">하루한장 정보</a>
          <a href="#" class="footer__nav-haru-support">지원</a>
          <a href="#" class="footer__nav-haru-blog">블로그</a>
          <a href="#" class="footer__nav-haru-news">관련기사</a>
          <a href="#" class="footer__nav-haru-api">API</a>
          <a href="#" class="footer__nav-haru-recruit">채용 정보</a>
          <a href="#" class="footer__nav-haru-privacy-info">개인정보처리방침</a>
          <a href="#" class="footer__nav-haru-provision">약관</a>
          <a href="#" class="footer__nav-haru-dir">디렉터리</a>
          <a href="#" class="footer__nav-haru-lang">언어</a>
        </ul>
      </nav>
      <span class="footer__haru-copyright">&copy; 2017 하루한장</span>
    </footer>

  </div>

</template>
<script>
export default {

data() {
    return {

    }
  }
}
</script>
<style lang="sass">
  @import "../Sass_main/main__page-style.sass"
</style>
