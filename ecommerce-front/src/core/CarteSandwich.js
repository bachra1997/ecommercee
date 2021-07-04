

import React , { useState, useEffect } from "react";
import Layout2 from "./Layout2";
import { getSandwichs ,getCategories, getFilteredSandwichs} from './apiCore';
import Carousel from 'react-bootstrap/Carousel';
import Cards from './Cards';
import  "../Style.css";


 

const CarteSandwich = () => {

     const [sandwichsBySell, setSandwichsBySell] = useState([]);
    const [error, setError] = useState(false);
    const [limit, setLimit] = useState(6);
const [size ,setSize]=useState(0);
const [skip, setSkip] = useState(0);
      const [categories, setCategories] = useState([]);
      const [myFilters, setMyFilters] = useState({
        filters: { category: [], price: [] }
    });
    
    

    const loadSandwichsBySell = () => {
        getSandwichs('sold').then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setSandwichsBySell(data);
                setSize(data.size);
                setSkip(0);
            }
        });
    };

    





   

 useEffect(() => {
      
        loadSandwichsBySell();

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
                {sandwichsBySell.map((sandwich, i) => (
                    <div key={i} className="col-3 mb-3">
                        <Cards sandwich={sandwich} />

 
                    </div>
                
                ))};
                
              
            </div>   
                    
                   </center>
        </Layout2>

                  
    );

};

export default CarteSandwich;
