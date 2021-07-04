import React , { useState, useEffect } from "react";
import Layout from "./Layout";
import {  readd, listRelated  } from './apiCore';

import Cardd from './Cardd';
import "../Style.css";



  

  
    

  const Dessert =(props)=>{ 
    const [dessert, setDessert] = useState({});
    
    const [error, setError] = useState(false);

    const loadSingleDessert= dessertId => {

readd(dessertId).then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setDessert(data);
    }

});};
    useEffect(() => {
        const dessertId = props.match.params.dessertId;
        loadSingleDessert(dessertId);
    }, [props]);

   return (

    
        <Layout
            title={dessert && dessert.name}
  description={dessert && dessert.description && dessert.description.substring(0, 100)}            className="container-fluid"
     

     className="container-fluid"   >
          
          <div className="row">
{dessert && dessert.description && <Cardd dessert= {dessert} showViewProductButton={false}/>}

          </div>

        </Layout>

                  
    );};
    export default Dessert;