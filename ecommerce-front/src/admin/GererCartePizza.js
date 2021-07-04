

import React, { useState, useEffect } from "react";
import Layout2 from "../core/Layout2";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { getPizzas, deletePizza } from "./apiAdmin";

 

const GererCartePizza =()=> {
const [pizzas, setPizzas ] = useState ([]);
 const { user, token } = isAuthenticated();



 const loadPizzas = () => {
        getPizzas().then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setPizzas(data);
            }
        });
    };



 

 const destroy = pizzaId => {
        deletePizza(pizzaId, user._id, token).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                loadPizzas();
            }
        });
    };

    useEffect(() => {
        loadPizzas();
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
      Total {pizzas.length} 
</h2>
<hr />
<ul className="list-group">
{pizzas.map((b, i) => (
<li
key={i}
className="list-group-item d-flex justify-content-between align-items-center"
                            >
<strong>{b.nom}</strong>
<Link to={`/admin/pizza/update/${b._id}`}>
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

export default GererCartePizza;