<script setup lang="ts">

import ImgCarousel from '@/components/honor/img-carousel.vue'
import HonorHeader from '@/components/honor/honor-header.vue'
import LecLogo from '@/assets/images/lc-logo.png'
import ImgGroup from "./honor-imgs.ts";

</script>

<template>
	<div class="honor-page">
		<honor-header/>
		<div class="honor-content">
			<div class="gradient-layer"></div>
			<div class="year">2024</div>
			<div class="lec-info">
				<span class="lec-logo-container">
					<img :src="LecLogo" alt="lec logo"/>
				</span>

				<span class="lec-directions">
					<span class="lec-direction-item">前后端算法</span>
					<span class="lec-direction-item">机器学习</span>
				</span>
			</div>
			<div class="carousel-container">
				<div class="img-carousel-item" v-for="group in ImgGroup">
					<!--出于对性能的考虑, 倾斜效果没有使用carousel的rotate， 而是对container进行rotate-->
					<img-carousel
						:duration="group.duration"
						:rotate="0"
						:img-list="group.imgs"
						:repeat="2"
					/>
				</div>
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

.year {
	font-size: 200px;
	font-family: 'londrina-outline';
	position: absolute;
	color: white;
	font-weight: bold;
	right: 30px;
	top: 30px;
	z-index: 2;
}

.carousel-container {
	height: 100%;
	overflow: visible;
	transform: rotate(10deg);
	transform-origin: top right;
}

.img-carousel-item {
	height: 33%;
	/* filter: saturate(50%); */
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

.lec-info {
	position: absolute;
	bottom: 5vh;
	left: 4vw;
	display: flex;
	align-items: center;
	z-index: 2;
}

.lec-logo-container {
	width: 80px;
	height: 80px;
	background: linear-gradient(to right top, #5ef5c9 50%, #4fd6e5);
	border-radius: 15px;
	display: flex;
	justify-content: center;
	align-items: center;
	box-shadow: 0 0 10px -2px #fff, /* 外部发光 */
               0 0 20px -2px #fff; /* 更强的外部发光 */
}

.lec-directions {
	margin-left: 20px;
}

.lec-direction-item {
	font-size: 19px;
	line-height: 23px;
	padding: 0 5px;
	background-color: black;
	color: white;
	border-radius: 5px;
	font-weight: bold;

	&:not(:first-child) {
		margin-left: 10px;
	}
}
</style>