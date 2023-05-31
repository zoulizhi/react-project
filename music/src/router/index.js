import LZDiscover from "@/pages/discover";
import LZFriend from "@/pages/friend";
import LZMine from "@/pages/mine";
const routes = [
  {
    path: "/",
    component: LZDiscover,
    exact: true,
  },
  {
    path: "/friend",
    component: LZFriend,
    exact: true,
  },
  {
    path: "/mine",
    component: LZMine,
    exact: true,
  },
];

export default routes;
