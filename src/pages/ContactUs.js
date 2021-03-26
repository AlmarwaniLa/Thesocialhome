import emailjs from 'emailjs-com';
import React from "react";
import Hero from '../components/Hero';


export default function ContactUs() {
     
        function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_udyre2r', 'thesocialhome_form', e.target, 'user_xUnYqicwW3psz5lxI7j3j')
        .then(function(response) {
          console.log('SUCCESS!', response.status, response.text);
       }, function(err) {
          console.log('FAILED...', err);
       });
     
        e.target.reset()
    }
    return(
        <Hero>
        
       <center> 
        <div class="container">

        <form onSubmit={sendEmail}>
    <div className="row pt-5 mx-aout">
    <div className="col-5 form-group mx-auto">
    <center>  <label for="aboutme">About Me</label></center>

    <label for="fname">First Name</label>

    <input type="text" className="form-control" placeholder="" name="first_name"/>
    </div>
    <div className="col-8 form-group mx-auto">

    <label for="last_name">Last  Name</label>

    <input type="text" className="form-control" placeholder="" name="last_name"/>
    <label for="email ">email </label>
    <div className="col-8 form-group mx-auto">
    <input type="text" className="form-control" placeholder="example@gmail.com" name="email"/>
    </div>
    <label for="city ">City </label>

    <div className="col-8 form-group mx-auto">
    <input type="text" className="form-control" placeholder="" name="city"/>
    </div>   
     <label for="postal_code ">postal Code </label>

    <div className="col-8 form-group mx-auto">
    <input type="text" className="form-control" placeholder="" name="postal_code"/>
    </div>
    <label for="phone">Phone Number </label>

    <div className="col-3 form-group mx-auto">
    <input type="text" className="form-control" placeholder="" Phone="phone"/>
    </div>
    <label for="occupation">I am a Social worker or a Home owner</label>

    <div className="col-8 form-group mx-auto">
    <input type="text" className="form-control" placeholder=" I am a Social worker " name="occupation"/>
    </div>
    <label for="service">    find a room or rent a room    </label>
    <div className="col-8 form-group mx-auto">
    <input type="text" className="form-control" placeholder="I am Looking for a room" name="service"/>
    </div>

    <label for="message">Leave a detail ,message about your client or your home  </label>

    <div className="col-8 form-group mx-auto">
    <textarea className="form-control" id="" height="200px" row="10" placeholder="" name="message"></textarea>
    </div><center>
    <div className="submit">
   <input  type="submit" id="submit" className="submit" value="send"></input>
    </div>
  
    </center>
    </div>
    </div>
    </form>
    </div>
    </center>
    </Hero>
  
    ); 
}

