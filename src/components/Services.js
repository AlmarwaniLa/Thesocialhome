import React, { Component } from 'react';
import { FaHeart, FaHands, FaChalkboardTeacher } from "react-icons/fa";
import Title from './Title';
export default class Services extends Component {
    state = {
        services: [ 
{
icon: <FaChalkboardTeacher/>,
title:"Connection",
info: 
"The social Home is a website to helps social workers  find temporary housing for newcomers and allows homeowners to get a temporary renters. "

},
{
    icon:<FaHeart/>,
    title:"Comfort",
    info: "From an experience, we know that legal document takes from 3-6 months, so the temporary housing is an option till newcomers can stand comfortably on their own feet."
},
{

    icon:<FaHands/>,
    title:"Safety",
    info: "We make sure to screen applicants. This is why we have an application process to assure that homeowners and renters are happy and safe."
  }
]
};
render() {
return (
  <section className="services">
    <Title title="About Us" />
    <div className="services-center">
      {this.state.services.map(item => {
        return (
          <article key={`item-${item.title}`} className="service">
            <span>{item.icon}</span>
            <h6>{item.title}</h6>
            <p>{item.info}</p>
          </article>
        );
      })}
    </div>
  </section>
);
}
}
