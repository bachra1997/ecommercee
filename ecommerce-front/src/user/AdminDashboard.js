import React from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const AdminDashboard = () => {
    const {
        user: { _id, nom, email, role }
    } = isAuthenticated();

    const adminLinks = () => {
        return (
            <div className="card">
                <h4 className="card-header">Admin Links</h4>
                <ul className="list-group">
                    <li className="list-group-item">
                        <Link className="nav-link" to="/create/category">
                            Ajouter une carte
                        </Link>
                    </li>

                     <li className="list-group-item">
                        <Link className="nav-link" to="/admin/orders">
                           Afficher Les Commandes
                        </Link>
                    </li>
                    <li className="list-group-item">
                        <Link className="nav-link" to="/create/pizza">
                            Ajouter une Pizza à la carte Pizzas
                        </Link>
                    </li>
                     <li className="list-group-item">
                        <Link className="nav-link" to="/create/boisson">
                            Ajouter un boisson à la carte Boissons
                        </Link>
                    </li>
                    <li className="list-group-item">
                        <Link className="nav-link" to="/create/sandwich">
                            Ajouter un sandwich à la carte Sandwichs
                        </Link>
                    </li>
                    <li className="list-group-item">
                        <Link className="nav-link" to="/create/dessert">
                            Ajouter un dessert à la carte Desserts
                        </Link>
                    </li>
                  
                    <li className="list-group-item">
                        <Link className="nav-link" to="/create/offre">   
                            Ajouter une offre
                        </Link>
                    </li>
                    <li className="list-group-item">
                        <Link className="nav-link" to="/admin/offres">
                            Manager les offres
                        </Link>
                    </li>
                    <li className="nav-item">
                      <DropdownButton id="dropdown-basic-button" title="Manager les cartes">
  <Dropdown.Item href="/admin/pizzas">Gérer Carte Pizzas</Dropdown.Item>
  <Dropdown.Item href="/admin/sandwichs">Gérer Carte Sandwichs</Dropdown.Item>
  <Dropdown.Item href="/admin/desserts">Gérer Carte Desserts</Dropdown.Item>
  <Dropdown.Item href="/admin/boissons">Gérer Carte Boissons</Dropdown.Item>
</DropdownButton  >  
                    </li>
                </ul>
            </div>
        );
    };

    const adminInfo = () => {
        return (
            <div className="card mb-5">
                <h3 className="card-header">User Information</h3>
                <ul className="list-group">
                    <li className="list-group-item">{nom}</li>
                    <li className="list-group-item">{email}</li>
                    <li className="list-group-item">
                        {role === 1 ? "Admin" : "Registered User"}
                    </li>
                </ul>
            </div>
        );
    };

    return (
        <Layout
            title="Dashboard"
            description={`Bonjour ${nom}!`}
            className="container-fluid"
        >
            <div className="row">
                <div className="col-3">{adminLinks()}</div>
                <div className="col-9">{adminInfo()}</div>
            </div>
        </Layout>
    );
};

export default AdminDashboard;
