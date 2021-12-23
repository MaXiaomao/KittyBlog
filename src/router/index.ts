import {createRouter, createWebHashHistory, RouteRecordRaw} from "vue-router"

const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		name: "index",
		component: () => import("../pages/Home/index.vue"),
	},
	{
		path: "/ArticleList",
		name: "ArticleList",
		component: () => import("../pages/ArticleList/index.vue"),
	},
]

const router = createRouter({
	history: createWebHashHistory(),
	routes,
})

export default router
