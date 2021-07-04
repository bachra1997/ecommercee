import React , { useState, useEffect } from "react";
import Layout2 from "./Layout2";
import { getOffres ,getCategories, getFilteredOffres} from './apiCore';

import Cardo from './Cardo';
import  "../Style.css";

 
 

const CarteOffre = () => {

    const [offresByArrival, setOffresByArrival] = useState([]);
    const [error, setError] = useState(false);
    const [limit, setLimit] = useState(6);
const [size ,setSize]=useState(0);
const [skip, setSkip] = useState(0);
      const [categories, setCategories] = useState([]);
      const [myFilters, setMyFilters] = useState({
        filters: { category: [], price: [] }
    });
    
    


    const loadOffresByArrival = () => {
        getOffres('createdAt').then(data => {
            console.log(data);
            if (data.error) {
                setError(data.error);
            } else {
                setOffresByArrival(data);
                setSize(data.size);
                setSkip(0);
            }
        });
    };







 useEffect(() => {
        loadOffresByArrival();

    }, []);



  

  
    

   

   return (

    
        <Layout2
            title="FullStack React Node MongoDB Ecommerce App"
            description="Node React E-commerce App"
            className="container-fluid"
        >
           <center>
            <h2 className="mb-4">Nos Offres</h2>
            <div className="row">
                {offresByArrival.map((offre, i) => (
                    <div key={i} className="col-12 mb-2">
                        <Cardo offre={offre} />
                    </div>
                ))}
            </div>
 
                    
                   </center>
        </Layout2>

                  
    );

};

export default CarteOffre;
