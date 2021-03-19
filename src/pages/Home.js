import React from 'react';
import {Link} from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";

export default function Home() {
    return(
        <>
         <Hero>
    <Banner title="We are here to Help"
     subtitle="affordable temporary housing for families and individuals">
    <Link to="/rooms" className="btn-primary">
    Find a place 
    </Link>
    </Banner>
    </Hero>
    <Services/>
    <FeaturedRooms/>
    </>
    );
}
  