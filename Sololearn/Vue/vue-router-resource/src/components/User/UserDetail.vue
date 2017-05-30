<template>
  <div>
  <section class="card__info">
    <figure class="card__info--image">
      <img src="http://placehold.it/640x640" alt="컨텐츠 이미지" title="컨텐츠 이미지">
    </figure>
    <article class="card__info--contents">
      <h1 class="card__info--title" contenteditable="true">제목</h1>
      <ul class="card__info--emotions">
        <li title="기쁨"><img src="../../images/emotions/happy.svg" alt="기쁨" width="30" height="30"></li>
        <li title="슬픔"><img src="../../images/emotions/sad.svg" alt="슬픔" width="30" height="30"></li>
        <li title="보통"><img src="../../images/emotions/normal.svg" alt="보통" width="30" height="30"></li>
        <li title="짜증"><img src="../../images/emotions/irritation.svg" alt="짜증" width="30" height="30"></li>
        <li title="분노"><img src="../../images/emotions/angry.svg" alt="분노" width="30" height="30"></li>
      </ul>
      <p class="card__info--text" contenteditable="true">절대 포기하지 말라. 당신이 되고 싶은 무언가가 있다면, 그에 대해 자부심을 가져라. 당신 자신에게 기회를 주어라. 스스로가 형편없다고 생각하지 말라. 그래봐야 아무 것도 얻을 것이 없다. 목표를 높이 세워라.인생은 그렇게 살아야 한다.</p>
      <p class="card__info--date">
        <time>2017.04.01</time>
      </p>
      <div class="card__info--button-box">
        <button type="button" name="button" class="card__info--modify-button">수정</button>
        <button type="button" name="button" class="card__info--delete-button">삭제</button>
      </div>
    </article>
  </section>
  <div class="arrow__box">
    <button type="button" class="arrow__prev"><img src="../../images/prev_arrow.svg" alt="이전버튼" width="60" height="60"></button>
    <button type="button" class="arrow__next"><img src="../../images/next_arrow.svg" alt="다음버튼" width="60" height="60"></button>
  </div>
  </div>
</template>
<script>
export default {
  name: "",
  data: function data() {
    return {

    }
  }
}
</script>
<style lang="sass">
  @import "../../Sass_detail/page.sass"
</style>
