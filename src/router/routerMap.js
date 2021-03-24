import MainView from '@pages/mainView'
import ErrorPage from "@pages/error";
import Login from "@pages/login";
const routerMap = [
  { path: "/mainView", name: "MainView", component: MainView, auth: true },
  { path: "/mainView/collections", name: "Collections",  auth: true },
  { path: "/mainView/collections/chat", name: "Chat",  auth: true },
  { path: "/mainView/friends", name: "Friends", auth: true },
  { path: "/mainView/groups", name: "Groups", auth: true },
  { path: "/mainView/home", name: "Home", auth: true },
  { path: "/login", name: "Login", component: Login },
  { path: "/404", name: "404", component: ErrorPage },
]
export default routerMap
