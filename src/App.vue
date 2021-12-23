<template>
	<HeaderComponent />
	<router-view />
	<FooterComponent />
</template>

<script lang="ts">
import {defineComponent} from "vue"
import HeaderComponent from "./components/Header/index.vue"
import FooterComponent from "./components/Footer/index.vue"

export default defineComponent({
	name: "App",
	components: {HeaderComponent, FooterComponent},
	setup() {},
})
</script>
