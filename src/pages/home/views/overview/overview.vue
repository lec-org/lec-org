<script setup lang="ts">
	import OverViewTitle from './overview-title.vue'
	import OverViewContent from './overview-content.vue'
</script>

<template>
	<div class="overview-page">
		<OverViewTitle />
		<OverViewContent />
	</div>
</template>

<style scoped>
	.overview-page {
		width: 100vw;
		height: 100vh;
		overflow: hidden;
		display: flex;
		flex-direction: row;
		background-image: linear-gradient(
				to right,
				rgba(137, 137, 137, 0.1) 1px,
				transparent 1px
			),
			linear-gradient(to bottom, rgba(137, 137, 137, 0.1) 1px, transparent 1px);
		background-size: 15px 15px;
	}
</style>
