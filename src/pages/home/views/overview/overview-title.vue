<script setup lang="ts"></script>

<template>
	<div class="overview-title">
		<span class="overview"> <i>概</i> <i>述</i> </span>
		<span class="decoration">
			<span class="bar"></span>
			MAKE LEC GREAT AGAIN!!!
		</span>
	</div>
</template>

<style scoped>
	.overview-title {
		z-index: -1;
		width: 20%;
		height: 100vh;
		position: relative;
		.overview {
			display: flex;
			height: 100%;
			font-size: 52vh;
			font-weight: 900;
			line-height: 52vh;
			position: relative;
			color: #b6b6b6;
			align-items: flex-start;
			:nth-child(1) {
				position: absolute;
				left: -13vh;
				top: -3vh;
			}
			:nth-child(2) {
				position: absolute;
				left: -13vh;
				bottom: 0;
			}
		}
		.decoration {
			height: 22px;
			white-space: nowrap;
			.bar {
				display: inline-block;
				height: 19px;
				width: 170px;
				background-color: #355ceb;
				margin-right: 20px;
			}
			display: inline-block;
			position: absolute;
			top: 25vh;
			left: 10vh;
			font-weight: 900;
			font-size: 22px;
			color: #535353;
			transform: rotate(90deg);
			transform-origin: top left;
		}
	}
</style>
