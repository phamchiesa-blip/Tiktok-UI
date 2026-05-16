import MenuSidebar from "./MenuSidebar";
import SuccessAcounts from "./SuccessAcounts";
import FollowingAccounts from "./FollowingAccounts";
function SideBar() {
    return ( 
      <>
        <div className="w-[20vw]">
           <MenuSidebar />
           <SuccessAcounts />
           <FollowingAccounts />
        </div>
      </>
      
     );
}

export default SideBar;