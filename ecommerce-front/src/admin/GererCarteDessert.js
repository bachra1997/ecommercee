
import React, { useState, useEffect } from "react";
import Layout2 from "../core/Layout2";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { getDesserts, deleteDessert } from "./apiAdmin";

 

const GererCarteDessert =()=> {
const [desserts, setDesserts ] = useState ([]);
 const { user, token } = isAuthenticated();



 const loadDesserts = () => {
        getDesserts().then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setDesserts(data);
            }
        });
    };



 

 const destroy = dessertId => {
        deleteDessert(dessertId, user._id, token).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                loadDesserts();
            }
        });
    };

    useEffect(() => {
        loadDesserts();
    }, []);

    
        
  

     return (
       <Layout2
            title="Gérer les cartes"
            description="Supprimer - Modifier"
            className="container-fluid"
        >
            <div className="row">
<div className="col-12">
<h2 className="text-center">
      Total {desserts.length} 
</h2>
<hr />
<ul className="list-group">
{desserts.map((d, i) => (
<li
key={i}
className="list-group-item d-flex justify-content-between align-items-center"
                            >
<strong>{d.nom}</strong>
<Link to={`/admin/dessert/update/${d._id}`}>
<button className="btn btn-outline-secondary">
Mise à jour
   </button>
   </Link>
<button onClick={() => destroy(d._id)}
className="btn btn-outline-danger"> Supprimer

</button>
</li>
))}
</ul>
<br />
</div>
</div>
</Layout2>
    );
};

export default GererCarteDessert;