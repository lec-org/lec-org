<script setup lang="ts">
import swipePage from "@/assets/images/撕纸.webp"
</script>

<template>
  <header class="honor-header">
    <div
      class="header-info"
    >
      <p class="h1-text">FOR THE BETTER LIFE</p>
      <p class="h1-text">LEC-LABORATORY <span class="divider-suffix"></span></p>
      <div class="join-us">
        <span class="desc">乐程招新啦!</span>
        <span class="join-now">立刻报名 | 加入团队</span>
      </div>
    </div>
    <div class="gradient">
      <img :src="swipePage" class="swipe" />
    </div>
    <img class="flower" src="https://trudbot-md-img.oss-cn-shanghai.aliyuncs.com/202407181137654.png"/>
  </header>
</template>

<style scoped>
header {
  margin: 0;
  padding: 0;
}

.honor-header {
  height: calc((280 / 1080) * 100vh);
  background-color: #fff;
  position: relative;
  display: flex;
}

.flower {
  position: absolute;
  width: 90%;
  right: 10%;
  z-index: 0;
  top: 0;
}

.header-info {
  flex: 1;
  padding-left: calc((50 / 1920) * 100vw);
  display: flex;
  justify-content: center;
  flex-direction: column;
  z-index: 1;
  font-family: "Microsoft Ya Hei";
}

.gradient {
  height: 100%;
  width: calc((654 / 1920) * 100%);
  z-index: 100;
  position: relative;
}

.swipe {
  position: absolute;
  height: calc((345 / 280) * 100%);
  right: 0;
}

.h1-text {
  font-size: calc((75 / 1080) * 100vh);
  letter-spacing: -4px;
  color: #30e6af;
  font-weight: bolder;
  font-family: "Microsoft Ya Hei";
  line-height: 1;
  overflow: hidden;
  white-space: nowrap;
}

.divider-suffix {
  background-color: black;
  display: inline-block;
  width: 15px;
  height: 5vh;
  transform: skewX(-25deg);
}

.join-us {
  height: 20px;
  width: 100%;
}

.desc {
  font-size: 16px;
  color: white;
  background-color: #000;
  line-height: 20px;
  border-radius: 5px;
  padding: 0 3px;
}

.join-now {
  font-weight: 500;
  margin-left: 10px;
}
</style>