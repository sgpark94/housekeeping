import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const List = () => import("@/components/List.vue")
const Add = () => import("@/components/Add.vue")
const Detail = () => import("@/components/Detail.vue")

const routes = [
  {
    path: "/",
    name: "List",
    component: List
  },
  {
    path: "/add",
    name: "Add",
    component: Add
  },
  {
    path: "/detail",
    name: "Detail",
    component: Detail
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
