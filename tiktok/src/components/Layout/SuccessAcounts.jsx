import {CircleCheck} from "lucide-react";
import HeadlessTippy from "@tippyjs/react/headless";
import { useState } from "react";

const SuccessAcounts = () => {
    const [follow, setFollow] = useState("Follow");
    const handleFollow = () => {
        if(follow == 'Follow') {
            setFollow("Followed");
        } else if(follow == 'Followed') {
            setFollow("Follow");
        }
    }
  return (
    <>
    <h1 className="border-t-1 border-[#DCE0E3]"></h1>
        <h1 className="mt-2 text-[16px]">Suggest accounts</h1>

        <div className="flex flex-col items-center mt-3">

            <HeadlessTippy interactive={true}
                placement="bottom"
                delay={[800, 0]}
                render={(attrs) => (
                    <div className="w-[18vw] p-3 bg-sky-50 rounded-2xl shadow-lg" tabIndex="-1" {...attrs}>
                                <div className="flex justify-between">
                                    <img src="https://img-cache.coccoc.com/image2?i=2&l=27/344166311" alt="avatar" className="sidebarAvatar" />
                                    <button onClick={handleFollow}
                                    className="sidebar-btn">{follow}</button>
                                </div>
                                <h1 className="text-[15px] mt-2 font-semibold">Theanh28Entertaiment</h1>
                                <h1 className="text-[10px] font-normal">theanh28tiktok</h1>
                                <div className="flex justify-between">
                                    <p className="font-bold mt-2"> 20M
                                        {" "} <span className="font-normal">Followers</span>
                                    </p>
                                    <p className="font-bold mt-2"> 391M
                                       {" "} <span className="font-normal">Likes</span>
                                    </p>
                                </div>
                            </div>
                        )} 
                    >
                <div className="wrapper-account hover:bg-[#f8f8f8]">
                        <img src="https://img-cache.coccoc.com/image2?i=2&l=27/344166311" alt="avatar" className="sidebarAvatar" />
        
                        <div className="infor">
                            <p className="text-[15px] font-semibold flex">
                                <span>Theanh28Entertaiment</span>
                                <CircleCheck size={20} className="ml-2 text-blue-400 mt-0.5" />
                            </p>
        
                            <span className="text-[12px] text-gray-500">
                                theanh28tiktok
                            </span>
                        </div>
                </div>
            </HeadlessTippy>

           <HeadlessTippy interactive={true}
                placement="bottom"
                delay={[800, 0]}
                render={(attrs) => (
                    <div className="w-[18vw] p-3 bg-sky-50 rounded-2xl shadow-lg" tabIndex="-1" {...attrs}>
                                <div className="flex justify-between">
                                    <img src="https://files.fullstack.edu.vn/f8-prod/organization-logos/694743c405102.png" alt="avatar" className="sidebarAvatar" />
                                   <button onClick={handleFollow}
                                    className="sidebar-btn">{follow}</button>
                                </div>
                                <h1 className="text-[15px] mt-2 font-semibold">F8 FullStack</h1>
                                <h1 className="text-[10px] font-normal">f8.edu-fullstack👨‍💻</h1>
                                <div className="flex justify-between">
                                    <p className="font-bold mt-2"> 1.3M
                                        {" "} <span className="font-normal">Followers</span>
                                    </p>
                                    <p className="font-bold mt-2"> 34M
                                       {" "} <span className="font-normal">Likes</span>
                                    </p>
                                </div>
                            </div>
                        )} 
                    >
                <div className="wrapper-account hover:bg-[#f8f8f8]">
                        <img src="https://files.fullstack.edu.vn/f8-prod/organization-logos/694743c405102.png" alt="avatar" className="sidebarAvatar" />
        
                        <div className="infor">
                            <p className="text-[15px] font-semibold flex">
                                <span>F8 FullStack</span>
                                <CircleCheck size={20} className="ml-2 text-blue-400 mt-0.5" />
                            </p>
        
                            <span className="text-[12px] text-gray-500">
                                f8.edu-fullstack👨‍💻
                            </span>
                        </div>
                </div>
           </HeadlessTippy>

            <HeadlessTippy interactive={true}
                placement="bottom"
                delay={[800, 0]}
                render={(attrs) => (
                    <div className="w-[18vw] p-3 bg-sky-50 rounded-2xl shadow-lg" tabIndex="-1" {...attrs}>
                                <div className="flex justify-between">
                                    <img src="/7ta.jpg" alt="avatar" className="sidebarAvatar" />
                                    <button onClick={handleFollow}
                                    className="sidebar-btn">{follow}</button>
                                </div>
                                <h1 className="text-[15px] mt-2 font-semibold">LP Bank V League 1</h1>
                                <h1 className="text-[10px] font-normal"> VietnamFootballLeague</h1>
                                <div className="flex justify-between">
                                    <p className="font-bold mt-2"> 12.9M
                                        {" "} <span className="font-normal">Followers</span>
                                    </p>
                                    <p className="font-bold mt-2"> 55.2M
                                       {" "} <span className="font-normal">Likes</span>
                                    </p>
                                </div>
                            </div>
                        )} 
            >
                <div className="wrapper-account hover:bg-[#f8f8f8]">
                        <img src="/7ta.jpg" alt="avatar" className="sidebarAvatar" />
        
                        <div className="infor">
                            <p className="text-[15px] font-semibold flex">
                                <span>LP Bank V League 1</span>
                                <CircleCheck size={20} className="ml-2 text-blue-400 mt-0.5" />
                            </p>
        
                            <span className="text-[12px] text-gray-500">
                                VietnamFootballLeague
                            </span>
                        </div>
                </div>
            </HeadlessTippy>

           <HeadlessTippy interactive={true}
                placement="bottom"
                delay={[800, 0]}
                render={(attrs) => (
                    <div className="w-[18vw] p-3 bg-sky-50 rounded-2xl shadow-lg" tabIndex="-1" {...attrs}>
                                <div className="flex justify-between">
                                    <img src="https://www.hanu.vn/img/logo-256.png" alt="avatar" className="sidebarAvatar" />
                                    <button onClick={handleFollow}
                                    className="sidebar-btn">{follow}</button>
                                </div>
                                <h1 className="text-[15px] mt-2 font-semibold">Hanoi University</h1>
                                <h1 className="text-[10px] font-normal"> hanu.vn</h1>
                                <div className="flex justify-between">
                                    <p className="font-bold mt-2"> 8.5M
                                        {" "} <span className="font-normal">Followers</span>
                                    </p>
                                    <p className="font-bold mt-2"> 197.3M
                                       {" "} <span className="font-normal">Likes</span>
                                    </p>
                                </div>
                            </div>
                        )} 
            >
                <div className="wrapper-account hover:bg-[#f8f8f8]">
                        <img src="https://www.hanu.vn/img/logo-256.png" alt="avatar" className="sidebarAvatar" />
        
                        <div className="infor">
                            <p className="text-[15px] font-semibold flex">
                                <span>Hanoi University</span>
                                <CircleCheck size={20} className="ml-2 text-blue-400 mt-0.5" />
                            </p>
        
                            <span className="text-[12px] text-gray-500">
                                hanu.vn
                            </span>
                        </div>
                </div>
           </HeadlessTippy>
        </div>

        <span className="font-normal text-gray-500 cursor-pointer">See more ...</span>
    </>
  )
}

export default SuccessAcounts