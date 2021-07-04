import React , { useState } from 'react';
import { Link,Redirect } from 'react-router-dom';
import ShowImage from './ShowImage';
import moment from "moment";
import {addItem ,updateItem,removeItem} from "./cartHelpers";





const Card =({product , showViewProductButton=true , 
  showAddToCartButton = true,
cartUpdate =false, showRemoveProductButton=false,
  setRun = f => f,
  run = undefined
})=> {
	const [redirect, setRedirect] = useState(false);
	const [count, setCount] = useState(product.count);
//// tna7i bouton vonsulter ki tabda deja f west consultation
const showViewButton =showViewProductButton => {
return (
showViewProductButton && (
	<Link to={`/product/${product._id}`} className="mr-2">

<button className="btn btn-dark mt-2 mt-2">
 Consulter</button> </Link>

	)


	);};

const addToCart = () => {
   
    addItem(product, setRedirect(true));
  };



 const shouldRedirect = redirect => {
    if (redirect) {
      return <Redirect to="/cart" />;
    }
  };


const showAddToCartBtn= showAddToCartButton => {

return (  showAddToCartButton && 
<button onClick={addToCart} className="btn btn-outline-warning mt-1 mb-1  mr-2">
Livraison </button>)


}


 const handleChange = productId => event => {
    setRun(!run); 
    setCount(event.target.value < 1 ? 1 : event.target.value);
    if (event.target.value >= 1) {
      updateItem(productId, event.target.value);
    }
  };



   const showCartUpdateOptions = cartUpdate => {
    return (
      cartUpdate && (
        <div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Adjust Quantity</span>
            </div>
            <input type="number" className="form-control" value={count} onChange={handleChange(product._id)} />
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
            removeItem(product._id);
            setRun(!run);
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
<div className="card-header nom">{product.nom}</div>
<div className="card-body">

{shouldRedirect(redirect)}

<p className="black-10">{product.price} dt</p>



        {showViewButton(showViewProductButton)}

        {showAddToCartBtn(showAddToCartButton)}

        {showRemoveButton(showRemoveProductButton)}

        {showCartUpdateOptions(cartUpdate)}

</div>
</div>





	);



};




export default Card;