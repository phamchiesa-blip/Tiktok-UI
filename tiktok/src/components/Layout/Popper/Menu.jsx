import Wrapper from "./Wrapper";
import Button from "../../common/Button";
import HeadlessTippy from "@tippyjs/react/headless";
import { ChevronLeft, EllipsisVertical, Globe, CircleHelp, Keyboard } from "lucide-react";
import { useState } from "react";

function Menu() {
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
        <HeadlessTippy
                        interactive
                        placement="bottom-end"
                        delay={[0, 700]}
                        render={(attrs) => (
                        <Wrapper>
                              
                      <div className="pr-2 flex flex-col w-[300px]" tabIndex="-1" {...attrs}>
                                   
      {menuView === "main" && (
        <>
          <button
            onClick={() => setMenuView("language")}
            className="flex w-full items-center gap-3 px-4 py-3 hover:bg-gray-100"
          >
            <Globe size={20} />
            <span className="text-[18px] font-medium">English</span>
          </button>

          <button className="flex w-full items-center gap-3 px-4 py-3 hover:bg-gray-100">
            <CircleHelp size={20} />
            <span className="text-[18px] font-medium">Feedback and help</span>
          </button>

          <button className="flex w-full items-center gap-3 px-4 py-3 hover:bg-gray-100">
            <Keyboard size={20} />
            <span className="text-[18px] font-medium">Keyboard shortcuts</span>
          </button>
        </>
      )}

      {menuView === "language" && (
        <>
          {/* Header */}
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
        </>
      )}
                      </div>
                        </Wrapper>
                         )} 
        > 
                    <Button> <EllipsisVertical size={25} className="-mb-1"/></Button>
        </HeadlessTippy>
     );
}

export default Menu;
