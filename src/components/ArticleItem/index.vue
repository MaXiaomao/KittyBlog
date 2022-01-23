<template>
	<div class="article-item">
		<div class="item-image">
			<el-image class="m-image" v-if="img_url !== null" :src="`/upload${img_url}`" fit="cover"></el-image>
		</div>
		<div class="item-info">
			<div class="item-top">
				<span>{{ classifyName }}<i></i></span>{{ title }}
			</div>
			<div class="item-center">{{ describe }}</div>
			<div class="item-bottom">
				<div class="bottom-text">
					<div>
						<el-icon><calendar /></el-icon>
						<span>{{ dayjs.utc(date_time).local().format("YYYY-MM-DD HH:mm:ss") }}</span>
					</div>
					<div>
						<el-icon><magic-stick /></el-icon><span>{{ like }}</span>
					</div>
					<div>
						<el-icon><chat-dot-square /></el-icon><span>0</span>
					</div>
				</div>
				<el-button @click="articleContent(id)" size="mini" type="primary">阅读详情</el-button>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import {defineComponent, onBeforeMount} from "vue"
import {Router, useRouter} from "vue-router"
import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
import {Calendar, MagicStick, ChatDotSquare} from "@element-plus/icons-vue"

export default defineComponent({
	name: "ArticleItemComponent",
	components: {Calendar, MagicStick, ChatDotSquare},
	props: ["img_url", "id", "title", "classify", "classifyName", "describe", "date_time", "like"],
	setup() {
		const router: Router = useRouter()

		const articleContent = (id: number) => {
			router.push({
				path: "/ArticleContent",
				query: {id},
			})
		}

		onBeforeMount(() => {
			dayjs.extend(utc)
		})
		return {dayjs, articleContent}
	},
})
</script>

<style scoped>
.article-item {
	display: flex;
	height: 160px;
	overflow: hidden;
	position: relative;
	margin-bottom: 15px;
	align-items: stretch;
	padding-bottom: 15px;
}
.article-item:after,
.article-item:before {
	bottom: 0;
	content: "";
	height: 1px;
	width: 100%;
	position: absolute;
	transition: all 0.4s;
	background-color: #dcdfe6;
}
.article-item:after {
	background-color: #409eff;
	transform: translateX(-100%);
}
.article-item:hover:after {
	transform: translateX(0);
}
.item-image {
	flex-shrink: 0;
	overflow: hidden;
	margin-right: 15px;
	border-radius: 4px;
}
.m-image {
	width: 260px;
	height: 145px;
	border-radius: 4px;
	transition: all 0.4s;
}
.article-item:hover .m-image {
	transform: scale(1.2);
}
.item-info {
	flex-grow: 2;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
}
.item-top {
	display: flex;
	color: #303133;
	line-height: 25px;
}
.item-top span {
	color: #ffffff;
	padding: 0 10px;
	font-size: 12px;
	border-radius: 4px;
	margin-right: 15px;
	position: relative;
	background-color: #409eff;
}
.item-top i {
	top: 50%;
	right: -9px;
	margin-top: -5px;
	position: absolute;
	border-style: solid;
	border-width: 5px 0 5px 8.7px;
	border-color: transparent transparent transparent #40a0ff;
}
.item-center {
	color: #909399;
	font-size: 14px;
}
.item-bottom {
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.bottom-text {
	display: flex;
	color: #e6a23c;
	font-size: 12px;
	align-items: center;
}
.bottom-text div {
	display: flex;
	line-height: 1;
	margin-right: 15px;
	align-items: center;
}
.bottom-text span {
	margin-left: 5px;
}
@media (max-width: 1200px) {
	.article-item {
		height: auto;
		flex-direction: column;
	}
	.article-item:hover:after {
		transform: translateX(-100%);
	}
	.item-image {
		margin-right: 0;
		margin-bottom: 15px;
	}
	.m-image {
		width: 100%;
		height: auto;
	}
	.article-item:hover .m-image {
		transform: scale(1);
	}
	.item-info {
		height: 180px;
	}
}
</style>
