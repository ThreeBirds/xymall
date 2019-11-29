import Vue from "vue";
import VueRouter from "vue-router";
import Main from "@/views/Main.vue";
import Home from "@/views/Home/Home.vue";
import Classify from "@/views/Classify/Classify.vue";
import ClassifyResults from "@/components/Classify/ClassifyResults.vue";
import ProductDetail from "@/views/ProductDetail.vue";
import Cart from "@/views/Cart/Cart.vue";
import Me from "@/views/Me/Me.vue";

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
			},
			{
				path: "/cart",
				name: "cart",
				component: Cart
			},
			{
				path: "/me",
				name: "me",
				component: Me
			}
		]
	},
	{
		path: "/detail",
		name: "detail",
		component: ProductDetail
	}
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes
});

export default router
