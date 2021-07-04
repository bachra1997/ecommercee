import React , { useState, useEffect } from "react";
import Layout from "./Layout";
import {  readb, listRelated  } from './apiCore';

import Cardb from './Cardb';
import "../Style.css";



  

  
    

  const Boisson =(props)=>{ 
    const [boisson, setBoisson] = useState({});
    
    const [error, setError] = useState(false);

    const loadSingleBoisson= boissonId => {

readb(boissonId).then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setBoisson(data);
    }

});};
    useEffect(() => {
        const boissonId = props.match.params.boissonId;
        loadSingleBoisson(boissonId);
    }, [props]);

   return (

    
        <Layout
            title={boisson && boisson.name}
  description={boisson && boisson.description && boisson.description.substring(0, 100)}            className="container-fluid"
     

     className="container-fluid"   >
          
          <div className="row">
{boisson && boisson.description && <Cardb boisson= {boisson} showViewProductButton={false}/>}

          </div>

        </Layout>

                  
    );};
    export default Boisson;