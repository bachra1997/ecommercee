import React , { useState } from 'react';
import { Link,Redirect } from 'react-router-dom';
import ShowImage from './ShowImage';
import moment from "moment";
import {addItem ,updateItem,removeItem} from "./cartHelpers";





const Cards =({sandwich , showViewProductButton=true , showAddToCartButton = true,
cartUpdate =false, showRemoveProductButton=false
})=> {
	const [redirect, setRedirect] = useState(false);
	const [count, setCount] = useState(sandwich.count);
//// tna7i bouton vonsulter ki tabda deja f west consultation
const showViewButton =(showViewProductButton) => {
return (
showViewProductButton && (
	<Link to={`/sandwich/${sandwich._id}`} className="mr-2">

<button className="btn btn-dark mt-2 mt-2">
 Consulter</button> </Link>

	)


	);};

const addToCart = () => {
   
    addItem(sandwich, setRedirect(true));
  };



 const shouldRedirect = redirect => {
    if (redirect) {
      return <Redirect to="/cart" />;
    }
  };


const showAddToCart = showAddToCartButton => {

return (  showAddToCartButton && 
<button onClick={addToCart} className="btn btn-outline-warning mt-1 mb-1  mr-2">
Livraison </button>)


}


 const handleChange = sandwichId => event => {
    
    setCount(event.target.value < 1 ? 1 : event.target.value);
    if (event.target.value >= 1) {
      updateItem(sandwichId, event.target.value);
    }
  };



 const showCartUpdateOptions = cartUpdate => {
    return (
      cartUpdate && (
        <div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Modifier quantité</span>
            </div>
            <input type="number" className="form-control" value={count} onChange={handleChange(sandwich._id)} />
          </div>
        </div>
      )
    );
  };


  const showRemoveButton = showRemoveProductButton => {
    return (
      showRemoveProductButton && (
        <button
          onClick={() => {
            removeItem(sandwich._id);
           
          }}
          className="btn btn-outline-danger mt-2 mb-2"
        >
          Annuler
        </button>
      )
    );
  };

return (


<div className="card">
<div className="card-header nom">{sandwich.nom}</div>
<div className="card-body">

{shouldRedirect(redirect)}
<ShowImage item ={sandwich} url ="sandwich"/>

<p className="lead mt-2"> {sandwich.description}</p>
<p className="black-10">{sandwich.price} dt</p>

<p className="black-8">
Livraison gratuite

</p>

{showViewButton (showViewProductButton)}

{showAddToCart(showAddToCartButton)}
 {showRemoveButton(showRemoveProductButton)}
{showCartUpdateOptions(cartUpdate)}

</div>
</div>





	);



};




export default Cards;