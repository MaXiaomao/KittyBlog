<template>
	<el-form class="comment-form" :model="form" ref="form">
		<el-form-item class="margin-bot">
			<el-input v-model="form.name" :rows="5" type="textarea" placeholder="留下你的脚印吧~" />
		</el-form-item>
		<div class="flex-info">
			<el-row :gutter="15">
				<el-col :lg="8">
					<el-form-item>
						<el-input v-model="form.name" size="medium" placeholder="必填">
							<template #prepend>昵称</template>
						</el-input>
					</el-form-item>
				</el-col>
				<el-col :lg="8">
					<el-form-item>
						<el-input v-model="form.name" size="medium" placeholder="必填">
							<template #prepend>邮箱</template>
						</el-input>
					</el-form-item>
				</el-col>
				<el-col :lg="8">
					<el-form-item>
						<el-input v-model="form.name" size="medium" placeholder="选填">
							<template #prepend>网址</template>
						</el-input>
					</el-form-item>
				</el-col>
			</el-row>
			<div>
				<el-button v-if="clickDelete" @click="clickDelete" size="medium" :icon="Delete"></el-button>
				<el-button size="medium" type="primary" :icon="Promotion">提交</el-button>
			</div>
		</div>
	</el-form>
</template>

<script lang="ts">
import {defineComponent, reactive} from "vue"
import {Promotion, Delete} from "@element-plus/icons-vue"

export default defineComponent({
	name: "CommentFormComponent",
	props: ["clickDelete"],
	setup() {
		const form = reactive({
			name: "234432",
		})

		return {form, Promotion, Delete}
	},
})
</script>

<style scoped>
.comment-form {
	margin-top: 10px;
}
.el-form-item {
	margin-bottom: 0;
}
.flex-info {
	display: flex;
	align-items: start;
	justify-content: space-between;
}
.margin-bot {
	margin-bottom: 10px;
}
@media (max-width: 1200px) {
	.flex-info {
		flex-direction: column;
	}
}
</style>
