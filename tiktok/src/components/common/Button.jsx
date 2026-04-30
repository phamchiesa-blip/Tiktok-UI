import {Link} from "react-router-dom";

function Button({
    to, href, onClick, primary, children, 
    small, large, text, disabled, rounded, 
    ...pasprops}
    ) 
    {
    let Comp = "button";
    const props = {onClick, ...pasprops};

    if(disabled) {
        // delete props.onClick;
        Object.keys(props).forEach(key => {
            if (key.startsWith("on") && typeof props[key] === "function") {
                delete props[key];
            }   
        })
    }

    if (to) {
        Comp = Link;
        props.to = to;
    } else if (href) {
        Comp = "a";
        props.href = href;
    }

    props.onClick = onClick;

    return ( 
       <Comp {...props} {...pasprops} 
    //    ...pasprops để truyền các props còn lại vào component
       className={`wrapper-btn 
        ${disabled ? 'cursor-not-allowed opacity-50' : ''}
        ${rounded ? 'rounded-full shadow-2xl border border-gray-300 hover:bg-[#e0d7daf0] hover:border-[#efc1d1]' : ''}
        ${text ? 'hover:underline' : ''}
        ${small ? 'min-w-[88px] py-[4px] px-[16px]' : ''}
        ${large ? 'min-w-[140px] py-[14px] px-[16px]' : ''}
        ${primary ? 'bg-[#ff0050] text-white rounded-xl' : ''}`
       }>
        {children}
       </Comp>
     );

}

export default Button;