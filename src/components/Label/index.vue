<template>
	<div class="label">
		<title-bar-component name="标签云">
			<template #icon>
				<el-icon><collection-tag /></el-icon>
			</template>
			<template #right>
				<router-link to="/LabelAll">更多</router-link>
			</template>
		</title-bar-component>
		<div class="content">
			<el-tag
				v-for="v in labelData"
				class="m-tag"
				@click="tagClick(v.id, v.name)"
				:type="tagType[randomNumber(0, 4)]"
				effect="dark"
				size="medium"
				:key="v.id"
			>
				{{ v.name }}
			</el-tag>
		</div>
	</div>
</template>

<script lang="ts">
import {defineComponent, ref, onBeforeMount, Ref} from "vue"
import {Router, useRouter} from "vue-router"
import {CollectionTag} from "@element-plus/icons-vue"
import TitleBarComponent from "../TitleBar/index.vue"
import {randomNumber} from "../../config/plugIn"
import {getLabel} from "../../axios"

export default defineComponent({
	name: "LabelComponent",
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
			getLabel({size: 10}).then((res) => {
				labelData.value = res.data.data
			})
		})
		return {router, tagType, labelData, randomNumber, tagClick}
	},
})
</script>

<style scoped>
.label {
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
