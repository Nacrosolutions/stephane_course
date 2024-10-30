import { ReactNode } from "react";

type ChildProps= {
    color:string;
    handleClick:()=>void;
    children ?:ReactNode

}

export const Child=({color,handleClick,children}:ChildProps)=>{
    return( 
    <div>
    <h1>Hi There {color}</h1>
    <p>{children}</p>
    <button onClick={handleClick}>Click Me</button>
    </div>
    )
}



export const ChildAsFC:React.FC<ChildProps>=({color})=>{
    return <h1>Hi There {color}</h1>

}
