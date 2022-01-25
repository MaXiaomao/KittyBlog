<template>
	<div class="page-main version-heart">
		<div class="grid-left">
			<title-bar-component :name="pageTitle"></title-bar-component>
			<div class="article-list">
				<article-item-component v-for="v in articleData" v-bind="v" :key="v.id" />
			</div>
			<el-pagination
				v-if="route.query.classify !== undefined"
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
		<div class="grid-right hidden-md-and-down">
			<bulletin-component class="margin-bot" />
			<new-comment-component class="margin-bot" />
			<site-count-component class="margin-bot" />
			<label-component />
		</div>
	</div>
</template>

<script lang="ts">
import {defineComponent, onBeforeMount, reactive, Ref, ref, toRefs, watch} from "vue"
import {RouteLocationNormalizedLoaded, useRoute} from "vue-router"
import TitleBarComponent from "../../components/TitleBar/index.vue"
import ArticleItemComponent from "../../components/ArticleItem/index.vue"
import BulletinComponent from "../../components/Bulletin/index.vue"
import NewCommentComponent from "../../components/NewComment/index.vue"
import SiteCountComponent from "../../components/SiteCount/index.vue"
import LabelComponent from "../../components/Label/index.vue"
import {getArticle, GetArticleRule} from "../../axios"

export default defineComponent({
	name: "ArticleListComponent",
	components: {
		TitleBarComponent,
		ArticleItemComponent,
		BulletinComponent,
		NewCommentComponent,
		SiteCountComponent,
		LabelComponent,
	},
	setup() {
		const route: RouteLocationNormalizedLoaded = useRoute()
		const pageTitle: Ref = ref(null)
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

		const paramsInit = () => {
			if (route.query.classify !== undefined) {
				articleParams.label = null
				articleParams.title = null
				articleParams.classify = Number(route.query.classify)
			} else if (route.query.label !== undefined) {
				articleParams.title = null
				articleParams.classify = null
				articleParams.label = Number(route.query.label)
			} else {
				articleParams.label = null
				articleParams.classify = null
				articleParams.title = route.query.title as string
			}
		}
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

		watch(route, (newValue) => {
			if (newValue.path === "/ArticleList") {
				paramsInit()
				articleGet()
				pageTitle.value = newValue.query.name
			}
		})
		onBeforeMount(() => {
			paramsInit()
			articleGet()
			pageTitle.value = route.query.name
		})
		return {route, pageTitle, articleTotal, articleData, ...toRefs(articleParams), pageChange}
	},
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
	border-radius: 4px;
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
