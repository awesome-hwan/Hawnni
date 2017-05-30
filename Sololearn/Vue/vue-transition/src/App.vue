<template>
  <div id="app" class="container">
    <div class="columns is-gapless">
        <div class="columns is-8 is-offset-2">
          <h1 class="title is-2">Vue Js Transition</h1>
          <button type="button" class="button is-primary" @click="show_noti = !show_noti">{{show_noti ? 'Hide' : 'Show'}} Alert</button>

            <!-- <transition name="slide">
              <div class="notification is-success" v-if="show_noti">
                <button class="delete" aria-label="delete notification" @click="show_noti = false"></button>
                Success lorem ipsum dolor sit amet, consectetur
                adipiscing elit lorem ipsum dolor sit amet,
                consectetur adipiscing elit
                </div>
            </transition> -->
                <transition name="bounce" appear>
                  <div class="notification is-danger" v-if="show_noti">
                    <button class="delete" aria-label="delete notification" @click="show_noti = false"></button>
                    danger lorem ipsum dolor sit amet, consectetur
                    adipiscing elit lorem ipsum dolor sit amet,
                    consectetur adipiscing elit
                    </div>

            </transition>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
        show_noti: true
    }
  }
}
</script>

<style lang="sass">
#app
  padding-top: 40px
.notification
  margin-top: 20px

.fade-enter, .fade-leave-to
  opacity: 0
.fade-enter-active, .fade-leave-active
  transition: opacity 1s ease

.slide-enter
  opacity: 0
.slide-enter-active
  animation: slide-in 1s ease forwards
  transition: opacity 1s
// .slide-enter-to
// .slide-leave
.slide-leave-active
  animation: slide-out 1s ease forwards
  transition: opacity 1s
  // opacity: 0
.slide-leave-to
  opacity: 0


.notification.is-danger
  transform-origin: top right
.bounce-enter
  opacity: 0
.bounce-enter-active
  animation: bounce-in .45s ease forwards
  transition: opacity .45s ease
// .bounce-enter-to
// .bounce-leave
.bounce-leave-active
  animation: bounce-out .45s ease forwards
  transition: opacity .45s ease
.bounce-leave-to
  opacity: 0

@keyframes bounce-in
  0%
    transform: scale(0)
  50%
    transform: scale(1.2)
  100%
    transform: scale(1)

@keyframes bounce-out
  0%
    transform: scale(1)
  50%
    transform: scale(1.2)
  100%
    transform: scale(0)


@keyframes slide-in
  from
    transform: translateY(20px)
  to
    transform: translateY(0px)
@keyframes slide-out
  from
    transform: translateY(0px)
  to
    transform: translateY(20px)

@keyframes bounce-in
  0%
    transform: scale(0)
  50%
    transform: scale(1.5)
  100%
    transform: scale(1)

@keyframes bounce-out
  0%
    transform: scale(1)
  50%
    transform: scale(1.5)
  100%
    transform: scale(0)

</style>
