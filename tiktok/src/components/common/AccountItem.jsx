import {BadgeCheck} from "lucide-react";
import { Link } from "react-router-dom";

function AccountItem({ data }) {
    return (
        <Link to={`/profile/${data.username}`} className="block">
            <div className="wrapper-account hover:bg-[#f8f8f8]">
                <img src="/bus_driver.jpg" alt="avatar" className="avatar" />

                <div className="infor">
                    <p className="name flex">
                        <span>{data.name}</span>
                        <BadgeCheck size={20} className="ml-2 text-blue-400 mt-0.5" />
                    </p>

                    <span className="username text-gray-500">
                        {data.username}
                    </span>
                </div>
            </div>
        </Link>
    );
}

export default AccountItem;