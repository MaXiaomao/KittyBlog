<template>
	<div class="site-count">
		<title-bar-component name="站点统计">
			<template #icon>
				<el-icon><data-line /></el-icon>
			</template>
		</title-bar-component>
		<div class="content">
			<el-row>
				<el-col :span="12">标签：149个</el-col>
				<el-col :span="12">文章：146篇</el-col>
				<el-col :span="12">评论：1781条</el-col>
				<el-col :span="12">分类：22个</el-col>
				<el-col :span="24">最后更新：2021-12-22</el-col>
			</el-row>
		</div>
	</div>
</template>

<script lang="ts">
import {defineComponent} from "vue"
import {DataLine} from "@element-plus/icons-vue"
import TitleBarComponent from "../TitleBar/index.vue"

export default defineComponent({
	name: "SiteCountComponent",
	components: {TitleBarComponent, DataLine},
	setup() {},
})
</script>

<style scoped>
.site-count {
	padding: 15px;
	border-radius: 4px;
	background-color: #ffffff;
}
.content {
	color: #606266;
	font-size: 14px;
	line-height: 25px;
}
</style>
