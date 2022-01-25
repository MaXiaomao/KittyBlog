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
				<el-pagination
					class="m-pagination"
					@current-change="pageChange"
					:current-page="page"
					:page-size="pageSize"
					:total="articleTotal"
					:pager-count="5"
					hide-on-single-page
					layout="total, prev, pager, next, jumper"
				/>
			</div>
		</div>
		<div class="grid-right hidden-md-and-down">
			<bulletin-component class="margin-bot" />
			<new-comment-component class="margin-bot" />
			<site-count-component class="margin-bot" />
			<label-component />
		</div>
	</div>
</template>

<script lang="ts">
import {defineComponent, onBeforeMount, ref, reactive, toRefs, Ref} from "vue"
import {Notebook} from "@element-plus/icons-vue"
import BannerComponent from "../../components/Banner/index.vue"
import TitleComponent from "../../components/TitleBar/index.vue"
import ArticleItemComponent from "../../components/ArticleItem/index.vue"
import BulletinComponent from "../../components/Bulletin/index.vue"
import NewCommentComponent from "../../components/NewComment/index.vue"
import SiteCountComponent from "../../components/SiteCount/index.vue"
import LabelComponent from "../../components/Label/index.vue"
import {getArticle, GetArticleRule} from "../../axios"

export default defineComponent({
	name: "HomeComponent",
	components: {
		Notebook,
		BannerComponent,
		TitleComponent,
		ArticleItemComponent,
		BulletinComponent,
		NewCommentComponent,
		SiteCountComponent,
		LabelComponent,
	},
	setup() {
		const articleTotal: Ref = ref(0)
		const articleData: Ref = ref([])
		const articleParams: GetArticleRule = reactive({
			classify: null,
			title: null,
			label: null,
			state: null,
			page: 1,
			pageSize: 7,
		})

		const articleGet = () => {
			getArticle(articleParams).then((res) => {
				articleTotal.value = res.data.total
				articleData.value = res.data.data
			})
		}
		const pageChange = (page: number) => {
			articleParams.page = page
			articleGet()
		}

		onBeforeMount(() => {
			articleGet()
		})
		return {articleData, articleTotal, ...toRefs(articleParams), pageChange}
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
