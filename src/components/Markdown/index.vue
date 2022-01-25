<template>
	<div class="markdown-body" v-html="htmlBody"></div>
</template>

<script lang="ts">
import {defineComponent, onMounted} from "vue"
import MarkdownIt from "markdown-it"
import Prismjs from "prismjs"
import "prismjs/components/prism-json.min"
import "prismjs/components/prism-yaml.min"
import "prismjs/themes/prism-coy.css"
import "prismjs/plugins/line-numbers/prism-line-numbers.min"
import "prismjs/plugins/line-numbers/prism-line-numbers.css"

export default defineComponent({
	name: "MarkdownComponent",
	props: ["body"],
	setup(props) {
		const {body} = props
		console.log(body)
		const Markdown = new MarkdownIt({
			highlight: (str: string, lang: string) => {
				return `<pre class="language-${lang}"><code class="line-numbers language-${lang}">${str}</code></pre>`
			},
		})
		const htmlBody = Markdown.render(body)

		onMounted(() => {
			Prismjs.highlightAll()
		})
		return {htmlBody}
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
.markdown-body /deep/ table {
	border-spacing: 0;
	border-left: solid 1px #dcdfe6;
	border-bottom: solid 1px #dcdfe6;
}
.markdown-body /deep/ tr {
	overflow: hidden;
	line-height: 25px;
}
.markdown-body /deep/ th {
	background-color: #f2f6fc;
}
.markdown-body /deep/ th,
.markdown-body /deep/ td {
	padding: 5px 15px;
	line-height: 23px;
	text-align: center;
	border-top: solid 1px #dcdfe6;
	border-right: solid 1px #dcdfe6;
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
