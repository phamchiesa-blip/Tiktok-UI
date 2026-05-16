import {House, UserPlus, Video} from "lucide-react";
import { NavLink } from "react-router-dom";

const MenuSidebar = () => {
  return (
    <div className="flex mx-5 flex-col mt-1">
      
        <NavLink to="/"
         className={({ isActive }) =>
        `flex items-center gap-3 p-2 text-xl font-semibold sidebarHover
        ${isActive ? "text-red-500" : "text-black"}`
    }
        >
            <div className="flex  justify-start">
                <House size={20} className="mt-1 ml-3"/>
                <h1 className="ml-2">For you</h1>
            </div>
        </NavLink>
        
        <NavLink to="/follow"
         className={({ isActive }) =>
        `flex items-center gap-3 p-2 text-xl font-semibold sidebarHover
        ${isActive ? "text-red-500" : "text-black"}`
    }
        >
            <div className="flex  justify-start">
                <UserPlus size={20} className="mt-1 ml-3"/>
                <h1 className="ml-2">Following</h1>
            </div>
        </NavLink>

        <NavLink to="/live"
         className={({ isActive }) =>
        `flex items-center gap-3 p-2 mb-1 text-xl font-semibold sidebarHover
        ${isActive ? "text-red-500" : "text-black"}`
    }
        >
            <div className="flex  justify-start">
                <Video size={20} className="mt-1 ml-3"/>
                <h1 className="ml-2">LIVE</h1>
            </div>
        </NavLink>
    </div>
  )
}

export default MenuSidebar