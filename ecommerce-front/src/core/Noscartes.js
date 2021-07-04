import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import Card from "./Card";
import { getCategories, getFilteredProducts } from "./apiCore";
const Noscartes = () => {

const [categories, setCategories] = useState([]);
    const [error, setError] = useState(false);

    const [limit, setLimit] = useState(6);
    const [skip, setSkip] = useState(0);
    const [size, setSize] = useState(0);
    const [filteredResults, setFilteredResults] = useState([]);

     const init = () => {
        getCategories().then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setCategories(data);
            }
        });
    };
    
	 return (

    
        <Layout
            title="FullStack React Node MongoDB Ecommerce App"
            description="Node React E-commerce App"
            className="container-fluid"
        >
         

            <div className="row">
              
             <div className="col-4">   
              <h4> filtre par cartes</h4>
                       </div>   
             </div>        
                  
        </Layout>

                  
    );

};
export default Noscartes;