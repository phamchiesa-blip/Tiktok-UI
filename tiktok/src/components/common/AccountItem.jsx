

function AccountItem() {
    return ( 
        <div className="wrapper-account hover:bg-[#f8f8f8]">
            <img src="Icon-VinBus-1.png" alt="" className="avatar" />
            <div className="infor">
               <p className="name">
                <span>Nguyen Van B</span>
                <span className="ml-2">✔️</span>
                </p>
               <span className="username text-gray-500">bnguyen</span>
            </div>
        </div>
     );
}

export default AccountItem;