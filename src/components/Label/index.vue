<template>
	<div class="label">
		<title-bar-component name="标签云">
			<template #icon>
				<el-icon><collection-tag /></el-icon>
			</template>
			<template #right>更多</template>
		</title-bar-component>
		<div class="content">
			<el-tag
				class="m-tag"
				@click="tagClick('前端')"
				:type="tagType[randomNumber(0, 4)]"
				effect="dark"
				size="medium"
			>
				前端笔记
			</el-tag>
			<el-tag
				class="m-tag"
				@click="tagClick('前端')"
				:type="tagType[randomNumber(0, 4)]"
				effect="dark"
				size="medium"
			>
				JavaScript
			</el-tag>
			<el-tag
				class="m-tag"
				@click="tagClick('前端')"
				:type="tagType[randomNumber(0, 4)]"
				effect="dark"
				size="medium"
				>demo</el-tag
			>
			<el-tag
				class="m-tag"
				@click="tagClick('前端')"
				:type="tagType[randomNumber(0, 4)]"
				effect="dark"
				size="medium"
				>Vue</el-tag
			>
			<el-tag
				class="m-tag"
				@click="tagClick('前端')"
				:type="tagType[randomNumber(0, 4)]"
				effect="dark"
				size="medium"
				>tips</el-tag
			>
			<el-tag
				class="m-tag"
				@click="tagClick('前端')"
				:type="tagType[randomNumber(0, 4)]"
				effect="dark"
				size="medium"
				>css</el-tag
			>
			<el-tag
				class="m-tag"
				@click="tagClick('前端')"
				:type="tagType[randomNumber(0, 4)]"
				effect="dark"
				size="medium"
				>css3</el-tag
			>
			<el-tag
				class="m-tag"
				@click="tagClick('前端')"
				:type="tagType[randomNumber(0, 4)]"
				effect="dark"
				size="medium"
			>
				WordPress
			</el-tag>
			<el-tag
				class="m-tag"
				@click="tagClick('前端')"
				:type="tagType[randomNumber(0, 4)]"
				effect="dark"
				size="medium"
			>
				html
			</el-tag>
			<el-tag
				class="m-tag"
				@click="tagClick('前端')"
				:type="tagType[randomNumber(0, 4)]"
				effect="dark"
				size="medium"
				>canvas</el-tag
			>
			<el-tag
				class="m-tag"
				@click="tagClick('前端')"
				:type="tagType[randomNumber(0, 4)]"
				effect="dark"
				size="medium"
				>wordpress主题</el-tag
			>
			<el-tag
				class="m-tag"
				@click="tagClick('前端')"
				:type="tagType[randomNumber(0, 4)]"
				effect="dark"
				size="medium"
				>bootstrap</el-tag
			>
			<el-tag
				class="m-tag"
				@click="tagClick('前端')"
				:type="tagType[randomNumber(0, 4)]"
				effect="dark"
				size="medium"
				>SASS</el-tag
			>
			<el-tag
				class="m-tag"
				@click="tagClick('前端')"
				:type="tagType[randomNumber(0, 4)]"
				effect="dark"
				size="medium"
				>微信小程序</el-tag
			>
			<el-tag
				class="m-tag"
				@click="tagClick('前端')"
				:type="tagType[randomNumber(0, 4)]"
				effect="dark"
				size="medium"
				>nuxtjs</el-tag
			>
			<el-tag
				class="m-tag"
				@click="tagClick('前端')"
				:type="tagType[randomNumber(0, 4)]"
				effect="dark"
				size="medium"
				>html5</el-tag
			>
			<el-tag
				class="m-tag"
				@click="tagClick('前端')"
				:type="tagType[randomNumber(0, 4)]"
				effect="dark"
				size="medium"
				>软件分享</el-tag
			>
			<el-tag
				class="m-tag"
				@click="tagClick('前端')"
				:type="tagType[randomNumber(0, 4)]"
				effect="dark"
				size="medium"
				>手机摄影</el-tag
			>
			<el-tag
				class="m-tag"
				@click="tagClick('前端')"
				:type="tagType[randomNumber(0, 4)]"
				effect="dark"
				size="medium"
				>xuanmo</el-tag
			>
			<el-tag
				class="m-tag"
				@click="tagClick('前端')"
				:type="tagType[randomNumber(0, 4)]"
				effect="dark"
				size="medium"
				>iconfont</el-tag
			>
		</div>
	</div>
</template>

<script lang="ts">
import {defineComponent} from "vue"
import {CollectionTag} from "@element-plus/icons-vue"
import TitleBarComponent from "../TitleBar/index.vue"
import {randomNumber} from "../../config/plugIn/index.ts"

export default defineComponent({
	name: "LabelComponent",
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
