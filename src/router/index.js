// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  // {
  //   path: "/",
  //   component: () => import("@/layouts/default/Default.vue"),
  //   children: [
  //     {
  //       path: "",
  //       name: "Home",
  //       // route level code-splitting
  //       // this generates a separate chunk (about.[hash].js) for this route
  //       // which is lazy-loaded when the route is visited.
  //       component: () =>
  //         import(/* webpackChunkName: "home" */ "@/views/Home.vue"),

  //       children: [
  //         {
  //           path: "/about",
  //           name: "About",
  //           component: () =>
  //             import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  //         },
  //       ],
  //     },
  //   ],
  // },

  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "contact" */ "@/views/HomeView.vue"),
  },

  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "contact" */ "@/views/AboutView.vue"),
  },

  {
    path: "/contact",
    name: "Contact",
    component: () =>
      import(/* webpackChunkName: "contact" */ "@/views/ContactMe.vue"),
  },
  {
    path: "/posts/:id",
    name: "Post",
    component: () =>
      import(/* webpackChunkName: "contact" */ "@/views/PostDetails.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),

  routes,
});

export default router;
