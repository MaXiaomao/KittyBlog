<template>
	<div class="article">
		<div class="title">
			<h2>{{ title }}</h2>
			<div class="info">
				<p>
					<el-icon><user /></el-icon>马小茂
				</p>
				<p>
					<el-icon><magic-stick /></el-icon>{{ like }}
				</p>
				<p>
					<el-icon><chat-dot-square /></el-icon>0
				</p>
				<p>
					<el-icon><calendar /></el-icon>{{ dayjs.utc(date_time).local().format("YYYY-MM-DD HH:mm:ss") }}
				</p>
			</div>
		</div>
		<markdown-component v-if="body" :body="body"></markdown-component>
	</div>
	<div class="active-oper">
		<div class="label-bar">
			<el-icon class="m-icon" color="#303133"><collection-tag /></el-icon>
			<el-tag class="m-tag" v-for="v in label" :type="tagType[randomNumber(0, 4)]" size="medium" :key="v.id">
				{{ v.name }}
			</el-tag>
		</div>
		<!--<div class="context">-->
		<!--<p>上一篇：<span>Vue项目中遇见的一些问题</span></p>-->
		<!--<p>下一篇：<span>Vue项目中遇见的一些问题</span></p>-->
		<!--/div>-->
	</div>
</template>

<script lang="ts">
import {defineComponent, onBeforeMount} from "vue"
import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
import {User, MagicStick, ChatDotSquare, Calendar, CollectionTag} from "@element-plus/icons-vue"
import MarkdownComponent from "../Markdown/index.vue"
import {randomNumber} from "../../config/plugIn"

export default defineComponent({
	name: "ArticleComponent",
	components: {User, MagicStick, ChatDotSquare, Calendar, CollectionTag, MarkdownComponent},
	props: ["title", "like", "date_time", "body", "label", "id", "classify", "state", "describe", "img_url", "scan"],
	setup() {
		const tagType: string[] = ["success", "info", "warning", "danger"]

		onBeforeMount(() => {
			dayjs.extend(utc)
		})
		return {dayjs, tagType, randomNumber}
	},
})
</script>

<style scoped>
.article,
.active-oper {
	padding: 15px;
	border-radius: 4px;
	margin-bottom: 15px;
	background-color: #ffffff;
}
.title {
	text-align: center;
	margin-bottom: 10px;
	padding-bottom: 10px;
	border-bottom: solid 1px #ebeef5;
}
.title h2 {
	color: #303133;
	font-size: 18px;
	margin: 0 0 10px;
}
.info {
	display: flex;
	align-items: center;
	justify-content: center;
}
.info p {
	margin: 0;
	color: #909399;
	line-height: 1;
	padding: 0 10px;
	font-size: 14px;
}
.info i {
	margin-right: 3px;
	vertical-align: middle;
}
.label-bar {
	display: flex;
	/*padding: 15px 0;*/
	align-items: center;
	justify-content: center;
}
.label-bar .m-icon {
	font-size: 18px;
	margin-right: 5px;
}
.label-bar .m-tag {
	margin: 0 5px;
	cursor: pointer;
}
.context p {
	margin: 0;
	color: #606266;
	font-size: 14px;
	line-height: 25px;
}
.context span:hover {
	color: #409eff;
	cursor: pointer;
}
</style>
