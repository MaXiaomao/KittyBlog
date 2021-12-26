<template>
	<div class="comment">
		<title-bar-component name="最新评论">
			<template #icon>
				<el-icon><chat-line-square /></el-icon>
			</template>
		</title-bar-component>
		<div class="content">
			<div class="comment-item">
				<div class="item-title">
					<el-avatar
						src="https://avatar.xuanmo.xin/avatar/1e0d69e108da16e73f8227bd973231f4?s=200"
						fit="cover"
						:size="50"
					></el-avatar>
					<div class="title-info">
						<strong>dylan</strong>
						<p>评：写给2021年以及未来的我</p>
					</div>
				</div>
				<div class="item-text">
					linux (deepin) 下的主题自动切换无效，之前还想着怎样自动切换呢，之前还想着怎样自动切换呢
				</div>
			</div>
			<div class="comment-item">
				<div class="item-title">
					<el-avatar
						src="https://avatar.xuanmo.xin/avatar/1e0d69e108da16e73f8227bd973231f4?s=200"
						fit="cover"
						:size="50"
					></el-avatar>
					<div class="title-info">
						<strong>dylan</strong>
						<p>评：写给2021年以及未来的我</p>
					</div>
				</div>
				<div class="item-text">linux (deepin) 下的主题自动切换无效，之前还想着怎样自动切换呢，</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import {defineComponent} from "vue"
import {ChatLineSquare} from "@element-plus/icons-vue"
import TitleBarComponent from "../TitleBar/index.vue"

export default defineComponent({
	name: "CommentComponent",
	components: {TitleBarComponent, ChatLineSquare},
	setup() {},
})
</script>

<style scoped>
.comment {
	padding: 15px;
	border-radius: 4px;
	background-color: #ffffff;
}
.content {
	margin-bottom: -10px;
}
.comment-item {
	margin-bottom: 10px;
	padding-bottom: 10px;
	border-bottom: dashed 1px #ebeef5;
}
.item-title {
	display: flex;
	align-items: stretch;
	justify-content: space-between;
}
.title-info {
	flex-grow: 1;
	display: flex;
	padding-left: 15px;
	flex-direction: column;
	justify-content: space-around;
}
.title-info strong {
	color: #303133;
	font-size: 14px;
}
.title-info p {
	margin: 0;
	color: #409eff;
	font-size: 12px;
	cursor: pointer;
}
.item-text {
	color: #606266;
	font-size: 14px;
	margin-top: 5px;
	overflow: hidden;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	text-overflow: ellipsis;
	-webkit-box-orient: vertical;
}
</style>
