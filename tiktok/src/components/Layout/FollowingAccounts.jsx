import {CircleCheck} from "lucide-react";

const FollowingAccounts = () => {
  return (
    <>
    <h1 className="border-t-1 border-[#DCE0E3]"></h1>
        <h1 className="mt-2 text-[16px]">Following accounts</h1>
        <div className="flex flex-col items-center mt-3">
            <div className="wrapper-account hover:bg-[#f8f8f8]">
                    <img src="	https://img-cache.coccoc.com/image2?i=1&l=1/344352670" alt="avatar" className="sidebarAvatar" />
    
                    <div className="infor">
                        <p className="text-[15px] font-semibold flex">
                            <span>Vinbus</span>
                            <CircleCheck size={20} className="ml-2 text-blue-400 mt-0.5" />
                        </p>
    
                        <span className="text-[12px] text-gray-500">
                            vinbushanoi
                        </span>
                    </div>
            </div>
            <div className="wrapper-account hover:bg-[#f8f8f8]">
                    <img src="https://img-cache.coccoc.com/image2?i=1&l=79/150084738" alt="avatar" className="sidebarAvatar" />
    
                    <div className="infor">
                        <p className="text-[15px] font-semibold flex">
                            <span>CGV</span>
                            <CircleCheck size={20} className="ml-2 text-blue-400 mt-0.5" />
                        </p>
    
                        <span className="text-[12px] text-gray-500">
                           cgv.cinema.vie
                        </span>
                    </div>
            </div>
            <div className="wrapper-account hover:bg-[#f8f8f8]">
                    <img src="	https://img-cache.coccoc.com/v2/favicon?hosts=lms.…edu.vn,www.appbrain.com,daihoc.fpt.edu.vn&size=32" alt="avatar" className="sidebarAvatar" />
    
                    <div className="infor">
                        <p className="text-[15px] font-semibold flex">
                            <span>FIT HANU</span>
                            <CircleCheck size={20} className="ml-2 text-blue-400 mt-0.5" />
                        </p>
    
                        <span className="text-[12px] text-gray-500">
                            cntt.hanu
                        </span>
                    </div>
            </div>
            <div className="wrapper-account hover:bg-[#f8f8f8]">
                    <img src="https://img-cache.coccoc.com/image2?i=2&l=22/338941933" alt="avatar" className="sidebarAvatar" />
    
                    <div className="infor">
                        <p className="text-[15px] font-semibold flex">
                            <span>Vinfast</span>
                            <CircleCheck size={20} className="ml-2 text-blue-400 mt-0.5" />
                        </p>
    
                        <span className="text-[12px] text-gray-500">
                            vinfastVietnam-tiktok
                        </span>
                    </div>
            </div>
        </div>

        <span className="font-normal text-gray-500 cursor-pointer">See more ...</span>
    </>
  )
}

export default FollowingAccounts