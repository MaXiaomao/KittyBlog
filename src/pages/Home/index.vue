<template>
	<div class="page-main version-heart">
		<div class="grid-left">
			<banner-component class="m-banner" />
			<div class="article-block">
				<title-component name="最新文章">
					<template #icon>
						<el-icon><notebook /></el-icon>
					</template>
				</title-component>
			</div>
		</div>
		<div class="grid-right">right</div>
	</div>
</template>

<script lang="ts">
import {defineComponent} from "vue"
import {Notebook} from "@element-plus/icons-vue"
import BannerComponent from "../../components/Banner/index.vue"
import TitleComponent from "../../components/TitleBar/index.vue"

export default defineComponent({
	name: "HomeComponent",
	components: {Notebook, BannerComponent, TitleComponent},
	setup() {},
})
</script>

<style scoped>
.page-main {
	display: grid;
	grid-gap: 15px;
	grid-template-columns: 905px 280px;
}
.m-banner {
	margin-bottom: 15px;
}
.article-block {
	padding: 15px;
	border-radius: 5px;
	background-color: #ffffff;
}
</style>
