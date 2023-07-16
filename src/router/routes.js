const routes = [
  {
    path: "/",
    component: () => import("layouts/HomeLayout.vue"),
    children: [{ path: "", component: () => import("pages/HomePage.vue") }],
  },

  {
    path: "/character",
    component: () => import("layouts/CharacterLayout.vue"),
    children: [
      { path: ":id", component: () => import("pages/CharacterPage.vue") },
    ],
  },

  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
