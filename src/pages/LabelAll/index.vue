<template>
	<div class="page-main version-heart">
		<title-bar-component name="标签云">
			<template #icon>
				<el-icon><collection-tag /></el-icon>
			</template>
		</title-bar-component>
		<div class="content">
			<el-tag
				class="m-tag"
				v-for="v in labelData"
				@click="tagClick(v.id, v.name)"
				:type="tagType[randomNumber(0, 4)]"
				effect="dark"
				:key="v.id"
			>
				{{ v.name }}
			</el-tag>
		</div>
	</div>
</template>

<script lang="ts">
import {defineComponent, onBeforeMount, Ref, ref} from "vue"
import {Router, useRouter} from "vue-router"
import {CollectionTag} from "@element-plus/icons-vue"
import TitleBarComponent from "../../components/TitleBar/index.vue"
import {randomNumber} from "../../config/plugIn"
import {getLabel} from "../../axios"

export default defineComponent({
	name: "LabelAllComponent",
	components: {TitleBarComponent, CollectionTag},
	setup() {
		const router: Router = useRouter()
		const tagType: string[] = ["success", "info", "warning", "danger"]
		const labelData: Ref = ref([])

		const tagClick = (id: number, name: string) => {
			router.push({
				path: "/ArticleList",
				query: {
					label: id,
					name,
				},
			})
		}

		onBeforeMount(() => {
			getLabel({size: null}).then((res) => {
				labelData.value = res.data.data
			})
		})
		return {tagType, labelData, randomNumber, tagClick}
	},
})
</script>

<style scoped>
.page-main {
	padding: 15px;
	border-radius: 4px;
	background-color: #ffffff;
}
.content {
	margin-right: -5px;
}
.m-tag {
	cursor: pointer;
	margin-right: 5px;
	margin-bottom: 5px;
}
</style>
