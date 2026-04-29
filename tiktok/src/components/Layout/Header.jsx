import { useState } from "react";

function Header() {
    const [searchTerm, setSearchTerm] = useState("");
    
    return (
        <header>
            <div className="border-t-2 border-b-1 border-[#c7bfbf] h-[70px]">
                <div className="container mx-auto h-full flex items-center justify-between">
                    <div className="">
                        <img src="TikTok_logo.svg.png" alt="" className="w-40 h-auto" />
                    </div>

                    <div className="relative">
                        <input type="text" placeholder="Search accounts and videos" spellCheck={false}
                        className="w-[25vw] rounded-full bg-gray-100 px-4 py-2 pr-10 outline-none ring-1 ring-transparent text-stone-500
                        transition-all duration-200 focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 focus:ring-offset-white
                        " 
                        value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                        
                        {searchTerm && (
                            <button className="absolute px-1 right-14 top-1/2 -translate-y-1/2 cursor-pointer" 
                            onClick={() => setSearchTerm("")}>
                                ❌
                            </button>
                        )}
                        
                        {/* <span className="absolute px-1 right-15 top-1/2 -translate-y-1/2 cursor-pointer">
                        <img src="/load.png" alt="" className="w-5 h-5" />
                        </span>  */}
                        
                        <span className="h-[26px] w-[1.5px] bg-gray-300 absolute right-12 top-[7.5px]"></span>
                        <button className="absolute px-1 right-3 top-1/2 -translate-y-1/2 cursor-pointer hover:scale-105 duration-200">🔍</button>
                    </div>

                    <div className="">
                        <button className="bg-[#ff0050] text-white px-4 py-2 rounded-full hover:bg-[#ff0050]/80">
                            Upload
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;