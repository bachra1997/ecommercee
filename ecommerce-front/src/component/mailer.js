import React, { useState, useEffect } from 'react';
import Layout2 from '../core/Layout2';
import { isAuthenticated } from '../auth';
import { Link, Redirect } from 'react-router-dom';
import "../Style5.css";
import emailjs from 'emailjs-com';
const Mailer =()=> {
	function sendEmail(e){
		e.preventDefault();
		emailjs.sendForm()
	}
    return (
        <Layout2>
       <section id="contact">
      <center> <h3> Réclamation</h3></center><br/>
					<div class="content">
						<div id="form">
							<form action="" id="contactForm" method="post" onSubmit={sendEmail}>
								<span>Nom</span>
								<input type="text" name="name" class="name" placeholder="Enter votre nom" />
								<span>Email</span>
								<input type="text" name="email" class="email" placeholder="Enter votre email"  />
								<span id="captcha"></span>
								
								<textarea class="message" placeholder="Entrer votre message" ></textarea>
								<input type="submit" name="submit" value="Envoyer" class="submit" />
							</form>
						</div></div>
			</section>
       </Layout2>
    );
};

export default Reclamation;