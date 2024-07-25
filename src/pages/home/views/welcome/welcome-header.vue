<template>
    <div class="welcome-header">
        <div class="welcome-header-left">
            TO THE
            <span class="welcome-header-text">DIVERSE<br>LAVBORATORY</span>
        </div>
        <div class="welcome-header-right">
            <div class="block"></div>
            <span>2024.8Ver</span>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.welcome-header {
    width: calc(100% - 60px);
    color:white;
    font-size: 48px;
    font-weight: bold;
    margin-top: 80px;
    margin-left: 60px;
    display: flex;
    justify-content: space-between;
}
.welcome-header-left{
    display: flex;
}
.welcome-header-text{
    font-size: 24px;
    margin-left: 18px;
}
.welcome-header-right{
    font-size: 24px;
    color:black;
    display: flex;
    align-items: center;
    flex-direction: column;
}
.block{
    height: 24px;
    width: 80px;
    margin-left: auto;
    background-color: black;
}
</style>