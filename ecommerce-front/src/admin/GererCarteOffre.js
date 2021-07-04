
import React, { useState, useEffect } from "react";
import Layout2 from "../core/Layout2";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { getOffres, deleteOffre } from "./apiAdmin";

 

const GererCarteOffre =()=> {
const [offres, setOffres ] = useState ([]);
 const { user, token } = isAuthenticated();



 const loadOffres = () => {
        getOffres().then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setOffres(data);
            }
        });
    };



 

 const destroy = offreId => {
        deleteOffre(offreId, user._id, token).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                loadOffres();
            }
        });
    };

    useEffect(() => {
        loadOffres();
    }, []);

    
        
  

     return (
       <Layout2
            title="Gérer les offres"
            description="Supprimer"
            className="container-fluid"
        >
            <div className="row">
<div className="col-12">
<h2 className="text-center">
      Les offres
</h2>
<hr />
<ul className="list-group">
{offres.map((o, i) => (
<li
key={i}
className="list-group-item d-flex justify-content-between align-items-center"
                            >
<strong>{o.nom}</strong>

<button onClick={() => destroy(o._id)}
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

export default GererCarteOffre;