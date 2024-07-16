<script setup lang="ts">

import ImgCarousel from '@/components/honor/img-carousel.vue'
import HonorHeader from '@/components/honor/honor-header.vue'

const imgs = [
	`https://picsum.photos/200/300?a=1`,
	`https://picsum.photos/300/300?a=2`,
	`https://picsum.photos/200/300?a=3`,
	`https://picsum.photos/500/300?a=4`,
	`https://picsum.photos/200/500?a=5`,
	`https://picsum.photos/200/300?a=6`,
	`https://picsum.photos/400/300?a=7`,
	`https://picsum.photos/200/300?a=7`,
]

</script>

<template>
	<div class="honor-page">
		<honor-header/>
		<div class="honor-content">
			<div class="gradient-layer"></div>

			<div class="img-carousel-item">
				<img-carousel :duration="100000" :rotate="10" transform-origin="top right" :img-list="imgs"/>
			</div>
			<div class="img-carousel-item">
				<img-carousel :duration="50000" :rotate="10" transform-origin="top right" :img-list="imgs"/>
			</div>
			<div class="img-carousel-item">
				<img-carousel :duration="100000" :rotate="10" transform-origin="top right" :img-list="imgs"/>
			</div>
			<div class="img-carousel-item">
				<img-carousel :duration="50000" :rotate="10" transform-origin="top right" :img-list="imgs"/>
			</div>
			<div class="img-carousel-item">
				<img-carousel :duration="100000" :rotate="10" transform-origin="top right" :img-list="imgs"/>
			</div>
		</div>
	</div>
</template>

<style scoped>
.honor-page {
	width: 100vw;
	height: 100vh;
	overflow: hidden;
	display: flex;
	flex-direction: column;
}

.honor-content {
	flex: 1;
	z-index: 1;
	background-color: white;
	position: relative;
	display: flex;
	flex-direction: column;
	overflow: hidden;
}

.img-carousel-item {
	height: 33%;
}

.honor-content .gradient-layer {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: linear-gradient(to right, #4fd6e5, #5ef5c9);
	mix-blend-mode: multiply;
	z-index: 2;
}
</style>