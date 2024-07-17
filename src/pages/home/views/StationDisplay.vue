<template>
	<div class="home1">
    <div class="bg-filter">
      <div class="content-box">
        <div class="title">
          <div class="title-left">
            <div class="title-zh">
              <div class="title-zh-top">团队工位</div>
              <div class="title-zh-bottom">Team workstation</div>
            </div>
            <div class="title-en">
              <div class="title-en-top">
                <div>LEC-</div>
                <div class="en-top-font">LEAGUE</div>
              </div>
              <div class="title-en-bottom">LABORATORY</div>
            </div>
          </div>
          <div class="title-right">
            <div class="title-right-top">DAILY</div>
            <div class="title-right-bottom">AND STUDY</div>
          </div>
        </div>
        <div class="content">
          <div class="content-left"></div>
          <div class="content-right"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="stylus">
.home1
  margin 0
  padding 0
  overflow hidden
  height 100vh
  width 100vw
  position relative
  background linear-gradient(to right top, #b7ddff, #ffffff)
  .bg-filter
    position absolute
    top 0
    left 0
    height 100%
    width 100%
    background transparent
    background-size 0.6em 0.6em
    background-image radial-gradient(circle, #b7ddff 2px, #ffffff 2px, transparent)
    backdrop-filter saturate(50%) blur(0.25em)
    .content-box
      display flex
      flex-direction column
      justify-content space-around
      height 100%
      width 100%
      .title
        padding 0 5%
        width 100%
        height 16%
        display: flex
        flex-direction row
        justify-content space-between
        .title-left
          height 100%
          width 50%
          background-color #fff
          border 2px solid #000
          display flex
          flex-direction row
          justify-content space-around
          align-items flex-start
          .title-zh
            margin-top 0.1em
            .title-zh-top
              font-size 4.68em
              margin-left -0.5em
              color #1b1b1b
              font-weight bold
              font-family "Microsoft Ya Hei"
            .title-zh-bottom
              font-size 1.56em
              margin-left -1.1em
              margin-top -0.3em
              color #272727
              font-weight bold
              font-family "Microsoft Ya Hei"
          .title-en
            display flex
            flex-direction column
            justify-content flex-start
            align-items flex-end
            margin-top 2em
            margin-right -5em
            .title-en-top
              font-size 1.25em
              color #424242
              font-weight bold
              font-family "Microsoft Ya Hei"
              display flex
              flex-direction row
              .en-top-font
                color #355ceb
            .title-en-bottom
              font-size 1.31em
              color #424242
              font-weight bold
              font-family "Microsoft Ya Hei"
        .title-right
          height 100%
          width 23%
          display flex
          flex-direction column
          justify-content flex-start
          align-items flex-end
          .title-right-top
            margin-top 0
            font-size 9.37em
            line-height 0.7
            color #454545
            font-weight bold
            font-family "Microsoft Ya Hei"
          .title-right-bottom
            margin-top -13%
            font-size 3.43em
            line-height 3.3
            color #454545
            font-weight bold
            font-family "Microsoft Ya Hei"
      .content
        width 100%
        height 62%
        display: flex
        flex-direction row
        justify-content space-between
        .content-left
          height 100%
          width 37%
          background-image url("../../../assets/1.jpg")
          background-size cover
        .content-right
          height 100%
          width 58%
          background-image url("../../../assets/2.jpg")
          background-size cover

</style>
