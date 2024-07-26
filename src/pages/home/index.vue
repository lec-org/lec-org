<template>
	<div class="home-container">
		<welcome/>
		<honor/>
	</div>
</template>

<script setup lang="ts">
	import Honor from './views/honor/honor.vue'
	import welcome from './views/welcome/welcome.vue';
</script>

<style scoped>
/* 隐藏滚动条 */
.home-container {
	height: 100vh;
	overflow: scroll;
  -ms-overflow-style: none; /* 适用于Internet Explorer 和 Edge */
  scrollbar-width: none; /* 适用于Firefox */

	scroll-snap-type: y mandatory;
}

.home-container > * {
	scroll-snap-align: start;
	scroll-snap-stop: always;
}

.home-container::-webkit-scrollbar {
  display: none; /* 适用于Chrome, Safari 和 Opera */
}
</style>
