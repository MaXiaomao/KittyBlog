<template>
	<div class="site-count">
		<title-bar-component name="站点统计">
			<template #icon>
				<el-icon><data-line /></el-icon>
			</template>
		</title-bar-component>
		<div class="content">
			<el-row>
				<el-col :span="12">标签：{{ infoData.label }} 个</el-col>
				<el-col :span="12">文章：{{ infoData.article }} 篇</el-col>
				<el-col :span="12">评论：0 条</el-col>
				<el-col :span="12">分类：{{ infoData.classify }} 个</el-col>
				<el-col :span="24" v-if="infoData"
					>最后更新：{{ dayjs.utc(infoData.date_time).local().format("YYYY-MM-DD HH:mm:ss") }}</el-col
				>
			</el-row>
		</div>
	</div>
</template>

<script lang="ts">
import {defineComponent, onBeforeMount, Ref, ref} from "vue"
import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
import {DataLine} from "@element-plus/icons-vue"
import TitleBarComponent from "../TitleBar/index.vue"
import {getSiteCount} from "../../axios"

export default defineComponent({
	name: "SiteCountComponent",
	components: {TitleBarComponent, DataLine},
	setup() {
		const infoData: Ref = ref({})

		onBeforeMount(() => {
			getSiteCount().then((res) => {
				infoData.value = res.data
			})
			dayjs.extend(utc)
		})
		return {dayjs, infoData}
	},
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
