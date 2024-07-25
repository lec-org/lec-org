<template>
    <div class="welcome-bottom">
        <div class="bottom-left"><img :src="LecLogoBlack" alt="" width="80px"></div>
        <div class="bottom-right">
            <div class="right-title">欢迎来到</div>
            <div>乐程软件工作室</div>
            <div>为您提供优秀细致的学习指导</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import LecLogoBlack from '@/assets/images/lec-logo-black.png'
</script>

<style scoped>
.welcome-bottom {
    position: absolute;
    width: 100vw;
    bottom: 40px;
    display: flex;
    justify-content: space-between;
}
.bottom-left{
    margin-left: 60px;
}
.bottom-right{
    margin-right: 60px;
    display: flex;
    flex-direction: column;
    font-size: 20px;
    font-weight: 600;
}
.right-title{
    font-size: 48px;
    font-weight: 700;
}
</style>