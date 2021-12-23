<template>
	<footer>
		<div class="version-heart">
			<div class="friendship-nav">
				<a href="" target="_blank">健旺博客</a>
				<a href="" target="_blank">吴佳博客</a>
				<a href="" target="_blank">憧憬点滴记忆</a>
				<a href="" target="_blank">林小屋博客</a>
				<a href="" target="_blank">博客大全</a>
				<a href="" target="_blank">筱陌博客</a>
				<a href="" target="_blank">唯品秀博客</a>
				<a href="" target="_blank">冯奎博客</a>
			</div>
			<div class="page-nav">
				<em>首页</em>
				<i>|</i>
				<em>联系站长</em>
				<i>|</i>
				<em>我的开源</em>
				<i>|</i>
				<em>留言板</em>
				<i>|</i>
				<em>友链申请</em>
				<i>|</i>
				<em>友情链接</em>
				<i>|</i>
				<em>站点地图</em>
			</div>
			<div class="site-info">
				<p>
					Copyright © Xiaomao Blog All Rights Reserved. 2021-2026&emsp;<a href="" target="_blank"
						>京ICP备12345678号-2</a
					>
				</p>
				<p class="hidden-md-and-down">Theme by <a href="" target="_blank">Xiaomao</a></p>
			</div>
		</div>
	</footer>
	<el-backtop class="m-backtop" :bottom="30">
		<el-icon class="backtop-btn"><promotion /></el-icon>
	</el-backtop>
</template>

<script lang="ts">
import {defineComponent} from "vue"
import {Promotion} from "@element-plus/icons-vue"

export default defineComponent({
	name: "FooterComponent",
	components: {Promotion},
	setup() {},
})
</script>

<style scoped>
footer {
	padding: 30px 0;
	margin-top: 15px;
	background-color: #2d3237;
}
.friendship-nav {
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	margin-bottom: 20px;
	padding-bottom: 20px;
	border-bottom: solid 1px #dcdfe6;
}
.friendship-nav a {
	padding: 0 10px;
	line-height: 32px;
}
.page-nav {
	color: #c0c4cc;
	font-size: 14px;
}
.page-nav em {
	cursor: pointer;
	font-style: normal;
}
.page-nav em:hover {
	color: #409eff;
}
.page-nav i {
	margin: 0 10px;
	font-style: normal;
}
.site-info {
	display: flex;
	color: #c0c4cc;
	font-size: 12px;
	line-height: 22px;
	align-items: center;
	justify-content: space-between;
}
a {
	color: #c0c4cc;
	text-decoration: none;
}
a:hover {
	color: #409eff;
}
.m-backtop {
	box-shadow: none;
	background-color: transparent;
}
.backtop-btn {
	font-size: 40px;
}
</style>
