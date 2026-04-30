import { useEffect, useState } from "react";
import HeadlessTippy from "@tippyjs/react/headless";
import Wrapper from "./Popper/Wrapper";
import AccountItem from "../common/AccountItem";
import Button from "../common/Button";

function Header() {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResults([]);
        }, 0);
    }
    , [searchTerm]);  

    return (
        <header>
            <div className="border-t-2 border-b-1 border-[#c7bfbf] h-[70px]">
                <div className="container mx-auto h-full flex items-center justify-between">
                    <div className="">
                        <img src="TikTok_logo.svg.png" alt="" className="w-40 h-auto" />
                    </div>

                    <div className="relative">
                        <HeadlessTippy interactive={true}
                        placement="bottom"
                        visible={searchResults.length > 0} // điều kiện hiển thị tooltip khi có kết quả tìm kiếm
                            render={(attrs) => (
                                <div className="w-[25vw]" tabIndex="-1" {...attrs}>
                                    <Wrapper>
                                        <h4 className="text-gray-500 ml-2 font-semibold text-xl">Accounts</h4>
                                        <AccountItem />
                                        <AccountItem />
                                        <AccountItem />
                                        <AccountItem />
                                    </Wrapper>
                                </div>
                         )} 
                        >
                            <input type="text" placeholder="Search accounts and videos" spellCheck={false}
                            className="w-[25vw] rounded-full bg-gray-100 px-4 py-2 pr-10 outline-none ring-1 ring-transparent text-stone-500
                            transition-all duration-200 focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 focus:ring-offset-white
                            " 
                            value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                        </HeadlessTippy>
                        
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

                        <HeadlessTippy interactive
                        placement="bottom"
                         render={(attrs) => (
                            <Wrapper>
                                <div className="bg-white rounded-lg shadow-lg p-4" tabIndex="-1" {...attrs}>
                                    <p className="text-gray-500">No results found.</p>
                                </div>
                            </Wrapper>
                         )} 
                        >
                            <button className="absolute px-1 right-3 top-1/2 -translate-y-1/2 cursor-pointer">
                            🔍
                            </button>
                        </HeadlessTippy>
                    </div>

                    <div className="actions">
                        <Button text>Upload</Button>
                        <Button primary> 
                        {/* Thêm target="_blank" để mở trong tab mới */}
                            Log in
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;