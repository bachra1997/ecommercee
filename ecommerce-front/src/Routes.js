import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Signup from './user/Signup';
import Signin from './user/Signin';
import Home from './core/Home';
import PrivateRoute from "./auth/PrivateRoute";
import Dashboard from "./user/UserDashboard";
import AdminRoute from "./auth/AdminRoute";
import AdminDashboard from "./user/AdminDashboard";
import AddCategory from "./admin/AddCategory";
import AddProduct from "./admin/AddProduct";
import Store from './core/Store';
import Product from './core/Product';
import Cart from './core/Cart';
import Reclamation from './core/Reclamation';
import ManagerCartes from "./admin/ManagerCartes";
import Orders from "./admin/Orders";

import UpdateProduct from "./admin/UpdateProduct";
import ManagerOffres from "./admin/ManagerOffres";
import Noscartes from './core/Noscartes';

import Boisson from './core/Boisson';
import CarteBoisson from './core/CarteBoisson';
import AddBoisson from "./admin/AddBoisson";
import UpdateBoisson from "./admin/UpdateBoisson";
import GererCarteBoisson from "./admin/GererCarteBoisson";

import Sandwich from './core/Sandwich';
import CarteSandwich from './core/CarteSandwich';
import AddSandwich from "./admin/AddSandwich";
import UpdateSandwich from "./admin/UpdateSandwich";
import GererCarteSandwich from "./admin/GererCarteSandwich";

import Pizza from './core/Pizza';
import CartePizza from './core/CartePizza';
import AddPizza from "./admin/AddPizza";
import UpdatePizza from "./admin/UpdatePizza";
import GererCartePizza from "./admin/GererCartePizza";

import Dessert from './core/Dessert';
import CarteDessert from './core/CarteDessert';
import AddDessert from "./admin/AddDessert";
import UpdateDessert from "./admin/UpdateDessert";
import GererCarteDessert from "./admin/GererCarteDessert";

import Offre from './core/Offre';
import CarteOffre from './core/CarteOffre';
import AddOffre from "./admin/AddOffre";
import GererCarteOffre from "./admin/GererCarteOffre";
const Routes = () => {
    return (
        <BrowserRouter>

            <Switch>

<Route path="/" exact component={Home} />
<Route path="/Store" exact component={Store} />

  <Route path="/Noscartes" exact component={Noscartes} />

  <PrivateRoute path="/user/dashboard" exact component={Dashboard} />
<Route path="/cart" exact component={Cart} />
 <Route path="/Reclamation" exact component={Reclamation} />
 <Route path="/product/:productId" exact component={Product} />
  <Route path="/signin" exact component={Signin} />
   <Route path="/signup" exact component={Signup} />
<Route path="/Offre" exact component={Offre} />
<Route path="/Dessert" exact component={Dessert} />
<Route path="/Pizza" exact component={Pizza} />
<Route path="/Sandwich" exact component={Sandwich} />

<AdminRoute path="/admin/orders" exact component={Orders} />


<AdminRoute path="/admin/dashboard" exact component={AdminDashboard} />
<AdminRoute path="/create/category" exact component={AddCategory} />
<AdminRoute path="/create/Product" exact component={AddProduct} />
<AdminRoute path="/admin/products" exact component={ManagerCartes} />
<AdminRoute path="/admin/product/update/:productId" exact component={UpdateProduct} />

 //////boisson

<AdminRoute path="/create/Boisson" exact component={AddBoisson} />
<AdminRoute path="/admin/boissons" exact component={GererCarteBoisson} />
<AdminRoute path="/admin/boisson/update/:boissonId" exact component={UpdateBoisson} />
<Route path="/boisson/:boissonId" exact component={Boisson} />
<Route path="/CarteBoisson" exact component={CarteBoisson} />
///dessert
<AdminRoute path="/create/Dessert" exact component={AddDessert} />
<AdminRoute path="/admin/desserts" exact component={GererCarteDessert} />
<AdminRoute path="/admin/dessert/update/:dessertId" exact component={UpdateDessert} />
<Route path="/dessert/:dessertId" exact component={Dessert} />
<Route path="/CarteDessert" exact component={CarteDessert} />
////pizza
<AdminRoute path="/create/Pizza" exact component={AddPizza} />
<AdminRoute path="/admin/pizzas" exact component={GererCartePizza} />
<AdminRoute path="/admin/pizza/update/:pizzaId" exact component={UpdatePizza} />
<Route path="/pizza/:pizzaId" exact component={Pizza} />
<Route path="/CartePizza" exact component={CartePizza} />

////sandwich
<AdminRoute path="/create/Sandwich" exact component={AddSandwich} />
<AdminRoute path="/admin/sandwichs" exact component={GererCarteSandwich} />
<AdminRoute path="/admin/sandwich/update/:sandwichId" exact component={UpdateSandwich} />
<Route path="/sandwich/:sandwichId" exact component={Sandwich} />
<Route path="/CarteSandwich" exact component={CarteSandwich} />
////offre
<AdminRoute path="/create/Offre" exact component={AddOffre} />
<AdminRoute path="/admin/offres" exact component={GererCarteOffre} />
<Route path="/offre/:offreId" exact component={Offre} />
<Route path="/CarteOffre" exact component={CarteOffre} />

</Switch>
</BrowserRouter>
    );
};

export default Routes;