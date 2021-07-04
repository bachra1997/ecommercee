import React from "react";
import Menu from "./Menu"
import "../Style.css";


const Layout2 = ({
   
    className,
    children
}) =>  (
    <div>
        <Menu />
         <br /> <br /> <br /> <br />
        
        <div className={className}>{children}</div>
    </div>  
);


export default Layout2;