<template>

<div class="wrap">
  <h1>정신없는 당신 잠시 쉬어가세요</h1>

  <div class="flip-card">
      <figure class="flip-card__front">ToDay-ToDo</figure>
      <figure class="flip-card__back">

          <div class="app">
              <div class="input_group">
                  <label for="Day_Memo">Day_Memo</label>
                  <input id="Day_Memo" type="text" placeholder="remember today..">
                  <button class="Day_Memo_button" type="button">add</button>
                  <button class="close_button" type="button">X</button>
              </div>

              <ul class="Day_list">
                  <li>오늘 하루는...</li>
              </ul>

          </div>
      </figure>
  </div>
</div>

</template>

<script>
export default {

}
</script>

<style lang="sass" scoped>
  *
    margin: 0
    padding: 0
    box-sizing: border-box

  body
    height: 100vh
    @extend %flex-center
    overflow-y: hidden
  h1
    position: absolute
    top: 30px
  %size
    flex: 0 0 240px
    width: 300px
    height: 300px

  %flex-center
    display: flex
    justify-content: center
    align-items: center

  .flip-card
    @extend %size
    @extend %flex-center
    position: relative
    transform-style: preserve-3d
    transform: perspective(450px) rotateY(0deg)
    transform-origin: center
    transition: all 1s
    padding: 50px 20px

  .flip-card__front
    @extend %size
    @extend %flex-center
    background: rgba(183, 217, 218, 0.5)
    color: white
    transform: rotateY(0)
    backface-visibility: hidden
    cursor: pointer
    transition: all 0.7s
    &:hover
      transform: translateX(60%)

  .flip-card__back
    transform: rotateY(180deg) translateX(50%)
    backface-visibility: hidden

  .app
    position: relative
    width: 800px
    height: 100vh
    @extend %flex-center
    justify-content: space-around
    margin: 0 auto
    border: 1px solid rgba(114, 117, 170, 0.3)

  .input_group

    height: 100vh
    display: flex
    flex-direction: column
    justify-content: center
    margin-left: 50px
    align-items: stretch
    // margin-bottom: 60px
  label

    font-size: 3rem
    font-weight: bold

  #Day_Memo
    width: 25rem
    height: 1.5rem
    border: 0
    border-bottom: 3px solid black
    margin-top: 50px

  %button-attr
    background: white
    color:black
    border: 1px solid black
    cursor: pointer

  .Day_Memo_button
    margin-top: 30px
    @extend %button-attr

  .close_button
    @extend %button-attr
    position: absolute
    top: 20px
    right: 20px
    padding: 20px

  .Day_list
    position: absolute
    top: 70%
    & li
      list-style: none

    & li::before
      content: '- '

</style>
