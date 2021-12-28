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
				<div class="article-list">
					<article-item-component v-for="v in articleData" v-bind="v" :key="v.id" />
				</div>
				<el-pagination class="m-pagination" layout="prev, pager, next, jumper" :total="1000" :pager-count="5" />
			</div>
		</div>
		<div class="grid-right hidden-md-and-down">
			<bulletin-component class="margin-bot" />
			<comment-component class="margin-bot" />
			<site-count-component class="margin-bot" />
			<label-component class="margin-bot" />
		</div>
	</div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue"
import {Notebook} from "@element-plus/icons-vue"
import BannerComponent from "../../components/Banner/index.vue"
import TitleComponent from "../../components/TitleBar/index.vue"
import ArticleItemComponent from "../../components/ArticleItem/index.vue"
import BulletinComponent from "../../components/Bulletin/index.vue"
import CommentComponent from "../../components/NewComment/index.vue"
import SiteCountComponent from "../../components/SiteCount/index.vue"
import LabelComponent from "../../components/Label/index.vue"

export default defineComponent({
	name: "HomeComponent",
	components: {
		Notebook,
		BannerComponent,
		TitleComponent,
		ArticleItemComponent,
		BulletinComponent,
		CommentComponent,
		SiteCountComponent,
		LabelComponent,
	},
	setup() {
		const articleData = ref([
			{
				id: 1,
				classify: "web前端",
				time: "2021-12-20 18:00:00",
				thumbnail: "",
				title: "Linux 开机自动执行自定义脚本",
				describe:
					"场景 在使用frp做内网穿透的时候，写了后台运行脚本文件，默认不会开机自动执行，这时候需要借助 Linux 开机自动执行来完成。 步骤 第一步进入目录/etc/rc.d/init.d，创建一个需要开机启动的脚本文件，我这里以 frp 启动脚本为例，文件名为 frp.sh #!/bin/sh #add for chkco",
			},
		])

		return {articleData}
	},
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
.m-pagination {
	text-align: center;
}
.margin-bot {
	margin-bottom: 15px;
}
@media (max-width: 1200px) {
	.page-main {
		grid-gap: 0;
		grid-template-columns: 100%;
	}
}
</style>
