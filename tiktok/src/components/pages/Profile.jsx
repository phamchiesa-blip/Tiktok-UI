import { useParams } from "react-router-dom"
import Header from "../Layout/Header";
import SideBar from '../Layout/SideBar'
import HeaderProfile from "../Layout/HeaderProfile";
import ContentProfile from "../Layout/ContentProfile";

const Profile = () => {
    const {username} = useParams();
  return (
    <>
    < Header />

    <div className="container mx-auto px-10 flex justify-between">
      <div className="">
        <SideBar />
      </div>

     <div className="flex flex-col">
       <div className="w-[62vw] flex justify-between">
        <HeaderProfile>
           {username}
        </HeaderProfile>
       </div>

       <div className="mt-10">
      <ContentProfile />
        </div>
     </div>
    </div>

    </>
    
  )
}

export default Profile