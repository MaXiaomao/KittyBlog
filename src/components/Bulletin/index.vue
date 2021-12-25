<template>
	<div class="bulletin">
		<title-bar-component name="公告">
			<template #icon>
				<el-icon><chat-dot-square /></el-icon>
			</template>
		</title-bar-component>
		<div class="content">
			<p>
				喜欢这款主题的朋友可以按教程折腾。 本站采用Nuxtjs+WordPress REST
				API渲染页面，源码存放在Github，欢迎使用。 微信小程序版已上线，欢迎体验。
			</p>
			<a href="">
				<el-image src="https://img.shields.io/github/stars/MaXiaomao/KittyBlog?style=social"></el-image>
			</a>
		</div>
	</div>
</template>

<script>
import {defineComponent} from "vue"
import {ChatDotSquare} from "@element-plus/icons-vue"
import TitleBarComponent from "../TitleBar/index.vue"

export default defineComponent({
	name: "BulletinComponent",
	components: {TitleBarComponent, ChatDotSquare},
	setup() {},
})
</script>

<style scoped>
.bulletin {
	padding: 15px;
	border-radius: 4px;
	background-color: #ffffff;
}
.content {
	color: #606266;
	font-size: 14px;
}
.content p {
	margin: 0 0 8px;
}
</style>
