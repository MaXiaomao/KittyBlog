<template>
	<div class="page-main version-heart">
		<div class="grid-left">
			<banner-component class="m-banner" />
		</div>
		<div class="grid-right">right</div>
	</div>
</template>

<script lang="ts">
import {defineComponent} from "vue"
import BannerComponent from "../../components/Banner/index.vue"

export default defineComponent({
	name: "HomeComponent",
	components: {BannerComponent},
	setup() {},
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
</style>
