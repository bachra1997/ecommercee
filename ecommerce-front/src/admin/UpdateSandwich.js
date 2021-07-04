
import React, { useState, useEffect } from 'react';
import Layout2 from '../core/Layout2';
import { isAuthenticated } from '../auth';
import { Link, Redirect } from 'react-router-dom';
import { getSandwich, getCategories, updateSandwich } from './apiAdmin';

const UpdateSandwich = ({ match }) => {
    const [values, setValues] = useState({
        nom: '',
        description: '',
        price: '',
        categories: [],
        category: '',
        shipping: '',
        quantity: '',
        photo: '',
        loading: false,
        error: false,
        createdSandwich: '',
        redirectToProfile: false,
        formData: ''
    });
    const [categories, setCategories] = useState([]);

    const { user, token } = isAuthenticated();
    const {
        nom,
        description,
        price,
       // categories,
        category,
        shipping,
        quantity,
        loading,
        error,
        createdSandwich,
        redirectToProfile,
        formData
    } = values;

    const init = sandwichId => {
        getSandwich(sandwichId).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                // populate the state
                setValues({
                    ...values,
                    nom : data.nom,
                    description: data.description,
                    price: data.price,
                    category: data.category._id,
                    shipping: data.shipping,
                    quantity: data.quantity,
                    formData: new FormData()
                });
                // load categories
               
            }
        });
    };

   

    useEffect(() => {
        init(match.params.sandwichId);
    }, []);

    const handleChange = nom => event => {
        const value = nom === 'photo' ? event.target.files[0] : event.target.value;
        formData.set(nom, value);
        setValues({ ...values, [nom]: value });
    };

    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: '', loading: true });

        updateSandwich(match.params.sandwichId, user._id, token, formData).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                setValues({
                    ...values,
                    nom: '',
                    description: '',
                    photo: '',
                    price: '',
                    quantity: '',
                    loading: false,
                   
                    
                    createdSandwich: data.nom
                });
            }
        });
    };

    const newPostForm = () => (
        <form className="mb-3" onSubmit={clickSubmit}>
              <h3>Update</h3>
            <h5>photo</h5>
            <div className="form-group">
                <label className="btn btn-secondary">
                    <input onChange={handleChange('photo')} type="file" name="photo" accept="image/*" />
                </label>
            </div>

            <div className="form-group">
                <label className="text-muted">Nom</label>
                <input onChange={handleChange('nom')} type="text" className="form-control" value={nom} />
            </div>

            <div className="form-group">
                <label className="text-muted">Description</label>
                <textarea onChange={handleChange('description')} className="form-control" value={description} />
            </div>

            <div className="form-group">
                <label className="text-muted">Prix</label>
                <input onChange={handleChange('price')} type="number" className="form-control" value={price} />
            </div>

            <div className="form-group">
                <label className="text-muted">Category</label>
                <select onChange={handleChange('category')} className="form-control">
                    <option>Please select</option>
                   
                            
                   <option value="608f7afadae96d49b0b24ca2"> Les Sandwichs   </option> 
                      
                </select>
            </div>

           
<br /><center>
            <button className="btn btn-outline-primary">Mise à jour</button></center>
        </form>
    );

    const showError = () => (
        <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    );

    const showSuccess = () => (
        <div className="alert alert-info" style={{ display: createdSandwich ? '' : 'none' }}>
            <h2>{`${createdSandwich}`} est modifié avec succés!</h2>
        </div>
    );

    const showLoading = () =>
        loading && (
            <div className="alert alert-success">
                <h2>Loading...</h2>
            </div>
        );

    const redirectUser = () => {
        if (redirectToProfile) {
            if (!error) {
                return <Redirect to="/" />;
            }
        }
    };

    return (
        <Layout2 title="Add a new sandwich" description={`G'day ${user.nom}, ready to add a new sandwich?`}>
            <div className="row">
                <div className="col-md-8 offset-md-2">
                 <div className="outer">
        <div className="inner">
                    {showLoading()}
                    {showSuccess()}
                    {showError()}
                    {newPostForm()}
                    {redirectUser()}
                </div>
            </div></div>
            </div>
        </Layout2>
    );
};
 
export default UpdateSandwich;
