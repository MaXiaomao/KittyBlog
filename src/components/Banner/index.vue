<template>
	<div class="banner">
		<div v-for="(v, i) in bannerData" :class="i === 0 ? 'banner-main banner-item' : 'banner-item'" :key="v.id">
			<el-image :src="`/upload${v.img_url}`" style="width: 100%; height: 100%" fit="cover"></el-image>
			<p>{{ v.title }}</p>
		</div>
	</div>
</template>

<script lang="ts">
import {defineComponent, onBeforeMount, Ref, ref} from "vue"
import {getArticle} from "../../axios"

export default defineComponent({
	name: "BannerComponent",
	setup() {
		const bannerData: Ref = ref([])

		onBeforeMount(() => {
			const params = {classify: null, title: null, label: null, state: 3, page: 1, pageSize: 4}
			getArticle(params).then((res) => {
				bannerData.value = res.data.data
			})
		})
		return {bannerData}
	},
})
</script>

<style scoped>
.banner {
	display: grid;
	grid-gap: 15px;
	grid-auto-flow: row;
	grid-template-columns: 710px 180px;
	grid-template-rows: 110px 110px 110px;
}
.banner-main {
	grid-row-end: 4;
	grid-row-start: 1;
	grid-column-end: 2;
	grid-column-start: 1;
}
.banner-item {
	cursor: pointer;
	overflow: hidden;
	border-radius: 5px;
	position: relative;
}
.banner-item p {
	margin: 0;
	bottom: 0;
	width: 100%;
	color: #ffffff;
	font-size: 14px;
	padding: 0 10px;
	overflow: hidden;
	line-height: 30px;
	position: absolute;
	white-space: nowrap;
	text-overflow: ellipsis;
	background-color: rgba(0, 0, 0, 0.3);
}
@media (max-width: 1200px) {
	.banner {
		grid-gap: 8px;
		grid-template-rows: 90px 90px 90px;
		grid-template-columns: repeat(3, 32%);
	}
	.banner-main {
		grid-row-end: 3;
		grid-column-end: 4;
	}
}
</style>
