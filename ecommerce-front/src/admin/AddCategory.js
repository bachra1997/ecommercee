import React,{useState} from "react";
import Layout2 from "../core/Layout2";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import {createCategory } from "./apiAdmin";

const AddCategory =()=> {
 

const [nom, setName] = useState("");
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

// destructure user and token from localstorage
    const { user, token } = isAuthenticated();



 const handleChange = (e) => {
        setError("");
        setName(e.target.value);
    };



const clickSubmit= (e) => {


e.preventDefault();
        setError("");
        setSuccess(false);
        //requete pour api pour creer une categorie


createCategory(user._id, token, { nom }).then(data => {
            if (data.error) {
                setError(true);
            } else {
                setError("");
                setSuccess(true);
            }
});
};

const newCategoryFom = () => (
<form onSubmit={clickSubmit}>
<div className="form-group">
       <label className="text-muted">Nom</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={handleChange}
                    value={nom}
                    autoFocus
                    required
                />

</div><br />


 <button className="btn btn-outline-primary">Créer une Categorie</button>

</form>
	);



const showSuccess = () => {
        if (success) {
            return <h3 className="text-success">{nom} est crée</h3>;
        }
    };



const goBack= () => (
        <div className="mt-5">
            <Link to="/admin/dashboard" className="text-warning">
                Retour
            </Link>
        </div>
    );


 const showError = () => {
        if (error) {
            return <h3 className="text-danger">Categorie doit etre unique</h3>;
        }
    };






   return (
        <Layout2
     title="Ajouter une nouvelle carte"
    description={`G'day ${user.nom}, pret pour ajouter une nouvelle categorie?`}
           
        >
            <div className="row">
                 <div className="outer">
        <div className="inner">
                <div className="col-md-8 offset-md-2">
                {showSuccess()}
                {showError()}
{newCategoryFom()}

{goBack()}
                </div></div></div>
            </div>
        </Layout2>
    );
};


 
export default AddCategory;