import React, { useState, useEffect } from "react";
import Layout2 from "../core/Layout2";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { getBoissons, deleteBoisson } from "./apiAdmin";

 

const GererCarteBoisson =()=> {
const [boissons, setBoissons ] = useState ([]);
 const { user, token } = isAuthenticated();



 const loadBoissons = () => {
        getBoissons().then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setBoissons(data);
            }
        });
    };



 

 const destroy = boissonId => {
        deleteBoisson(boissonId, user._id, token).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                loadBoissons();
            }
        });
    };

    useEffect(() => {
        loadBoissons();
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
      Total {boissons.length} 
</h2>
<hr />
<ul className="list-group">
{boissons.map((b, i) => (
<li
key={i}
className="list-group-item d-flex justify-content-between align-items-center"
                            >
<strong>{b.nom}</strong>
<Link to={`/admin/boisson/update/${b._id}`}>
<button className="btn btn-outline-secondary">
Mise à jour
   </button>
   </Link>
<button onClick={() => destroy(b._id)}
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

export default GererCarteBoisson;