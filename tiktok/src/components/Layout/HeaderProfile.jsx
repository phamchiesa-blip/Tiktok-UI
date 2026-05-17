import { useState } from "react";
import {UserPlus, Share, EllipsisVertical } from "lucide-react";

const HeaderProfile = ({children}) => {
     const [follow, setFollow] = useState("Follow");
        const handleFollow = () => {
            if(follow == 'Follow') {
                setFollow("Followed");
            } else if(follow == 'Followed') {
                setFollow("Follow");
            }
        }
  return (
    <div className="flex mt-[20px]">
        <img src="/bus_driver.jpg" alt="avatar" className="profile_avatar" />
        <div className="flex flex-col">
            <h1 className="text-xl font-semibold -mt-2">{children}</h1>

            <div className="flex gap-4">
                <p className="font-bold">13 {" "} <span className="font-normal">Followed</span></p>
                <p className="font-bold">146.2K {" "} <span className="font-normal">Follower</span></p>
                <p className="font-bold">5.1M {" "} <span className="font-normal">Like</span></p>
            </div>

            <div className="flex gap-4 mt-2">
                <button onClick={handleFollow} className="sidebar-btn">
                    {follow}
                </button>
                <button className="sidebar-btn">
                    Mess 
                </button>
                <UserPlus className="text-gray-600 cursor-pointer" />
                <Share className="text-gray-600 cursor-pointer" />
                <EllipsisVertical className="text-gray-600 cursor-pointer" />
            </div>
            <div className="mt-2">
                <p className="text-[12px] text-gray-400">I like simple lifestyle 🤩 <br />
                    and green public transport 🚏🚌</p>
            </div>
        </div>
        
    </div>
  )
}

export default HeaderProfile