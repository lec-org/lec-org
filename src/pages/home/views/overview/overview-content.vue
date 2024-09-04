<script setup lang="ts">
	import LecLogoColorful from '../../../../assets/images/lec-logo-colorful.png'
</script>

<template>
	<div class="overview-content">
		<div class="header">
			<span style="color: #424242">
				LEC-<span style="color: #355ceb">LEAGUE</span> <br />
				LABORATORY
			</span>
		</div>
		<div class="mid">
			<span class="mid-about angle-box">ABOUT</span>
			<span class="mid-title"
				><span style="color: #355ceb">乐程</span> 的<br />
				<span style="font-size: 80px">制度和成果</span></span
			>
		</div>
		<div class="content">
			<div class="content-title">
				<div>关于我们</div>
				<div>ABOUT US</div>
			</div>
			<span class="content-content">
				<p>
					乐程软件工作室成立于
					2010年6月,是一个从事软件、网站、多媒体作品开发的学生科研团队。
				</p>
				<p>
					团队目前有成员30余人，采取每周28小时考勤制度，定期开展例会和学习交流促进团队发展，形成良好学风。同时也积极组织参与各级别比赛，团队项目多次成功获学院立项，更获省、国赛奖项十余项。
				</p>
				<p>
					部分团队成员就职于阿里、小米、美团、腾讯等<i class="attention-color"
						>一流企业</i
					>。部分保研电子科大、川大等<i class="attention-color">知名大学</i
					>。我们将本着“学以致用，服务学校，走向社会”的宗旨，用优秀的软件和细致的服务为我们的数字化生活提供便利。
				</p>
			</span>
		</div>
		<div class="footer">
			<img :src="LecLogoColorful" alt="" width="80px" />
		</div>
	</div>
</template>

<style scoped>
	.overview-content {
		width: 80%;
		height: 100vh;
		flex-direction: column;
		display: flex;
		align-items: center;
		.header {
			font-size: 40px;
			font-weight: 900;
			direction: rtl;
			width: 100%;
			height: 140px;
			align-items: center;
			padding-right: 30px;
			display: flex;
		}
		.mid {
			position: relative;
			height: 220px;
			width: 1050px;
			margin-right: 150px;
			margin-bottom: 50px;
			/* background-color: pink; */
			.mid-about {
				position: absolute;
				font-weight: 900;
				font-size: 260px;
				line-height: 200px;
				top: 0px;
				padding: 0 50px 0 50px;
				color: transparent; /* 文字透明，留出描边 */
				-webkit-text-stroke-width: 3px; /* 描边宽度 */
				-webkit-text-stroke-color: #8385fb; /* 文字描边的基础颜色 */
			}
			.mid-title {
				position: absolute;
				top: 60px;
				left: 80px;
				font-weight: 900;
				font-size: 70px;
			}
		}
		.content {
			width: 1050px;
			margin-bottom: 20px;
			margin-right: 150px;
			.content-title {
				:nth-child(1) {
					font-size: 25px;
					font-weight: 900;
				}
				:nth-child(2) {
					font-size: 12px;
					margin-left: 75px;
					font-weight: 900;
					color: #adadad;
				}
				margin-bottom: 10px;
			}
			.content-content {
				line-height: 36px;
				font-size: 26px;
			}
		}
		.footer {
			width: 90%;
			display: flex;
			flex-direction: row-reverse;
		}
	}
	.angle-box {
		position: relative;

		&::before,
		&::after {
			content: '';
			position: absolute;
			width: 20px;
			height: 30px;
		}

		&::before {
			top: 0;
			left: 0;
			border-left: 5px solid; /* 左边的边框宽度 */
			border-top: 5px solid; /* 上边的边框宽度 */
			border-image: linear-gradient(to bottom, #486deb, #e087fa) 1; /* 渐变颜色，左到右 */
			border-image-slice: 1;
		}

		&::after {
			bottom: 0;
			right: 0;
			border-bottom: 5px solid; /* 左边的边框宽度 */
			border-right: 5px solid; /* 上边的边框宽度 */
			border-image: linear-gradient(to bottom, #e087fa, #486deb) 1; /* 渐变颜色，左到右 */
			border-image-slice: 1;
		}
	}
	.attention-color {
		color: #2b4cf7;
		font-style: normal;
	}
</style>
