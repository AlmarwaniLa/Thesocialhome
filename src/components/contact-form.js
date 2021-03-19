import emailjs from 'emailjs-com';
import React from "react";


export default function ContactUs() {
     
        function sendEmail(e) {
        e.preventDefault();
        emailjs.send('gmail', 'thesocialhome_form', e.target, 'user_xUnYqicwW3psz5lxI7j3j')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }
    return(
    <div className="container">
    <form onSubmit={sendEmail}>
    <div className="row pt-5 mx-aout">
    <div className="col-8 form-group mx-auto">
    <input type="text" className="form-control" placeholder="First Name" firstname="FisrtName"/>
    </div>
    <div className="col-8 form-group mx-auto">
    <input type="text" className="form-control" placeholder="Last Name" lastname="LastName"/>
    <div className="col-8 form-group mx-auto">
    <input type="text" className="form-control" placeholder="Email" Email="Email"/>
    </div>
    <div className="col-8 form-group mx-auto">
    <input type="text" className="form-control" placeholder="City" city="City"/>
    </div>
    <div className="col-8 form-group mx-auto">
    <input type="text" className="form-control" placeholder="Postal Code" PostalCode="PostalCode"/>
    </div>
    <div className="col-8 form-group mx-auto">
    <input type="text" className="form-control" placeholder="Phone" Phone="Phone"/>
    </div>
    
    <div className="col-8 form-group mx-auto">
    <input type="text" className="form-control" placeholder="I am a Social worker or a Home owner" Iama="Iama"/>
    </div>
    <div className="col-8 form-group mx-auto">
    <input type="text" className="form-control" placeholder="I want to help a client to find a home or I want to rent a room out" Iwantto="Iwantto"/>
    </div>
    <div className="col-8 form-group mx-auto">
    <teaxtarea  className="form-control" id="" cols="50" row="10" placeholder="Leave a detail ,essage about your client or your home if you want to submit an application " Iwantto="Iwantto"/>
    </div>
    <div className="col-8 pt-3 mx-auto">
    <input  type="submit" id="" className="btn btn-info" value=" " Iwantto="Iwantto"/>
    </div>
    </div>
    </div>
    </form>
    </div>
    );
    }
    