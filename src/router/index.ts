import Vue from "vue";
import VueRouter from "vue-router";
import Main from "@/views/Main.vue";
import Home from "@/views/Home/Home.vue";
import Classify from "@/views/Classify/Classify.vue";
import ClassifyResults from "@/components/Classify/ClassifyResults.vue";
Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "main",
		component: Main,
		redirect: "/home",
		children: [
			{
				path: "/home",
				name: "home",
				component: Home
			},
			{
				path: "/classify",
				name: "classify",
				component: Classify,
				children: [
					{
						path: "/classify/classifyResults",
						name: "classifyResults",
						component: ClassifyResults
					}
				]
			}
		]
	}
]

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes
})

export default router
