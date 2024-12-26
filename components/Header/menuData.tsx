import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Trang chủ",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "Về chúng tôi",
    newTab: false,
    path: "/about-us",
  },
  {
    id: 2.1,
    title: "Lĩnh vực chính",
    newTab: false,
    path: "/main",
    // submenu: [
    //   {
    //     id: 31,
    //     title: "Kế toán",
    //     newTab: false,
    //     path: "/blog",
    //   },
    //   {
    //     id: 34,
    //     title: "Kiểm toán",
    //     newTab: false,
    //     path: "/auth/signin",
    //   }
    // ],
  },
  {
    id: 2.3,
    title: "Tin tức",
    newTab: false,
    path: "/blog",
  },
  {
    id: 3,
    title: "Liên hệ",
    newTab: false,
    path: "/contact",
  },

  {
    id: 4,
    title: "Tuyển dụng",
    newTab: false,
    path: "/support",
  },
];

export default menuData;
