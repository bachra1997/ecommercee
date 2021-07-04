import React , { useState, useEffect } from "react";
import Layout from "./Layout";
import {  reado, listRelated  } from './apiCore';

import Cardo from './Cardo';
import "../Style.css";



  

  
    

  const Offre =(props)=>{ 
    const [offre, setOffre] = useState({});
    
    const [error, setError] = useState(false);

    const loadSingleOffre= offreId => {

reado(offreId).then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setOffre(data);
    }

});};
    useEffect(() => {
        const offreId = props.match.params.offreId;
        loadSingleOffre(offreId);
    }, [props]);

   return (

    
        <Layout
            title={offre && offre.name}
  description={offre && offre.description && offre.description.substring(0, 100)}            className="container-fluid"
     

     className="container-fluid"   >
          
          <div className="row">
{offre && offre.offre && <Cardo offre= {offre} showViewProductButton={false}/>}

          </div>

        </Layout>

                  
    );};
    export default Offre;