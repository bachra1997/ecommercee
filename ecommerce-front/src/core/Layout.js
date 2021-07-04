import React from "react";
import Menu from "./Menu"
import "../Style.css";


const Layout = ({
    title = "Title",
    description = "Description",
    className,
    children
}) =>  (
    <div>
        <Menu />
        <hr/>
        <div className="jumbotron" style={{ 
      
backgroundImage: `url("https://img.freepik.com/photos-gratuite/tranche-pizza-delicieuse-ingredients-fond-bois-texture_23-2147926094.jpg?size=626&ext=jpg")` ,
  backgroundRepeat: 'no-repeat',
   backgroundSize: 'cover',
  
}}>

            <h2>{title}</h2>
            <p className="lead">{description}</p>
        </div><br />
        <div className={className}>{children}</div>
    </div>  
);


export default Layout;