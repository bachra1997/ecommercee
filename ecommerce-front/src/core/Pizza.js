import React , { useState, useEffect } from "react";
import Layout from "./Layout";
import {  readp, listRelated  } from './apiCore';

import Cardp from './Cardp';
import "../Style.css";



  

  
    

  const Pizza =(props)=>{ 
    const [pizza, setPizza] = useState({});
    
    const [error, setError] = useState(false);

    const loadSinglePizza= pizzaId => {

readp(pizzaId).then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setPizza(data);
    }

});};
    useEffect(() => {
        const pizzaId = props.match.params.pizzaId;
        loadSinglePizza(pizzaId);
    }, [props]);

   return (

    
        <Layout
            title={pizza && pizza.name}
  description={pizza && pizza.description && pizza.description.substring(0, 100)}            className="container-fluid"
     

     className="container-fluid"   >
          
          <div className="row">
{pizza && pizza.description && <Cardp pizza= {pizza} showViewProductButton={false}/>}

          </div>

        </Layout>

                  
    );};
    export default Pizza;