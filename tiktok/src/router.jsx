import Home from "./components/pages/Home";
import Profile from "./components/pages/Profile";
import Following from '../src/components/pages/Following'
import Live from '../src/components/pages/Live'

const publicRoutes = [
    {path: "/", component: Home},
    {path: "/profile/:username", component: Profile},
    {path: "/follow", component: Following},
    {path: "/live", component: Live},
]

export default publicRoutes;