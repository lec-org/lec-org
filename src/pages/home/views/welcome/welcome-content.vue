<template>
    <div class="welcome-content">
        <div class="league">
            LEC-LEAGUE
        </div>
        <div class="chinese-league">
            乐程-联盟
        </div>
        <p class="belief">
            <span>M<span style="color:#91ddff">A</span>KE</span>
            <span>LEC-LEA<span style="color:#91ddff">GU</span>E</span>
            <span>GREATE</span>
            <span>AGAI<span style="color:#91ddff">N</span>!!!</span>
        </p>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.welcome-content{
    width: calc(100% - 60px);
    height:360px;
    margin-left: 60px;
    margin-top: 100px;
    position: relative;
}
.league{
    font-size: 220px;
    color:transparent;
    -webkit-text-stroke-width: 4px; /* 描边宽度 */
    -webkit-text-stroke-color: black; /* 描边颜色 */
}
.chinese-league{
    position: absolute;
    font-size: 160px;
    font-weight: 700;
    color:#000;
    top:120px;
    left:600px;
}
.belief {
    position: absolute;
    font-size: 80px;
    color: #fff;
    display: flex;
    flex-direction: column;
    top: 20px;
    left: 770px;
    line-height: 80px; /* 设置与字体大小相同的行高 */
    font-weight: 600;
}

.belief span {
    line-height: inherit; /* 使每个span的行高与父元素一致 */
}
</style>