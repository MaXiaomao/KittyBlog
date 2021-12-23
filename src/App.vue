<template>
	<HeaderComponent />
	<router-view />
</template>

<script lang="ts">
import {defineComponent} from "vue"
import HeaderComponent from "./components/Header/index.vue"

export default defineComponent({
	name: "App",
	components: {HeaderComponent},
	setup() {},
})
</script>
