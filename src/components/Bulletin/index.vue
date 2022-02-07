<template>
	<div class="bulletin">
		<title-bar-component name="公告">
			<template #icon>
				<el-icon><chat-dot-square /></el-icon>
			</template>
		</title-bar-component>
		<div class="content">
			<p>
				本站采用前后端分离架构（未考虑SEO），前端使用Vue3开发后端采用Egg开发，项目还有许多不完善之处，源码存放在Github，欢迎多多指正。
			</p>
			<a href="https://github.com/MaXiaomao/KittyBlog/" target="_blank">
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
