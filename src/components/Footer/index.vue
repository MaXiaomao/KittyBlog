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
				<em @click="menuRouter('/', '首页', undefined)">首页</em>
				<em
					@click="menuRouter('/ArticleList', v.name, {classify: v.id, name: v.name})"
					v-for="v in menuData"
					:key="v.id"
					>{{ v.name }}</em
				>
				<em>关于博主</em>
			</div>
			<div class="site-info">
				<p>
					Copyright © Xiaomao Blog All Rights Reserved. 2021-2026&emsp;
					<a href="https://beian.miit.gov.cn/" target="_blank">冀ICP备2022001949号-1</a>
				</p>
				<p class="hidden-md-and-down">
					Source code&emsp;<a href="https://github.com/MaXiaomao/KittyBlog" target="_blank">GitHub</a>
				</p>
			</div>
		</div>
	</footer>
	<el-backtop class="m-backtop" :bottom="30">
		<el-icon class="backtop-btn"><promotion /></el-icon>
	</el-backtop>
</template>

<script lang="ts">
import {defineComponent, onBeforeMount, onBeforeUnmount, Ref, ref} from "vue"
import {Router, useRouter, LocationQueryRaw} from "vue-router"
import PubSub from "pubsub-js"
import {Promotion} from "@element-plus/icons-vue"

export default defineComponent({
	name: "FooterComponent",
	components: {Promotion},
	setup() {
		const router: Router = useRouter()
		const menuData: Ref = ref([])

		const menuRouter = (path: string, name: string, query: LocationQueryRaw | undefined) => {
			PubSub.publish("activeIndex", name)
			router.push({
				path,
				query,
			})
		}

		onBeforeMount(() => {
			PubSub.subscribe("menuData", (msg: string, value: any) => {
				menuData.value = value
			})
		})
		onBeforeUnmount(() => {
			PubSub.unsubscribe("menuData")
		})
		return {menuData, menuRouter}
	},
})
</script>

<style scoped>
footer {
	padding: 30px 0;
	margin-top: 15px;
	background-color: #2d3237;
}
.friendship-nav {
	display: none; /*display: flex;*/
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
	overflow: hidden;
	margin-bottom: 15px;
}
.page-nav em {
	float: left;
	cursor: pointer;
	padding: 0 20px;
	line-height: 16px;
	font-style: normal;
	border-right: solid 1px #c0c4cc;
}
.page-nav em:last-child {
	border-right: none;
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
.site-info p {
	margin: 0;
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
