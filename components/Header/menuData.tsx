import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  //   id: 33,
  //   title: "Event",
  //   path: "/events",
  //   newTab: false,
  // },
  // {
  {
    id: 3,
    title: "Nu Eta",
    path: "/NuEta",
    newTab: false,
  },
  {
    id: 4,
    title: "Nu Stars",
    path: "/Nustars",
    newTab: false,
  }
  ,
  {
    id: 5,
    title: "Events",
    path: "/events",
    newTab: false,
    submenu: [
      {
        id: 51,
      title: "Genesis",
      path: "/genesis",
      newTab: false,
      },
      {
        id: 52,
      title: "NEW EVENT",
      path: "/conclave",
      newTab: false,
      },
    ]
  },
  
  {
    id: 7,
    title: "Members",
    path: "/members",
    newTab: false
  },
  {
    id: 8,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
  // {
  //   id: 4,
  //   title: "Pages",
  //   newTab: false,
  //   submenu: [
  //     {
  //       id: 41,
  //       title: "About Page",
  //       path: "/about",
  //       newTab: false,
  //     },
  //     {
  //       id: 42,
  //       title: "Contact Page",
  //       path: "/contact",
  //       newTab: false,
  //     },
  //     {
  //       id: 43,
  //       title: "Event Grid Page",
  //       path: "/events",
  //       newTab: false,
  //     },
  //     {
  //       id: 44,
  //       title: "Event Sidebar Page",
  //       path: "/events-sidebar",
  //       newTab: false,
  //     },
  //     {
  //       id: 45,
  //       title: "Event Details Page",
  //       path: "/events-details",
  //       newTab: false,
  //     },
  //     {
  //       id: 46,
  //       title: "Sign In Page",
  //       path: "/signin",
  //       newTab: false,
  //     },
  //     {
  //       id: 47,
  //       title: "Sign Up Page",
  //       path: "/signup",
  //       newTab: false,
  //     },
  //     {
  //       id: 48,
  //       title: "Error Page",
  //       path: "/error",
  //       newTab: false,
  //     },
  //   ],
  // },
];
export default menuData;
