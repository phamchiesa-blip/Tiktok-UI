import Button from "../../common/Button";

function MenuItem({data, onClick}) {
    return ( 
        <Button hover
        leftIcon={data.icon}
        onClick={onClick}>
            {data.title}
        </Button>
     );
}

export default MenuItem;