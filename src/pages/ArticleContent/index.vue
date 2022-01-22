<template>
	<div class="page-main version-heart">
		<article-component v-bind="bodyData" />
		<self-info-component class="margin-bot" />
		<div class="comment">
			<p class="title">共 0 条评论《{{ bodyData.title }}》</p>
			<div class="publish-block">
				<div class="publish-info">
					<strong>发表评论</strong>
					<span>昵称、邮箱为必填项，电子邮件地址不会被公开</span>
				</div>
				<comment-form-component />
			</div>
			<div class="comment-list">
				<comment-item-component :data="data" />
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import {defineComponent, onBeforeMount, Ref, ref} from "vue"
import {RouteLocationNormalizedLoaded, useRoute} from "vue-router"
import ArticleComponent from "../../components/Article/index.vue"
import SelfInfoComponent from "../../components/SelfInfo/index.vue"
import CommentFormComponent from "../../components/CommentForm/index.vue"
import CommentItemComponent from "../../components/CommentItem/index.vue"
import {getBody} from "../../axios"

export default defineComponent({
	name: "ArticleContentComponent",
	components: {ArticleComponent, SelfInfoComponent, CommentFormComponent, CommentItemComponent},
	setup() {
		const route: RouteLocationNormalizedLoaded = useRoute()
		const bodyData: Ref = ref({})
		const data = ref({
			id: 1,
			name: "小懒",
			time: "2020-10-12 19:00:00",
			body: "自建Gravatar加速了啊",
			reply: "",
			children: [
				{
					id: 2,
					name: "小茂",
					time: "2020-10-12 19:00:00",
					body: "自建Gravatar加速了啊",
					reply: "",
				},
				{
					id: 3,
					name: "小茂",
					time: "2020-10-12 19:00:00",
					body: "看报错，好像版本有问题，网上搜一下呢",
					reply: "自建Gravatar加速了啊",
				},
				{
					id: 4,
					name: "小茂",
					time: "2020-10-12 19:00:00",
					body: "自建Gravatar加速了啊",
					reply: "",
				},
			],
		})

		onBeforeMount(() => {
			getBody({id: Number(route.query.id)}).then((res) => {
				bodyData.value = res.data
			})
		})
		return {bodyData, data}
	},
})
</script>

<style scoped>
.comment {
	padding: 15px;
	border-radius: 4px;
	background-color: #ffffff;
}
.title {
	margin: 0 0 15px;
	text-align: center;
}
.publish-block {
	padding: 15px;
	border-radius: 4px;
	background-color: #ebeef5;
}
.publish-info strong {
	color: #303133;
	display: block;
	font-size: 14px;
	margin-bottom: 5px;
	font-weight: normal;
}
.publish-info span {
	color: #909399;
	display: block;
	font-size: 12px;
}
.margin-bot {
	margin-bottom: 15px;
}
</style>
