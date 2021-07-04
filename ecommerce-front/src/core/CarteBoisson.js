import React , { useState, useEffect } from "react";
import Layout2 from "./Layout2";
import { getBoissons ,getCategories, getFilteredBoissons} from './apiCore';

import Cardb from './Cardb';
import  "../Style.css";


 

const CarteBoisson = () => {

     const [boissonsBySell, setBoissonsBySell] = useState([]);
    const [error, setError] = useState(false);
    const [limit, setLimit] = useState(6);
const [size ,setSize]=useState(0);
const [skip, setSkip] = useState(0);
      const [categories, setCategories] = useState([]);
      const [myFilters, setMyFilters] = useState({
        filters: { category: [], price: [] }
    });
    
    

    const loadBoissonsBySell = () => {
        getBoissons('sold').then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setBoissonsBySell(data);
                setSize(data.size);
                setSkip(0);
            }
        });
    };

    





   

 useEffect(() => {
      
        loadBoissonsBySell();

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
                {boissonsBySell.map((boisson, i) => (
                    <div key={i} className="col-3 mb-3">
                        <Cardb boisson={boisson} />

 
                    </div>
                
                ))};
                
              
            </div>   
                    
                   </center>
        </Layout2>

                  
    );

};

export default CarteBoisson;
