import Home from "./components/pages/Home";
import Profile from "./components/pages/Profile";

const publicRoutes = [
    {path: "/", component: Home},
    {path: "/profile/:username", component: Profile}
]

export default publicRoutes;