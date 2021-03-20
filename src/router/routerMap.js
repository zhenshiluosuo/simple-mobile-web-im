import Collect from "@pages/collect";
import ErrorPage from "@pages/error";
import Login from "@pages/login";
const routerMap = [
  { path: "/collect", name: "Collect", component: Collect, auth: true },
  { path: "/login", name: "Login", component: Login },
  { path: "/", name: "Collect", component: Collect, auth: true },
  { path: "/404", name: "404", component: ErrorPage },
]
export default routerMap