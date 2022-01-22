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
					<el-menu
						class="menu-nav"
						:default-active="activeIndex"
						@select="menuCurrent"
						mode="horizontal"
						router
					>
						<el-menu-item :route="{path: '/'}" index="首页">首页</el-menu-item>
						<el-menu-item
							v-for="v in menuData"
							:route="{path: '/ArticleList', query: {classify: v.id, name: v.name}}"
							:index="v.name"
							:key="v.id"
						>
							{{ v.name }}
						</el-menu-item>
						<el-menu-item index="关于博主" disabled>关于博主</el-menu-item>
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
				<el-menu class="menu-nav" :default-active="activeIndex" @select="menuCurrent" router>
					<el-menu-item :route="{path: '/'}" index="首页">首页</el-menu-item>
					<el-menu-item
						v-for="v in menuData"
						:route="{path: '/ArticleList', query: {classify: v.id, name: v.name}}"
						:index="v.name"
						:key="v.id"
					>
						{{ v.name }}
					</el-menu-item>
					<el-menu-item index="关于博主" disabled>关于博主</el-menu-item>
				</el-menu>
			</el-drawer>
		</div>
	</header>
	<div class="header-dummy"></div>
</template>

<script lang="ts">
import {defineComponent, onBeforeMount, Ref, ref} from "vue"
import {Search, Expand} from "@element-plus/icons-vue"
import {getClassify} from "../../axios"

export default defineComponent({
	name: "HeaderComponent",
	components: {Expand},
	setup() {
		const activeIndex: Ref = ref("首页")
		const searchData: Ref = ref("")
		const drawerState: Ref = ref(false)
		const menuData: Ref = ref([])

		const menuCurrent = (key: number) => {
			sessionStorage.setItem("menuCurrent", key.toString())
			if (drawerState.value) drawerState.value = false
		}
		const searchBtn = (value: string) => {
			console.log(value)
		}

		onBeforeMount(() => {
			const menuCurrentSess: string | null = sessionStorage.getItem("menuCurrent")
			getClassify().then((res) => {
				menuData.value = res.data.data
			})
			if (menuCurrentSess !== null) activeIndex.value = menuCurrentSess
		})
		return {Search, activeIndex, searchData, drawerState, menuData, menuCurrent, searchBtn}
	},
})
</script>

<style scoped>
header {
	width: 100%;
	z-index: 999;
	position: fixed;
	background-color: #ffffff;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
.header-dummy {
	height: 60px;
	margin-bottom: 15px;
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
