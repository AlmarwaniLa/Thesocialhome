import React from 'react';
import loadingGif from "../images/gif/Loading.gif";
export default function Loading() {
    return (
        <div className="loading">
        <h4> Room Information Loding ... </h4>
       <img src={loadingGif}alt=""/>
        </div>
    );
}

