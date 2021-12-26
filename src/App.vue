<template>
	<el-config-provider :locale="locale">
		<HeaderComponent />
		<router-view />
		<FooterComponent />
	</el-config-provider>
</template>

<script lang="ts">
import {defineComponent} from "vue"
import {ElConfigProvider} from "element-plus"
import zhCn from "element-plus/lib/locale/lang/zh-cn"
import HeaderComponent from "./components/Header/index.vue"
import FooterComponent from "./components/Footer/index.vue"

export default defineComponent({
	name: "App",
	components: {ElConfigProvider, HeaderComponent, FooterComponent},
	setup() {
		return {locale: zhCn}
	},
})
</script>

<style>
.page-main {
	min-height: calc(100vh - 288px);
}
</style>
