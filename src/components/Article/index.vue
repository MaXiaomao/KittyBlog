<template>
	<div class="article">
		<div class="title">
			<h2>在Nuxtjs中使用@nuxtjs/axios与vuex的一些心得</h2>
			<div class="info">
				<p>
					<el-icon><user /></el-icon>马小茂
				</p>
				<p>
					<el-icon><magic-stick /></el-icon>8897
				</p>
				<p>
					<el-icon><chat-dot-square /></el-icon>123
				</p>
				<p>
					<el-icon><calendar /></el-icon>2020-11-29 18:00:00
				</p>
			</div>
		</div>
		<div class="content" v-html="markedLinkPrism(html)"></div>
	</div>
	<div class="active-oper">
		<div class="label-bar">
			<el-icon class="m-icon" color="#303133"><collection-tag /></el-icon>
			<el-tag class="m-tag" :type="tagType[randomNumber(0, 4)]" size="medium">手机摄影</el-tag>
			<el-tag class="m-tag" :type="tagType[randomNumber(0, 4)]" size="medium">xuanmo</el-tag>
		</div>
		<div class="context">
			<p>上一篇：<span>Vue项目中遇见的一些问题</span></p>
			<p>下一篇：<span>Vue项目中遇见的一些问题</span></p>
		</div>
	</div>
</template>

<script lang="ts">
import {defineComponent} from "vue"
import {User, MagicStick, ChatDotSquare, Calendar, CollectionTag} from "@element-plus/icons-vue"
import {randomNumber, markedLinkPrism} from "../../config/plugIn/index.ts"

// Line Numbers
export default defineComponent({
	name: "ArticleComponent",
	components: {User, MagicStick, ChatDotSquare, Calendar, CollectionTag},
	setup() {
		const tagType: string[] = ["success", "info", "warning", "danger"]
		const html = `React + marked + prism.js

**Code Sample:**
\`\`\`js
import marked from "marked";
import prismjs from "prismjs";

marked.setOptions({
  renderer,
  highlight: function(code, lang) {
    try {
      return prismjs.highlight(code, prismjs.languages[lang], lang);
    } catch {
      return code;
    }
  }
});
\`\`\`
`

		return {tagType, html, randomNumber, markedLinkPrism}
	},
})
</script>

<style scoped>
.article,
.active-oper {
	padding: 15px;
	border-radius: 4px;
	margin-bottom: 15px;
	background-color: #ffffff;
}
.title {
	text-align: center;
	margin-bottom: 10px;
	padding-bottom: 10px;
	border-bottom: solid 1px #ebeef5;
}
.title h2 {
	color: #303133;
	font-size: 18px;
	margin: 0 0 10px;
}
.info {
	display: flex;
	align-items: center;
	justify-content: center;
}
.info p {
	margin: 0;
	color: #909399;
	line-height: 1;
	padding: 0 10px;
	font-size: 14px;
}
.info i {
	margin-right: 3px;
	vertical-align: middle;
}
.active-oper {
}
.label-bar {
	display: flex;
	padding: 15px 0;
	align-items: center;
	justify-content: center;
}
.label-bar .m-icon {
	font-size: 18px;
	margin-right: 5px;
}
.label-bar .m-tag {
	margin: 0 5px;
	cursor: pointer;
}
.context p {
	margin: 0;
	color: #606266;
	font-size: 14px;
	line-height: 25px;
}
.context span:hover {
	color: #409eff;
	cursor: pointer;
}
/deep/ pre[class*="language-"] > code {
	border: none;
	border-radius: 4px;
}
</style>
