import React from 'react';
import { Link } from 'react-router-dom';
import ShowImage from './ShowImage';
import moment from "moment";


 



const Cardo =({offre , showViewProductButton=true})=> {
//// tna7i bouton vonsulter ki tabda deja f west consultation
const showViewButton =(showViewProductButton) => {
return (
showViewProductButton && (
	<Link to={`/offre/${offre._id}`} className="mr-2">

<button className="btn btn-dark mt-2 mt-2">
 Consulter</button> </Link>

	)


	);



};





return (


<div className="card">
<div className="card-header nom">{offre.nom}</div>
<div className="card-body">

<ShowImage item ={offre} url ="offre"/>

<p className="lead mt-2"> {offre.description}</p>


<p className="black-8">
Offre !!

</p>



</div>
</div>





	);



};




export default Cardo;