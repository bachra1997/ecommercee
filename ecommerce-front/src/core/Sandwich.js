import React , { useState, useEffect } from "react";
import Layout from "./Layout";
import {  reads, listRelated  } from './apiCore';

import Cards from './Cards';
import "../Style.css";



  

  
    

  const Sandwich =(props)=>{ 
    const [sandwich, setSandwich] = useState({});
    
    const [error, setError] = useState(false);

    const loadSingleSandwich= sandwichId => {

reads(sandwichId).then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setSandwich(data);
    }

});};
    useEffect(() => {
        const sandwichId = props.match.params.sandwichId;
        loadSingleSandwich(sandwichId);
    }, [props]);

   return (

    
        <Layout
            title={sandwich && sandwich.name}
  description={sandwich && sandwich.description && sandwich.description.substring(0, 100)}            className="container-fluid"
     

     className="container-fluid"   >
          
          <div className="row">
{sandwich && sandwich.description && <Cards sandwich= {sandwich} showViewProductButton={false}/>}

          </div>

        </Layout>

                  
    );};
    export default Sandwich;