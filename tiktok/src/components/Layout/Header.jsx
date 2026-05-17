import { useEffect, useState, useRef } from "react";
import Menulogin from "./Popper/Menulogin";
// import axios from 'axios';
import HeadlessTippy from "@tippyjs/react/headless";
// import Tippy from "@tippyjs/react";
import 'tippy.js/dist/tippy.css'; // optional for styling
import Wrapper from "./Popper/Wrapper";
import AccountItem from "../common/AccountItem";

import Menu from "./Popper/Menu";
import useDebounce from '../../hooks/useDebounce'
import { Link } from "react-router-dom";
import logo from '../../../public/images/TikTok_logo.svg.png'
import {Loader} from "lucide-react";

function Header() {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [currentUser, setCurrentUser] = useState(false);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    // Khi user ngừng gõ 500ms thì giá trị debounced mới đc updated
    const debounced = useDebounce(searchTerm, 500);
    const inputRef = useRef();

    const handleHideResult = () => {
        setShowResult(false)
    }

    const handleChange = (e) => 
        { 
            const searchValue = e.target.value;
            if(searchValue.startsWith(' ')) {
                return;
            }

            setSearchTerm(searchValue)
        }
       

    useEffect(() => {
    if(!debounced || !debounced.trim()) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setSearchResults([]);
        return;
    }

     setLoading(true)

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(users => {
            // lọc 
            const result = users.filter(user =>
                user.username.toLowerCase().includes(debounced.toLowerCase())
            );
            
            setLoading(false);
            setSearchResults(result);
        })
        .catch(() => {
            setLoading(false);
        });
    }, [debounced]); 


    return (
        <header>
            <div className="border-b-1 border-[#c7bfbf] h-[70px] top-0">
                <div className="container mx-auto px-10 h-full flex items-center justify-between">
                    <Link to="/" className="block shrink-0">
                        <img src={logo} alt="TikTok" className="w-40 h-auto" />
                    </Link>

                    <div className="relative">
                        <HeadlessTippy interactive={true}
                        placement="bottom"
                        visible={showResult && searchResults.length > 0} // điều kiện hiển thị tooltip khi có kết quả tìm kiếm
                            render={(attrs) => (
                                <div className="w-[25vw]" tabIndex="-1" {...attrs}>
                                    <Wrapper>
                                        <h4 className="text-gray-500 ml-2 font-semibold text-xl">Accounts</h4>
                                        {searchResults.map(result => (
                                            <AccountItem data={result} key={result.id} />
                                        ))}
                                    </Wrapper>
                                </div>
                         )} 
                        // Click ra ngoài ẩn cái trên này đi
                        onClickOutside={handleHideResult}

                        >
                            <input ref={inputRef}
                            type="text" placeholder="Search accounts and videos" spellCheck={false}
                            // pr-22 để khi gõ text dài thì không đè lên icon dấu X và icon kính lúp
                            className="w-[25vw] rounded-full bg-gray-100 px-4 py-2 pr-22 outline-none ring-1 ring-transparent text-stone-500
                            transition-all duration-200 focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 focus:ring-offset-white
                            " 
                            value={searchTerm} onChange={handleChange} 
                            onFocus={() => setShowResult(true)}
                            />
                        </HeadlessTippy>
                        
                        {searchTerm && !loading && (
                            <button className="absolute px-1 right-14 top-1/2 -translate-y-1/2 cursor-pointer" 
                            onClick={() => {
                                inputRef.current.focus();
                        // khi bấm dấu x thì dấu nhấp nháy focus vào ô input! 
                                setSearchTerm("");
                                setSearchResults([]);
                            }
                            }>
                                ❌
                            </button>
                        )}

                        { loading &&
                            <span className="absolute px-1 right-15 top-1/2 -translate-y-1/2 animate-spin">
                            <Loader size={20} />
                            </span>
                        }
                        
                        <span className="h-[26px] w-[1.5px] bg-gray-300 absolute right-12 top-[7.5px]"></span>

                        <HeadlessTippy interactive
                        placement="bottom"
                         render={(attrs) => (
                            <Wrapper>
                                <div className=" p-4" tabIndex="-1" {...attrs}>
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

                    {currentUser ? (
                        <Menulogin setCurrentUser={setCurrentUser} />
                    ) : (
                    <div className="-mr-[63px]">
                       <button className="bg-red-600 text-white rounded-xl py-2 px-3 text-xl font-semibold cursor-pointer hover:bg-[#ff0050] transition-colors duration-200"
                       onClick={() => setCurrentUser(true)}>
                        Log in
                       </button>
                        <Menu />
                    </div>
                    )
                    }
                </div>
            </div>
        </header>
    );
}

export default Header;