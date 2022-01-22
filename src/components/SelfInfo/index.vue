<template>
	<div class="self-info">
		<el-image class="m-image" :src="Avatar" fit="cover"></el-image>
		<div class="author">
			<div class="text">
				<div class="name">作者：马小茂</div>
				<p>一个不会英语的程序员。</p>
			</div>
			<div class="hue-url">
				<a href="https://github.com/MaXiaomao" target="_blank">
					<svg class="m-icon" aria-hidden="true">
						<use xlink:href="#icon-github"></use>
					</svg>
				</a>
				<el-popover placement="top" trigger="hover" popper-class="m-popover" :append-to-body="false">
					<template #reference>
						<a href="javascript:">
							<svg class="m-icon" aria-hidden="true">
								<use xlink:href="#icon-qq"></use>
							</svg>
						</a>
					</template>
					<div class="popover-content">
						<el-image :src="QQImage" style="width: 150px; height: 150px" fit="cover"></el-image>
						<span>2357296800</span>
					</div>
				</el-popover>
				<el-popover placement="top" trigger="hover" popper-class="m-popover" :append-to-body="false">
					<template #reference>
						<a href="javascript:">
							<svg class="m-icon" aria-hidden="true">
								<use xlink:href="#icon-wechat"></use>
							</svg>
						</a>
					</template>
					<div class="popover-content">
						<el-image :src="WeChatImage" style="width: 150px; height: 150px" fit="cover"></el-image>
						<span>V2357296800</span>
					</div>
				</el-popover>
				<a href="mailto:maxiaomaoeamil@gmail.com" target="_blank">
					<svg class="m-icon" aria-hidden="true">
						<use xlink:href="#icon-gmail"></use>
					</svg>
				</a>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import {defineComponent} from "vue"
import Avatar from "../../config/image/avatar.jpg"
import QQImage from "../../config/image/QQ.jpg"
import WeChatImage from "../../config/image/we-chat.jpg"

export default defineComponent({
	name: "SelfInfoComponent",
	setup() {
		return {Avatar, QQImage, WeChatImage}
	},
})
</script>

<style scoped>
.self-info {
	display: flex;
	padding: 15px;
	border-radius: 4px;
	background-color: #ffffff;
}
.m-image {
	width: 100px;
	height: 100px;
	border-radius: 4px;
	margin-right: 15px;
}
.author {
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
}
.author .name {
	color: #303133;
	line-height: 1;
	padding-top: 3px;
	margin-bottom: 5px;
	padding-bottom: 10px;
	border-bottom: solid 1px #dcdfe6;
}
.author p {
	color: #909399;
	font-size: 14px;
	margin: 0 0 5px;
}
.hue-url {
	display: flex;
	align-items: center;
}
.hue-url a {
	width: 30px;
	height: 30px;
	display: flex;
	cursor: pointer;
	border-radius: 4px;
	margin-right: 10px;
	align-items: center;
	justify-content: center;
	background-color: #ebeef5;
}
.hue-url .m-icon {
	width: 18px;
	height: 18px;
}
.popover-content {
	width: 100%;
	display: flex;
	align-items: center;
	flex-direction: column;
}
.popover-content span {
	margin-top: 5px;
}
/deep/ .m-popover {
	box-sizing: content-box;
}
</style>
