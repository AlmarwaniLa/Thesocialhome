import React from 'react';
import Hero from '../components/Hero';
import Banner from "../components/Banner";
import {Link} from "react-router-dom";

export default function NotFound() {
    return  <Hero>
        <Banner title='404' subsitle="Oops Page Not Found ">
        <Link to='/' className="btn-primary">
        Return to Home </Link>
        </Banner>
        </Hero> ;
}
