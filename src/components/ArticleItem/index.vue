<template>
	<div class="article-item">
		<div class="item-image">
			<el-image
				class="m-image"
				src="https://www.xuanmo.xin/wp-content/uploads/2021/11/11421637507239_.pic_.jpg"
				fit="cover"
			></el-image>
		</div>
		<div class="item-info">
			<div class="item-top">
				<span>{{ classify }}<i></i></span>{{ title }}
			</div>
			<div class="item-center">
				场景 在使用frp做内网穿透的时候，写了后台运行脚本文件，默认不会开机自动执行，这时候需要借助 Linux
				开机自动执行来完成。 步骤 第一步进入目录/etc/rc.d/init.d，创建一个需要开机启动的脚本文件，我这里以 frp
				启动脚本为例，文件名为 frp.sh #!/bin/sh #add for chkco
			</div>
			<div class="item-bottom">
				<div class="bottom-text">
					<div>
						<el-icon><calendar /></el-icon><span>2021-03-03 00:24:37</span>
					</div>
					<div>
						<el-icon><magic-stick /></el-icon><span>2024</span>
					</div>
					<div>
						<el-icon><chat-dot-square /></el-icon><span>18</span>
					</div>
				</div>
				<el-button @click="articleContent(id)" size="mini" type="primary">阅读详情</el-button>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import {defineComponent} from "vue"
import {Calendar, MagicStick, ChatDotSquare} from "@element-plus/icons-vue"

export default defineComponent({
	name: "ArticleItemComponent",
	components: {Calendar, MagicStick, ChatDotSquare},
	props: ["id", "title", "classify"],
	setup() {
		const articleContent = (id: number) => {
			console.log(id)
		}

		return {articleContent}
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
