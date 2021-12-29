<template>
	<div class="page-main version-heart">
		<title-bar-component name="标签云">
			<template #icon>
				<el-icon><collection-tag /></el-icon>
			</template>
		</title-bar-component>
		<div class="content">
			<el-tag class="m-tag" :type="tagType[randomNumber(0, 4)]" effect="dark"> 前端笔记 </el-tag>
			<el-tag class="m-tag" :type="tagType[randomNumber(0, 4)]" effect="dark"> 前端笔记 </el-tag>
			<el-tag class="m-tag" :type="tagType[randomNumber(0, 4)]" effect="dark"> 前端笔记 </el-tag>
			<el-tag class="m-tag" :type="tagType[randomNumber(0, 4)]" effect="dark"> 前端笔记 </el-tag>
			<el-tag class="m-tag" :type="tagType[randomNumber(0, 4)]" effect="dark"> 前端笔记 </el-tag>
			<el-tag class="m-tag" :type="tagType[randomNumber(0, 4)]" effect="dark"> 前端笔记 </el-tag>
			<el-tag class="m-tag" :type="tagType[randomNumber(0, 4)]" effect="dark"> 前端笔记 </el-tag>
			<el-tag class="m-tag" :type="tagType[randomNumber(0, 4)]" effect="dark"> 前端笔记 </el-tag>
			<el-tag class="m-tag" :type="tagType[randomNumber(0, 4)]" effect="dark"> 前端笔记 </el-tag>
			<el-tag class="m-tag" :type="tagType[randomNumber(0, 4)]" effect="dark"> 前端笔记 </el-tag>
			<el-tag class="m-tag" :type="tagType[randomNumber(0, 4)]" effect="dark"> 前端笔记 </el-tag>
			<el-tag class="m-tag" :type="tagType[randomNumber(0, 4)]" effect="dark"> 前端笔记 </el-tag>
			<el-tag class="m-tag" :type="tagType[randomNumber(0, 4)]" effect="dark"> 前端笔记 </el-tag>
			<el-tag class="m-tag" :type="tagType[randomNumber(0, 4)]" effect="dark"> 前端笔记 </el-tag>
			<el-tag class="m-tag" :type="tagType[randomNumber(0, 4)]" effect="dark"> 前端笔记 </el-tag>
			<el-tag class="m-tag" :type="tagType[randomNumber(0, 4)]" effect="dark"> 前端笔记 </el-tag>
			<el-tag class="m-tag" :type="tagType[randomNumber(0, 4)]" effect="dark"> 前端笔记 </el-tag>
			<el-tag class="m-tag" @click="tagClick('前端')" :type="tagType[randomNumber(0, 4)]" effect="dark">
				前端笔记
			</el-tag>
		</div>
	</div>
</template>

<script lang="ts">
import {defineComponent} from "vue"
import {CollectionTag} from "@element-plus/icons-vue"
import TitleBarComponent from "../../components/TitleBar/index.vue"
import {randomNumber} from "../../config/plugIn/index.ts"

export default defineComponent({
	name: "LabelAllComponent",
	components: {TitleBarComponent, CollectionTag},
	setup() {
		const tagType: string[] = ["success", "info", "warning", "danger"]

		const tagClick = (value: string) => {
			console.log(value)
		}

		return {tagType, randomNumber, tagClick}
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
