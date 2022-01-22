<template>
	<div class="markdown-body" v-html="body"></div>
</template>

<script lang="ts">
import {defineComponent, onMounted} from "vue"
import Prismjs from "prismjs"
import "prismjs/themes/prism-coy.css"
import "prismjs/plugins/line-numbers/prism-line-numbers.min"
import "prismjs/plugins/line-numbers/prism-line-numbers.css"

export default defineComponent({
	name: "MarkdownComponent",
	props: ["body"],
	setup() {
		// const Markdown = new MarkdownIt()

		onMounted(() => {
			Prismjs.highlightAll()
		})
		return {}
	},
})
</script>

<style scoped>
.markdown-body {
	font-size: 14px;
}
.markdown-body /deep/ img {
	display: block;
	margin: 0 auto;
}
.markdown-body /deep/ p {
	color: #606266;
	line-height: 20px;
}
.markdown-body /deep/ p code {
	color: #f56c6c;
	padding: 2px 4px;
	border-radius: 4px;
	background-color: #dcdfe6;
}
.markdown-body /deep/ blockquote {
	margin-left: 0;
	margin-right: 0;
	padding-left: 23px;
	background-position: 2px 2px;
	background-repeat: no-repeat;
	background-image: url("../../config/image/star.png");
}
/deep/ pre[class*="language-"] > code {
	border: none;
	border-radius: 4px;
}
/deep/ pre[class*="language-"]:before,
/deep/ pre[class*="language-"]:after {
	box-shadow: none;
}
</style>
