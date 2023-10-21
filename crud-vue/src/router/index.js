import { createRouter, createWebHistory } from "vue-router";

import TutorialItem from "../views/TutorialItem.vue";
import TutorialsList from "../views/TutorialsList.vue";
import AddTutorial from "../views/AddTutorial.vue";

const routes = [
  {
    path: "/tutorials/:id",
    name: "tutorial",
    component: TutorialItem,
  },
  {
    path: "/tutorials",
    name: "tutorials",
    component: TutorialsList,
  },
  {
    path: "/add",
    name: "add",
    component: AddTutorial,
  },
  {
    path: "/",
    redirect: "/tutorials",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
