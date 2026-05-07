import HeadlessTippy from "@tippyjs/react/headless";
import Tippy from "@tippyjs/react";
import 'tippy.js/dist/tippy.css'; // optional for styling
import {ImageUp, ChevronLeft, Send, UserRoundPen, CirclePoundSterling, Settings, Globe, CircleHelp, Keyboard, LogOut} from "lucide-react";
import Image from "../../common/Image"
import Wrapper from "./Wrapper";
import { useState } from "react";

const Menulogin = ({setCurrentUser}) => {
    const [menuView, setMenuView] = useState("main");
        const languages = [
        "English",
        "Tiếng Việt",
        "한국어",
        "日本語",
        "Français",
        "Deutsch",
        "Español",
        "Português",
        "Русский",
        "العربية",
    ];

  return (
   <div className="flex items-center gap-4">
                        <Tippy 
                        trigger="mouseenter"
                        content="Upload video"
                        placement="bottom"
                        interactive
                        >
                        <button className="cursor-pointer">
                            <ImageUp size={20} />
                        </button>
                        </Tippy>
                       <Tippy 
                        interactive
                        placement="bottom"
                        trigger="mouseenter"
                        content="Messages">
                            <button className="cursor-pointer">
                                <Send size={20} />
                            </button>
                       </Tippy>
                        <HeadlessTippy
                            interactive
                            hideOnClick={false}
                            placement="bottom"
                            offset={[-90,15]}
                            delay={[0, 500]}
                            render={() => (
                                <Wrapper>
                                       {menuView === 'main' && 
                                        <div className="pr-2">
                                            <button className="flex w-full items-center gap-3 px-4 py-3 hover:bg-gray-100">
                                                <UserRoundPen size={20} />
                                                <span className="text-[18px] font-medium">Profile</span>
                                            </button>
                                            <button className="flex w-full items-center gap-3 px-4 py-3 hover:bg-gray-100">
                                                <CirclePoundSterling size={20} />
                                                <span className="text-[18px] font-medium">Get coins</span>
                                            </button>
                                            <button className="flex w-full items-center gap-3 px-4 py-3 hover:bg-gray-100">
                                                <Settings size={20} />
                                                <span className="text-[18px] font-medium">Profile</span>
                                            </button>
                                            <button onClick={() => setMenuView('language')}
                                            className="flex w-full items-center gap-3 px-4 py-3 hover:bg-gray-100">
                                                <Globe size={20} />
                                                <span className="text-[18px] font-medium">Language</span>
                                            </button>
                                            <button className="flex w-full items-center gap-3 px-4 py-3 hover:bg-gray-100">
                                                <CircleHelp size={20} />
                                                <span className="text-[18px] font-medium">Feedback and help</span>
                                            </button>
                                            <button className="flex w-full items-center gap-3 px-4 py-3 hover:bg-gray-100">
                                                <Keyboard size={20} />
                                                <span className="text-[18px] font-medium">Keyboard shortcuts</span>
                                            </button>
                                            <button onClick={() => setCurrentUser(false)}
                                            className="flex w-full items-center gap-3 px-4 py-3 hover:bg-gray-100 border-t-1 border-gray-300">
                                                <LogOut size={20} />
                                                <span className="text-[18px] font-medium">Log out</span>
                                            </button>
                                        </div>
                                       }

                                       {menuView === "language" && (
        <>
          {/* Header */}
          <div className="w-[238px]">
              <div className="flex items-center gap-3 border-b px-4 py-3">
                <button onClick={() => setMenuView("main")}>
                  <ChevronLeft size={22} />
                </button>
                <span className="text-[18px] font-semibold">Language</span>
              </div>
    
              {/* Language list */}
              <div className="max-h-[300px] overflow-y-auto">
                {languages.map((lang) => (
                  <button
                    key={lang}
                    className="w-full px-4 py-3 text-left text-[16px] hover:bg-gray-100"
                  >
                    {lang}
                  </button>
                ))}
              </div>
          </div>
        </>
      )}
                                </Wrapper>
                            )}
                        >
                       
                            <button className="cursor-pointer">
                                <Image src="/bus_driver.jpg" alt="Avatar"  />
                            </button>
                        </HeadlessTippy>
                        </div>
  )
}

export default Menulogin