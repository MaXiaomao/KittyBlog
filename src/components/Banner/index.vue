<template>
	<div class="banner">
		<div class="banner-main banner-item">
			<el-image
				src="https://upyun.xuanmo.xin/images/20180623145637.jpg"
				style="width: 100%; height: 100%"
				fit="cover"
			></el-image>
			<p>原创 Nuxtjs + WordPress 主题，前后端分离，欢迎体验</p>
		</div>
		<div class="banner-item">
			<el-image
				src="https://blog.xuanmo.xin/wp-content/uploads/2020/06/18881590731903_.pic_.jpg"
				style="width: 100%; height: 100%"
				fit="cover"
			></el-image>
			<p>我的 form 动态表单组件</p>
		</div>
		<div class="banner-item">
			<el-image
				src="https://www.xuanmo.xin/wp-content/uploads/2019/07/WechatIMG386.jpg"
				style="width: 100%; height: 100%"
				fit="cover"
			></el-image>
			<p>垃圾分类小妙招-我的小程序</p>
		</div>
		<div class="banner-item">
			<el-image
				src="https://blog.xuanmo.xin/wp-content/uploads/2020/06/gh_644ee0d14483_258-1.jpg"
				style="width: 100%; height: 100%"
				fit="cover"
			></el-image>
			<p>博客小程序版正式发布</p>
		</div>
	</div>
</template>

<script lang="ts">
import {defineComponent} from "vue"

export default defineComponent({
	name: "BannerComponent",
	setup() {},
})
</script>

<style scoped>
.banner {
	display: grid;
	grid-gap: 10px;
	grid-auto-flow: row;
	grid-template-columns: 710px 180px;
	grid-template-rows: 110px 110px 110px;
}
.banner-main {
	grid-row-end: 4;
	grid-row-start: 1;
	grid-column-end: 2;
	grid-column-start: 1;
}
.banner-item {
	cursor: pointer;
	overflow: hidden;
	border-radius: 5px;
	position: relative;
}
.banner-item p {
	margin: 0;
	bottom: 0;
	width: 100%;
	color: #ffffff;
	font-size: 14px;
	padding: 0 10px;
	overflow: hidden;
	line-height: 30px;
	position: absolute;
	white-space: nowrap;
	text-overflow: ellipsis;
	background-color: rgba(0, 0, 0, 0.3);
}
</style>
