<template>
	<div class="comment-item">
		<div class="info">
			<el-avatar class="m-avatar" :size="50">{{ data.name[0] }}</el-avatar>
			<div class="text">
				<strong>{{ data.name }}</strong>
				<p>
					<em>{{ data.time }}</em>
					<span @click="replyBtn(data.id)">
						<el-icon><chat-dot-square /></el-icon><i>回复</i>
					</span>
				</p>
			</div>
		</div>
		<div class="content">
			<div class="body">
				{{ data.body }}
				<p v-if="data.reply !== ''">{{ data.reply }}</p>
				<comment-form-component v-if="commentFormShowId === data.id" :clickDelete="replyDelete" />
			</div>
			<div class="reply-list">
				<comment-item-component v-for="(v, i) in data.children" :data="v" :key="i" />
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import {defineComponent, ref, onBeforeMount, onBeforeUnmount} from "vue"
import PubSub from "pubsub-js"
import {ChatDotSquare} from "@element-plus/icons-vue"
import CommentFormComponent from "../CommentForm/index.vue"

export default defineComponent({
	name: "CommentItemComponent",
	components: {ChatDotSquare, CommentFormComponent},
	props: ["data"],
	setup() {
		const commentFormShowId = ref(0)

		const replyBtn = (showId: number) => {
			PubSub.publish("commentFormShowId", showId)
		}
		const replyDelete = () => {
			commentFormShowId.value = 0
		}

		onBeforeMount(() => {
			PubSub.subscribe("commentFormShowId", (msg: string, value: number) => {
				commentFormShowId.value = value
			})
		})
		onBeforeUnmount(() => {
			PubSub.unsubscribe("commentFormShowId")
		})

		return {commentFormShowId, replyBtn, replyDelete}
	},
})
</script>

<style scoped>
.comment-item {
	padding-top: 15px;
}
.info {
	display: flex;
	margin-bottom: 10px;
	align-items: stretch;
}
.info .m-avatar {
	font-size: 22px;
	font-weight: bold;
}
.text {
	display: flex;
	margin-left: 10px;
	flex-direction: column;
	justify-content: space-around;
}
.info strong {
	color: #303133;
	font-weight: normal;
}
.info p {
	margin: 0;
	display: flex;
	color: #909399;
	line-height: 1;
	font-size: 14px;
	align-items: center;
}
.info em {
	font-style: normal;
}
.info .text span {
	display: flex;
	margin-left: 5px;
	align-items: center;
}
.info .text span:hover {
	color: #409eff;
	cursor: pointer;
}
.info i {
	margin-left: 3px;
	font-style: normal;
}
.content {
	padding-left: 60px;
}
.body {
	padding: 15px;
	color: #606266;
	font-size: 14px;
	border-radius: 4px;
	background-color: #ebeef5;
}
.body p {
	padding: 15px;
	margin: 10px 0 0;
	border-radius: 4px;
	background-color: #ffffff;
}
</style>
