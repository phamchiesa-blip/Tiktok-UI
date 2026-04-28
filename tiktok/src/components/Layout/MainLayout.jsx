import SideBar from "./SideBar";
import RightPanel from "./RightPanel";

function MainLayout() {
    return ( 
        <div className="container mx-auto flex justify-between">
            <div className="">
                <SideBar />
            </div>
            <div className="">
                <RightPanel />
            </div>
        </div>
     );
}

export default MainLayout;