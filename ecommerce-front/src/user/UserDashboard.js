import React from "react";
import Layout2 from "../core/Layout2";
import {isAuthenticated} from "../auth";
import { Link } from "react-router-dom";



const Dashboard = () => {

	
	
	const {
        user: { _id, nom, email, role }
    } = isAuthenticated();


    const userLinks = () => {
        return (
            <div className="card">
                <h4 className="card-header">Liens du Client</h4>
                <ul className="list-group">
                    <li className="list-group-item">


<Link className="nav-link" to="/cart">
                           Panier
                        </Link>

</li>

</ul>
</div>
);
};



const userInfo =()=> {

return (

<div className="card mb-5">
                <h3 className="card-header"> Informations du client</h3>
                <ul className="list-group">
                    <li className="list-group-item">{nom}</li>
                    <li className="list-group-item">{email}</li>
                    <li className="list-group-item">
                    {role === 1 ? "Admin" : "Registered User"}</li>


 </ul>
            </div>

	);


};



return (
	<Layout2 title ="Dashboard" description={`Bonjour ${nom}`}
	 className="container-fluid">
	

  <div className="row">
 <div className="col-3">

 {userLinks()}
 </div>


 <div className="col-9">

{userInfo ()}
 </div>

  </div>

        

	</Layout2>

	);



};
export default Dashboard;