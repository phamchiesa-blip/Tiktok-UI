import { useParams } from "react-router-dom"
import Header from "../Layout/Header";

const Profile = () => {
    const {username} = useParams();
  return (
    <>
    < Header />
    <div>Profile: 
        {username}
    </div>
    </>
    
  )
}

export default Profile