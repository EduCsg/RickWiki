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
      {
        path: ":id",
        component: () => import("pages/CharacterPage.vue"),

        beforeEnter: (to, _, next) => {
          const characterId = Number(to.params.id);

          if (!characterId || characterId < 1 || characterId > 826) {
            next({ path: "/character/1" });

            return;
          }

          next();
        },
      },
    ],
  },

  {
    path: "/episodes",
    component: () => import("layouts/HomeLayout.vue"),
    children: [
      { path: "", component: () => import("pages/EpisodesPage.vue") },
      // { path: ":id", component: () => import("pages/EpisodesPage.vue") },
    ],
  },

  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
