<template>
  <section>

  <div class="modules">

    <div class="module__colwarpper">
      <!-- 박스모양 잡는 modulse -->
      <div class="module long">
        <!-- 글 배치시키는 modules__contents -->
        <div class="module__contents"><p>A</p></div>
      </div>
      <div class="module none">
        <div class="module__contents"><p>B</p></div>
      </div>
    </div>


    <div class="module__colwarpper">
      <div class="module twitter">
        <div class="module__contents">
          <p>C</p>
        </div>
      </div>
      <div class="module none">
        <div class="module__contents">
          <p>D</p>
        </div>
      </div>
      <div class="module">
        <div class="module__contents">
          <p>E</p>
        </div>
      </div>
      <div class="module twitter">
        <div class="module__contents">
          <p>F</p>
        </div>
      </div>
      <div class="module">
        <div class="module__contents">
          <p>G</p>
        </div>
      </div>
      <div class="module">
        <div class="module__contents">
          <p>H</p>
        </div>
      </div>
    </div>

    <div class="module__colwarpper">
      <div class="module">
        <div class="module__contents">
          <p>I</p>
        </div>
      </div>
      <div class="module long">
        <div class="module__contents">
          <p>J</p>
        </div>
      </div>
    </div>

  </div>

  </section>
</template>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
  font-family: 'Lato', sans-serif;
  font-size: 15px;
  line-height: 1;
}

.module {
  background-color: #adb9ac;
}

.twitter {
  background-color: #20ebeb;
}

.none {
  background-color: #d51ddf;
}

.long {
  background-color: #664fd6;
}

.module {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 100%;
}

.module.long {
  padding-bottom: 200%;
}

.module__colwarpper:nth-child(2) .module {
  width: 50%;
  height: 0;
  padding-bottom: 50%;
}

.modules {
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: flex-start;
  width: 90%;
  margin: 0 auto;
}

.module__contents {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
}

@media screen and (max-width: 700px) {
  .modules {
    width: 100%;
  }
  .module {
    width: 100%;
    padding-bottom: 50%;
  }
  .module.long {
    width: 100%;
    padding-bottom: 50%;
  }
}

.module__colwarpper {
  width: 25%;
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-start;
  align-items: flex-start;
}

@media screen and (max-width: 700px) {
  .module__colwarpper {
    width: 100%;
  }
  .module__colwarpper:nth-child(1) {
    order: 3;
  }
  .module__colwarpper:nth-child(2) {
    order: 2;
  }
  .module__colwarpper:nth-child(3) {
    order: 1;
  }
}

.module__colwarpper:nth-child(2) {
  width: 50%;
  flex-direction: row;
}

@media screen and (max-width: 700px) {
  .none, .twitter {
    display: none;
  }
  .module__colwarpper:nth-child(2) .module:nth-child(5) {
    order: 2;
  }
  .module__colwarpper:nth-child(2) .module:nth-child(6) {
    order: 1;
  }
  .module__colwarpper:nth-child(2) {
    width: 100%;
  }
  .module__colwarpper:nth-child(2) .module {
    width: 100%;
  }
}
</style>
