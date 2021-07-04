import React, { useState, useEffect,useRef } from 'react';
import Layout2 from '../core/Layout2';
import { isAuthenticated } from '../auth';
import { Link, Redirect } from 'react-router-dom';
import "../Style5.css";
import emailjs from 'emailjs-com';
import { send } from 'emailjs-com';


const Reclamation =()=> {
	function sendEmail(e){
		e.preventDefault();
		emailjs.sendForm('service_9xgqzfn',
			'template_u6l8af7',
			e.target,
			"user_igX2PUhOiqdyssqIsrveF").then(res=> {
				console.log(res);
			}).catch(err=>console.log(err));
	}



    return (
        <Layout2>
        <div style={{ 
      
backgroundImage: `url("https://img.freepik.com/photos-gratuite/tranche-pizza-delicieuse-ingredients-fond-bois-texture_23-2147926094.jpg?size=626&ext=jpg")` ,
  backgroundRepeat: 'no-repeat',
   backgroundSize: 'cover',
  
}}>
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
			</div>
			</Layout2>
      
    );
};

export default Reclamation;
