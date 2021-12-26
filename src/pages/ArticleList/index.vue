<template>
	<div class="page-main version-heart">
		<div class="grid-left">
			<title-bar-component name="web前端"></title-bar-component>
			<div class="article-list">
				<article-item-component v-for="v in articleData" v-bind="v" :key="v.id" />
			</div>
			<el-pagination class="m-pagination" layout="prev, pager, next, jumper" :total="1000" :pager-count="5" />
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
import {defineComponent} from "vue"
import TitleBarComponent from "../../components/TitleBar/index.vue"
import ArticleItemComponent from "../../components/ArticleItem/index.vue"
import BulletinComponent from "../../components/Bulletin/index.vue"
import CommentComponent from "../../components/Comment/index.vue"
import SiteCountComponent from "../../components/SiteCount/index.vue"
import LabelComponent from "../../components/Label/index.vue"

export default defineComponent({
	name: "ArticleListComponent",
	components: {
		TitleBarComponent,
		ArticleItemComponent,
		BulletinComponent,
		CommentComponent,
		SiteCountComponent,
		LabelComponent,
	},
	setup() {},
})
</script>

<style scoped>
.page-main {
	display: grid;
	grid-gap: 15px;
	grid-template-columns: 905px 280px;
}
.grid-left {
	padding: 15px;
	background-color: #ffffff;
}
.m-pagination {
	text-align: center;
}
.margin-bot {
	margin-bottom: 15px;
}
</style>
