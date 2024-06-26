<template>
	<div class="main">
		<div class="H1 title">LEC Org App</div>
		<div class="welcome">Welcome to LEC Org Website</div>
	</div>
</template>

<script setup></script>

<style lang="stylus" scoped>
	.main
		width 100%
		height 100%
		display flex
		justify-content center
		flex-direction column
		background var(--lec-quaternary)
		.title
			height 40px
			width  100%
			color var(--lec-primary)
			background transparent
			backdrop-filter blur(50px)
			border-bottom: 2px solid rgba(255, 255, 255, 0.2);
			text-align center
		.welcome
			flex 1
			display flex
			justify-content center
			align-items center
			font-size 2.5rem
			color var(--lec-secondary)
</style>
