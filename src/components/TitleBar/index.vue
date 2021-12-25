<template>
	<div class="title-bar">
		<div class="title-text">
			<slot name="icon"></slot><span>{{ name }}</span>
		</div>
		<div class="title-btn" @click="clickBtn"><slot name="right"></slot></div>
	</div>
</template>

<script lang="ts">
import {defineComponent} from "vue"

export default defineComponent({
	name: "TitleComponent",
	props: ["name", "clickBtn"],
	setup() {},
})
</script>

<style scoped>
.title-bar {
	height: 40px;
	display: flex;
	align-items: center;
	margin-bottom: 15px;
	justify-content: space-between;
	border-bottom: solid 1px #dcdfe6;
}
.title-bar .title-text {
	height: 100%;
	display: flex;
	color: #606266;
	padding: 0 10px;
	align-items: center;
	margin-bottom: -1px;
	border-bottom: solid 2px #409eff;
}
.title-bar span {
	line-height: 1;
	margin-left: 5px;
}
.title-bar i {
	font-size: 12px;
	font-style: normal;
}
.title-btn {
	color: #909399;
	font-size: 12px;
	cursor: pointer;
	padding-right: 5px;
}
</style>
