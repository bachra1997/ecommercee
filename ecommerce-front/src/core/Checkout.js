import React, { useState, useEffect } from 'react';
import { getProducts,getDesserts,getPizzas,getBoissons,getSandwichs, createOrder } from './apiCore';
import { emptyCart } from './cartHelpers';
import Card from './Card';
import { isAuthenticated } from '../auth';
import { Link } from 'react-router-dom';
import DropIn from 'braintree-web-drop-in-react';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
const Checkout = ({ products,desserts, boissons,sandwichs,pizzas, setRun = f => f, run = undefined }) => {
    const [data, setData] = useState({
        loading: false,
        success: false,
        clientToken: null,
        error: '',
      tel: '',
        address: ''
    });

    const userId = isAuthenticated() && isAuthenticated().user._id;
    const token = isAuthenticated() && isAuthenticated().token;

 
    const handleAddress = event => {
        setData({ ...data, address: event.target.value });
    };
      const handleTel = e => {
        setData({ ...data, tel: e.target.value });
    };


    const getTotal = () => {
        return products.reduce((currentValue, nextValue) => {
            return currentValue + nextValue.count * nextValue.price;
        }, 0);
    };

    const showCheckout = () => {
        return isAuthenticated() ? (
            <div>{showDropIn()}</div>
        ) : (
            <Link to="/signin">
                <button className="btn btn-primary">Sign in to checkout</button>
            </Link>
        );
    };

    let deliveryAddress = data.address;
  let numero = data.tel;
    const commander = () => {
        setData({ loading: true });
       

                        const createOrderData = {
                            products: products,
                            pizzas: pizzas,
                            sandwichs: sandwichs,
                            desserts: desserts,
                            boissons: boissons,
                            amount: getTotal(products),
                            tel:numero,
                            address: deliveryAddress
                        };

                        createOrder(userId, token, createOrderData)
                            .then(response => {
                                emptyCart(() => {
                                     setRun(!run); 
                                    console.log('payment success and empty cart');
                                    setData({
                                        loading: false,
                                        success: true
                                    });
                                });
                            })
                            .catch(error => {
                                console.log(error);
                                setData({ loading: false });
                            });
                
               };

    const showDropIn = () => (
        <div onBlur={() => setData({ ...data, error: '' })}>
            { products.length > 0   ? (
                <div><div>
                    <div className="gorm-group mb-2">
                        <label className="text-muted">Adresse livraison:</label>
                        <textarea
                            onChange={handleAddress}
                            className="form-control"
                            value={data.address}
                            placeholder="Saisir votre adresse..."
                        /> </div>
     <div className="gorm-group mb-2">
                        <label className="text-muted">Numéro de téléphone:</label>

                            <input
      
      value={data.tel}
      onChange={handleTel}/>

                    </div>
                

   <DropIn
                        options={{
                            authorization: data.clientToken,
                           
                        }}
                        onInstance={instance => (data.instance = instance)}
                    />                 
                    <button onClick={commander} className="btn btn-success btn-block">
                       Commander
                    </button></div>
                </div>
            ) : null}
        </div>
    );

    const showError = error => (
        <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    );

    const showSuccess = success => (
        <div className="alert alert-info" >
            Commande effectuée avec succèes!
        </div>
    );

    const showLoading = loading => loading && <h2 className="text-danger">En cours...</h2>;

    return (
        <div>
            <h2>Total: ${getTotal()}</h2>
            {showLoading(data.loading)}
            {showSuccess(data.success)}
            {showError(data.error)}
            {showCheckout()}
        </div>
    );
};

export default Checkout;
