import React, { useState, useEffect } from "react";
import Layout2 from "../core/Layout2";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { getProducts, deleteProduct } from "./apiAdmin";

 

const ManagerCartes =()=> {
const [products, setProducts ] = useState ([]);
 const { user, token } = isAuthenticated();



 const loadProducts = () => {
        getProducts().then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setProducts(data); 
            }
        });
    };



 

 const destroy = productId => {
        deleteProduct(productId, user._id, token).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                loadProducts();
            }
        });
    };

    useEffect(() => {
        loadProducts();
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
      Total {products.length} 
</h2>
<hr />
<ul className="list-group">
{products.map((p, i) => (
<li
key={i}
className="list-group-item d-flex justify-content-between align-items-center"
                            >
<strong>{p.nom}</strong>
<Link to={`/admin/product/update/${p._id}`}>
<button className="btn btn-outline-secondary">
Mise à jour
   </button>
   </Link>
<button onClick={() => destroy(p._id)}
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

export default ManagerCartes;