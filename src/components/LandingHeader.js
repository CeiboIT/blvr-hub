import React from 'react';
import * as i18n from './LandingHeaderI18n.json';
import './Landing.css'

export default function LandingHeader({language}){
    return(
        <div className="jumbotron">
            <h1>Hello, ReactJS!</h1>
            <p>{i18n[language].title}</p>
            <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
        </div>
    )
}