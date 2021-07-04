
import React , { useState, useEffect } from "react";
import Layout2 from "./Layout2";
import { getPizzas ,getCategories, getFilteredPizzas} from './apiCore';

import Cardp from './Cardp';
import  "../Style.css";


 

const CartePizza = () => {

     const [pizzasBySell, setPizzasBySell] = useState([]);
    const [error, setError] = useState(false);
    const [limit, setLimit] = useState(6);
const [size ,setSize]=useState(0);
const [skip, setSkip] = useState(0);
      const [categories, setCategories] = useState([]);
      const [myFilters, setMyFilters] = useState({
        filters: { category: [], price: [] }
    });
    
    

    const loadPizzasBySell = () => {
        getPizzas('sold').then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setPizzasBySell(data);
                setSize(data.size);
                setSkip(0);
            }
        });
    };

    





   

 useEffect(() => {
      
        loadPizzasBySell();

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
                {pizzasBySell.map((pizza, i) => (
                    <div key={i} className="col-3 mb-3">
                        <Cardp pizza={pizza} />

 
                    </div>
                
                ))};
                
              
            </div>   
                    
                   </center>
        </Layout2>

                  
    );

};

export default CartePizza;
