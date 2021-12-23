<template>
	<header>
		<div class="version-heart hidden-md-and-down">
			<el-row align="middle">
				<el-col :lg="4">
					<el-image
						src="https://upyun.xuanmo.xin/images/x-logo.png"
						style="width: 120px; height: 40px"
						fit="contain"
					></el-image>
				</el-col>
				<el-col :lg="15">
					<el-menu class="menu-nav" :default-active="activeIndex" @select="menuCurrent" mode="horizontal">
						<el-menu-item index="1">首页</el-menu-item>
						<el-menu-item index="2">web前端</el-menu-item>
						<el-menu-item index="3">后端</el-menu-item>
						<el-menu-item index="4">服务器</el-menu-item>
						<el-menu-item index="5">实战案例</el-menu-item>
						<el-menu-item index="6">关于博主</el-menu-item>
						<el-menu-item index="7">生活随笔</el-menu-item>
					</el-menu>
				</el-col>
				<el-col :lg="5">
					<el-input v-model="searchData" size="small" placeholder="请输入搜索内容">
						<template #append>
							<el-button @click="searchBtn(searchData)" :icon="Search"></el-button>
						</template>
					</el-input>
				</el-col>
			</el-row>
		</div>
		<div class="header-mini version-heart hidden-lg-and-up">
			<el-image
				src="https://upyun.xuanmo.xin/images/x-logo.png"
				style="width: 120px; height: 40px"
				fit="contain"
			></el-image>
			<el-icon class="drawer-btn" @click="drawerState = true" color="#606266"><expand /></el-icon>
			<el-drawer v-model="drawerState" :with-header="false" size="40%">
				<el-menu class="menu-nav" :default-active="activeIndex" @select="menuCurrent">
					<el-menu-item index="1">首页</el-menu-item>
					<el-menu-item index="2">web前端</el-menu-item>
					<el-menu-item index="3">后端</el-menu-item>
					<el-menu-item index="4">服务器</el-menu-item>
					<el-menu-item index="5">实战案例</el-menu-item>
					<el-menu-item index="6">关于博主</el-menu-item>
					<el-menu-item index="7">生活随笔</el-menu-item>
				</el-menu>
			</el-drawer>
		</div>
	</header>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue"
import {Search, Expand} from "@element-plus/icons-vue"

export default defineComponent({
	name: "HeaderComponent",
	components: {Expand},
	setup() {
		const activeIndex = ref("1")
		const searchData = ref("")
		const drawerState = ref(false)

		const menuCurrent = (key: number, keyPath: Array<string>) => {
			console.log(key, keyPath)
		}
		const searchBtn = (value: string) => {
			console.log(value)
		}

		return {Search, activeIndex, searchData, drawerState, menuCurrent, searchBtn}
	},
})
</script>

<style scoped>
header {
	margin-bottom: 15px;
	background-color: #ffffff;
	box-shadow: rgba(0, 0, 0, 0.1) 0 2px 12px 0;
}
.menu-nav {
	border-right: none;
	border-bottom: none;
}
.header-mini {
	height: 60px;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.drawer-btn {
	width: 60px;
	font-size: 30px;
}
</style>
