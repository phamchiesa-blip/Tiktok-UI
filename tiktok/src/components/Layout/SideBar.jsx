import MenuSidebar from "./MenuSidebar";
import SuccessAcounts from "./SuccessAcounts";
import FollowingAccounts from "./FollowingAccounts";
function SideBar() {
    return ( 
      <>
        <div className="w-[20vw] top-[70px] h-[calc(100vh-70px)] fixed overflow-y-auto">
           <MenuSidebar />
           <SuccessAcounts />
           <FollowingAccounts />
        </div>
      </>
      
     );
}

export default SideBar;