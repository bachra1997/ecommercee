import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout2 from '../core/Layout2';
import { signup } from '../auth';


const Signup = () => {
    const [values, setValues] = useState({
        nom: '',
        email: '',
        password: '',
        error: '',
        success: false
    });

    const { nom, email, password, success, error } = values;

    const handleChange = nom => event => {
        setValues({ ...values, error: false, [nom]: event.target.value });
    };

    const clickSubmit = event => {
        event.preventDefault();
        setValues({...values, error: false });
        signup({nom,email,password} ).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error, success: false });
            } else {
                setValues({
                    ...values,
                    nom: '',
                    email: '',
                    password: '',
                    error: '',
                    success: true
                });
            }
        });
    };

    const signUpForm = () => (
        <div className="outer">
        <form>
        <h3>Register</h3>
            <div className="form-group">
                <label className="text-muted">Nom</label>
                <input onChange={handleChange('nom')} type="text" className="form-control" value={nom} />
            </div>

            <div className="form-group">
                <label className="text-muted">Email</label>
                <input onChange={handleChange('email')} type="email" className="form-control" value={email} />
            </div>

            <div className="form-group">
                <label className="text-muted">Password</label>
                <input onChange={handleChange('password')} type="password" className="form-control" value={password} />
            </div><br /><center>
            <button  onClick={clickSubmit} className="btn btn-dark btn-lg btn-block">
                Sajjalni
            </button></center>
        </form>
        </div>
    );

    const showError = () => (
        <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    );

    const showSuccess = () => (
        <div className="alert alert-info" style={{ display: success ? '' : 'none' }}>
            New account is created. Please <Link to="/signin">Signin</Link>
        </div>
    );

    return (
   <div>
        <Layout2
            title="Signup"
            description=""
            className="container col-md-8 offset-md-2"
        > 
        <div className="outer">
        <div className="inner">
            {showSuccess()}
            {showError()}
            {signUpForm()}
        
        </div></div></Layout2></div>
    );
};

export default Signup;
