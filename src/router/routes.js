const routes = [
  {
    path: "/",
    component: () => import("layouts/HomeLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/HomePage.vue"),

        beforeEnter: (to, _, next) => {
          const pageQuery = Number(to.query.page);

          if (!pageQuery || pageQuery < 1 || pageQuery > 42) {
            next({ path: "/", query: { page: 1 } });

            return;
          }

          next();
        },
      },
    ],
  },

  {
    path: "/character",
    component: () => import("layouts/HomeLayout.vue"),
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
