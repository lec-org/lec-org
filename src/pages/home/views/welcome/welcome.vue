<template>
    <div class="welcome">
        <welcomeHeader />
        <welcomeContent />
        <welcomeBottom />
    </div>
</template>

<script setup lang="ts">
    import welcomeHeader from './welcome-header.vue';
    import welcomeContent from './welcome-content.vue';
    import welcomeBottom from './welcome-bottom.vue';
</script>

<style scoped>
.welcome {
    width: 100vw;
	height: 100vh;
	overflow: hidden;
	display: flex;
	flex-direction: column;
    position: relative;
    background: linear-gradient(to right, #2E4374, #707579);
}
</style>