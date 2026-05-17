import Feed from "../pages/Feed";

function RightPanel() {
    return ( 
        <div className="w-[70vw] top-[70px] h-[calc(100vh-70px)] overflow-y-auto flex justify-center">
            <Feed />
        </div>
     );
}

export default RightPanel;