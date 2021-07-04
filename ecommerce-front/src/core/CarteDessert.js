
import React , { useState, useEffect } from "react";
import Layout2 from "./Layout2";
import { getDesserts ,getCategories, getFilteredDesserts} from './apiCore';

import Cardd from './Cardd';
import  "../Style.css";


 

const CarteDessert = () => {

     const [dessertsBySell, setDessertsBySell] = useState([]);
    const [error, setError] = useState(false);
    const [limit, setLimit] = useState(6);
const [size ,setSize]=useState(0);
const [skip, setSkip] = useState(0);
      const [categories, setCategories] = useState([]);
      const [myFilters, setMyFilters] = useState({
        filters: { category: [], price: [] }
    });
    
    

    const loadDessertsBySell = () => {
        getDesserts('sold').then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setDessertsBySell(data);
                setSize(data.size);
                setSkip(0);
            }
        });
    };

    





   

 useEffect(() => {
      
        loadDessertsBySell();

    }, []);



  

  
    

   

   return (

    
        <Layout2
            title="FullStack React Node MongoDB Ecommerce App"
            description="Node React E-commerce App"
            className="container-fluid"
        >
           <center>
           

            <h2 className="mb-4">Best Sellers</h2>
            <div className="row">
                {dessertsBySell.map((dessert, i) => (
                    <div key={i} className="col-3 mb-3">
                        <Cardd dessert={dessert} />

 
                    </div>
                
                ))};
                
              
            </div>   
                    
                   </center>
        </Layout2>

                  
    );

};

export default CarteDessert;
