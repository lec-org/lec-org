<template>
	<div class="home-container" ref="home">
		<welcome />
		<overview />
		<honor />
	</div>
</template>

<script setup lang="ts">
	import Honor from './views/honor/honor.vue'
	import welcome from './views/welcome/welcome.vue'
import overview from './views/overview/overview.vue'
	import { nextTick, onMounted,ref } from 'vue';

	const home = ref()
	let i = 0
	const scrollHeights = [0, 0, 0]; 

	onMounted(() => {
		nextTick(() => {
			
			const container = home.value;
			if (container) {
				const children = container.children;
				for (let index = 0; index < children.length; index++) {
					scrollHeights[index] = (children[index] as HTMLElement).offsetHeight;
				}
			}

			setInterval(() => {
				console.log('1')
				i++
				if (i > 3) i = 0
				const scrollPosition = scrollHeights.slice(0, i).reduce((sum, height) => sum + height, 0);
				home.value!.scrollTo({
					top: scrollPosition,
					behavior: 'smooth'
				})
			}, 5000) 
		});
	})
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
