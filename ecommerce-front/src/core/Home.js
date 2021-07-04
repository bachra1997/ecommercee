import React , { useState, useEffect } from "react";
import Layout2 from "./Layout2";
import { getProducts ,getCategories, getFilteredProducts} from './apiCore';
import Carousel from 'react-bootstrap/Carousel'
import Card from './Card';
import  "../Style.css";
import logo from './offrefamiliale.png';
import { getPizzas , getFilteredPizzas} from './apiCore';

import Cardp from './Cardp';
import  "../Style.css";
 import logo2 from './duodeall.png';


const Home = () => {

     const [pizzasBySell, setPizzasBySell] = useState([]);
    const [productsByArrival, setProductsByArrival] = useState([]);
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
           
<div class="divCarousel">
<center>
<Carousel fade>
  <Carousel.Item>
    <img
      className="d-block "
      src={logo}
      alt="First slide"
    />
    <Carousel.Caption>
    
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block  "
 src={logo2}
      alt="Peperoni"
    />

    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</center>
   </div>
   <br/>
   <div>

     <center>
           

            <h2 className="mb-4">Les Nouveautés Pizzas</h2>
            <div className="row">
                {pizzasBySell.map((pizza, i) => (
                    <div key={i} className="col-3 mb-3">
                        <Cardp pizza={pizza} />

 
                    </div>
                
                ))};
                
              
            </div>   
                    
                   </center>
                   </div>
        </Layout2>

                  
    );

};

export default Home;
