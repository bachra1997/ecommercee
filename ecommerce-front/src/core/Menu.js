import React , { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {itemTotal} from "./cartHelpers";
import {signout , isAuthenticated }from "../auth";
import Navbar from 'react-bootstrap/Navbar';
import logo from './lo.jpg';
const isActive = (history, path) => {
    if (history.location.pathname === path) {
        return { color: "#ff9900" };
    } else {
        return { color: "#ffffff" };
    }
};

const Menu = ({ history }) => (
    <div>
   
        <ul className="nav nav-tabs bg-primary">
        
     
            <li className="nav-item">
                <Link
                    className="nav-link"
                    style={isActive(history, "/")}
                    to="/"
                >
                    Home
                </Link>
            </li>

            <li className="nav-item">
                <Link
                    className="nav-link"
                    style={isActive(history, "/Store")}
                    to="/Store"
                >
                    Les Stores
                </Link>
            </li>
            <li className="nav-item">
                <Link
                    className="nav-link"
                    style={isActive(history, "/CarteOffre")}
                    to="/CarteOffre"
                >
                   Nos Offres
                </Link>
            </li> 

  
           

<li className="nav-item">
            <DropdownButton id="dropdown-basic-button" title="Nos Cartes">
  <Dropdown.Item href="/CartePizza">Carte Pizzas</Dropdown.Item>
  <Dropdown.Item href="/CarteSandwich">Carte Sandwichs</Dropdown.Item>
  <Dropdown.Item href="/CarteDessert">Carte Desserts</Dropdown.Item>
  <Dropdown.Item href="/CarteBoisson">Carte Boissons</Dropdown.Item>
</DropdownButton  >         </li>


            <li className="nav-item">
                <Link
                    className="nav-link"
                    style={isActive(history, "/cart")}
                    to="/cart"
                >
                    Panier{" "}
                    <sup>
                        <small className="cart-badge">{itemTotal()}</small>
                    </sup>
                </Link>
            </li>

   
         

            




{ isAuthenticated () && isAuthenticated().user.role === 1 && (

 <li className="nav-item">
                <Link
                    className="nav-link"
                    style={isActive(history, "/admin/dashboard")}
                    to="/admin/dashboard"
                >
                   Dashboard
                </Link>
            </li>
          



    )}


{ isAuthenticated () && isAuthenticated().user.role === 0 && (

 
            <li className="nav-item">
                <Link
                    className="nav-link"
                    style={isActive(history, "/Reclamation")}
                    to="/Reclamation"
                >
                    Réclamer
                </Link>
            </li>



    )}







{!isAuthenticated() && (
                <Fragment>

             <li className="nav-item">
                <Link
                    className="nav-link"
                    style={isActive(history, "/signin")}
                    to="/signin"
                >
                    Signin
                </Link>
            </li> 


            <li className="nav-item">
                <Link
                    className="nav-link"
                    style={isActive(history, "/signup")}
                    to="/signup"
                >
                    Signup
                </Link>
            </li> 

              </Fragment>
            )}

{isAuthenticated() && (
                <li className="nav-item">
                    <span
                        className="nav-link"
                        style={{ cursor: "pointer", color: "#ffffff" }}
                        onClick={() =>
                            signout(() => {
                                history.push("/");
                            })
                        }
                    >
                        Signout
                    </span>
                </li>
            
 )}
        </ul>
       
    </div>
);

export default withRouter(Menu);