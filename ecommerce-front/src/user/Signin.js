import React, { useState,Component } from "react";
import { Redirect } from "react-router-dom";
import Layout2 from "../core/Layout2";
import { signin ,isAuthenticated ,authenticate} from "../auth";
import "../styleauth.css";
import Button from 'react-bootstrap/Button';

const Signin = () => {
    const [values, setValues] = useState({
        email: "bachraa1997@gmail.com",
        password: "123456789",
        error: "",
        loading: false,
        redirectToReferrer: false
    });

    const { email, password, loading, error, redirectToReferrer } = values;
    const { user } = isAuthenticated();

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
    };

    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: false, loading: true });
        signin({ email, password }).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error, loading: false });
            } else {
                authenticate(data, () => {
                    setValues({
                        ...values,
                        redirectToReferrer: true
                    });
                });
            }
        });
    }; 

    const signUpForm = () => (
        <form>
        <h3>Sign In</h3>
            <div className="form-group">
                <label className="text-muted">Email</label>
                <input
                    onChange={handleChange("email")}
                    type="email"
                    className="form-control"
                    value={email}
                />
            </div>

            <div className="form-group">
                <label className="text-muted">Password</label>
                <input
                    onChange={handleChange("password")}
                    type="password"
                    className="form-control"
                    value={password}
                />
            </div><br /><center>
            <button onClick={clickSubmit} className="btn btn-dark btn-lg btn-block">
                Se Connecter
            </button></center>
        </form>
    );

    const showError = () => (
        <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
        >
            {error}
        </div>
    );

    const showLoading = () =>
        loading && (
            <div className="alert alert-info">
                <h2>Loading...</h2>
            </div>
        );

    const redirectUser = () => {
        if (redirectToReferrer) {
           
         
  if (user && user.role === 1) {
                return <Redirect to="/admin/dashboard" />;
            } else {
                return <Redirect to="/user/dashboard" />;
            }
        }
        if (isAuthenticated()){

return <Redirect to="/" />;

        }
    };



    return (
        <Layout2
            title="Signin"
            description=""
            className="container col-md-8 offset-md-2"
        > <div className="outer">
        <div className="inner">
            {showLoading()}
            {showError()}
            {signUpForm()}
            {redirectUser()}
       </div></div> </Layout2>
    );
};

export default Signin;
