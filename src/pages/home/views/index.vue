<template>
	<div class="home1">
    <div class="bg-filter"></div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="stylus">
.home1
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
    background-size 10px 10px
    background-image radial-gradient(circle, #b7ddff 2px, #ffffff 2px, transparent)
    backdrop-filter saturate(50%) blur(4px)
</style>
