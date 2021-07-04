import React, { useState, useEffect } from 'react';
import Layout2 from '../core/Layout2';
import { isAuthenticated } from '../auth';
import { Link } from 'react-router-dom';
import { createSandwich, getCategories } from './apiAdmin';

const AddSandwich = () => {
    const [values, setValues] = useState({
        name: '',
        description: '',
        price: '',
        categories: [],
        category: '',
        shipping: '',
        quantity: '',
        photo: '',
        loading: false,
        error: '',
        createdSandwich: '',
        redirectToProfile: false,
        formData: ''
    });

    const { user, token } = isAuthenticated(); 
    const {
        nom,
        description,
        price,
        categories,
        category,
        shipping,
        quantity,
        photo,
        loading,
        error,
        createdSandwich,
        redirectToProfile,
        formData
    } = values;

    // load categories and set form data
  

    useEffect(() => {
    
 setValues({
                    ...values,
                    
                    formData: new FormData()
                });

    }, []);

    const handleChange = nom => event => {
        const value = nom === 'photo' ? event.target.files[0] : event.target.value;
        formData.set(nom, value);
        setValues({ ...values, [nom]: value });
    };

    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: '', loading: true });

        createSandwich(user._id, token, formData).then(data => {
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
            <h3>Ajouter un Sandwich</h3>
            <h5>photo</h5>
             <div className="form-group">
                <label className="btn btn-secondary">
                    <input onChange={handleChange('photo')} type="file" name="photo" accept="image/*" />
                </label>
            </div>

            <div className="form-group">
                <label className="text-muted">Nom boisson</label>
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
            </div><br /><center>

            <button className="btn btn-outline-primary">Ajouter à la Carte Sandwich</button></center>
        </form>
    );

    const showError = () => (
        <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    );

    const showSuccess = () => (
        <div className="alert alert-info" style={{ display: createdSandwich ? '' : 'none' }}>
            <h2>{`${createdSandwich}`} est ajouté avec succèes!</h2>
        </div>
    );

    const showLoading = () =>
        loading && (
            <div className="alert alert-success">
                <h2>Loading...</h2>
            </div>
        );

    return (
        <Layout2 title="Ajouter un Sandwich" description={`Bonjour${user.nom}, pret pour ajouter un boisson?`}>
            <div className="row">
                <div className="col-md-8 offset-md-2">
                 <div className="outer">
        <div className="inner">
                    {showLoading()}
                    {showSuccess()}
                    {showError()}
                    {newPostForm()}
                </div>
            </div></div>
            </div>
        </Layout2>
    );
};

export default AddSandwich;
