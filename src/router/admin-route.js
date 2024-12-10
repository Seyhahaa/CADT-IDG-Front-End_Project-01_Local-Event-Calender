export default [
  {
    path: "dashboard",
    name: "dashboard",
    component: () => import("@/views/admin/Dashboard.vue"),
  },
  {
    path: "events",
    children: [
      {
        path: "",
        name: "events",
        component: () => import("@/views/admin/events/Events.vue"),
      },
      {
        path: "create",
        name: "EventCreate",
        component: () => import("@/views/admin/events/EventForm.vue"),
      },
      {
        path: ":id/edit",
        name: "EventEdit",
        component: () => import("@/views/admin/events/EventForm.vue"),
      },
      {
        path: ":id",
        name: "EventDetail",
        component: () => import("@/views/admin/events/EventDetail.vue"),
      },
    ],
  },
  {
    path: "calendar",
    name: "calendar",
    component: () => import("@/views/admin/Calendar.vue"),
  },
  {
    path: "reports",
    name: "reports",
    component: () => import("@/views/admin/Reports.vue"),
  },
  {
    path: "settings",
    name: "settings",
    component: () => import("@/views/admin/Settings.vue"),
  },
  // {
  //     path: 'profile',
  //     name: 'profile',
  //     component: () => import('@/views/admin/users/Profile.vue'),
  // },
];
