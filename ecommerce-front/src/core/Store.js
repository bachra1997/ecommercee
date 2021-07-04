import React, { useState, useEffect } from 'react';
import Layout2 from '../core/Layout2';
import { isAuthenticated } from '../auth';
import { Link, Redirect } from 'react-router-dom';

const Store =()=> {
    return (
        <Layout2 title="Add a new product" description={` ready to add a new product?`}>
            <div className="row">
                <div className="col-md-8 offset-md-2">
                 <div className="outer">
        <div className="inner">
        <b>
        <center>
                 <h3>Store Ezzahra</h3> 
                  <h5> En face de clinique Ezzahra</h5> 
                  <h6>Tél :20202020</h6>
                  </center></b>

                </div>
           <br/>
        <div className="inner">
        <b>
        <center>
                 <h3>Store La Marsa</h3> 
                  <h5> Rue Mohamed Ali , Marsa</h5> 
                  <h6>Tél :20191919</h6>
                  </center></b>

                </div>
                 <br/>
        <div className="inner">
        <b>
        <center>
                 <h3>Store El Menzah 1</h3> 
                  <h5>En face de la piscine olympique</h5> 
                  <h6>Tél :20000000</h6>
                  </center></b>

                </div>


            </div>


            </div>
            </div>
        </Layout2>
    );
};

export default Store;
