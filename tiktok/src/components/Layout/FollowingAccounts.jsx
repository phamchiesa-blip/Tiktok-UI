import {CircleCheck} from "lucide-react";

const FollowingAccounts = () => {
  return (
    <>
    <h1 className="border-t-1 border-[#DCE0E3]"></h1>
        <h1 className="mt-2 text-[16px]">Following accounts</h1>
        <div className="flex flex-col items-center mt-3">
            <div className="wrapper-account hover:bg-[#f8f8f8]">
                    <img src="/Icon-VinBus-1.png" alt="avatar" className="sidebarAvatar" />
    
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
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQThXRhcD0TfQpARpF_GWzgqYWDt2nKRcvOiXLSzXfRAg&s" alt="avatar" className="sidebarAvatar" />
    
                    <div className="infor">
                        <p className="text-[15px] font-semibold flex">
                            <span>Cristiano Ronaldo</span>
                            <CircleCheck size={20} className="ml-2 text-blue-400 mt-0.5" />
                        </p>
    
                        <span className="text-[12px] text-gray-500">
                           cr7🐐
                        </span>
                    </div>
            </div>
            <div className="wrapper-account hover:bg-[#f8f8f8]">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsU6Y5KgMBm6gorzQ0y_mBDBrkoqsnMysmdz0HNNEWkw&s" alt="avatar" className="sidebarAvatar" />
    
                    <div className="infor">
                        <p className="text-[15px] font-semibold flex">
                            <span>Lionel Messi</span>
                            <CircleCheck size={20} className="ml-2 text-blue-400 mt-0.5" />
                        </p>
    
                        <span className="text-[12px] text-gray-500">
                            pessi🤡
                        </span>
                    </div>
            </div>
            <div className="wrapper-account hover:bg-[#f8f8f8]">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc5Y82E2wY71l-xMRVI2XVD5KVaT65aarrPg&s" alt="avatar" className="sidebarAvatar" />
    
                    <div className="infor">
                        <p className="text-[15px] font-semibold flex">
                            <span>Fifa Son</span>
                            <CircleCheck size={20} className="ml-2 text-blue-400 mt-0.5" />
                        </p>
    
                        <span className="text-[12px] text-gray-500">
                            messex.fifason
                        </span>
                    </div>
            </div>
        </div>

        <span className="font-normal text-gray-500 cursor-pointer">See more ...</span>
    </>
  )
}

export default FollowingAccounts