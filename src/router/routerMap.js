import Collections from "@pages/collections";
import ErrorPage from "@pages/error";
import Login from "@pages/login";
const routerMap = [
  { path: "/collections", name: "Collections", component: Collections, auth: true },
  { path: "/login", name: "Login", component: Login },
  { path: "/", name: "Collections", component: Collections, auth: true },
  { path: "/404", name: "404", component: ErrorPage },
]
export default routerMap
