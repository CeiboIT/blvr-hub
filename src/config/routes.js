import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import MainContainer from '../containers/MainContainer';
import LandingContainer from '../containers/LandingContainer';
import CeiboEditor from '../containers/CeiboEditor';
export default function getRoutes(history){
    return (
        <Router history={history}>
            <Route path='/' component={MainContainer}>
                <Route path='/landing' component={LandingContainer}/>
                <Route path='/editor' component={CeiboEditor}/>
            </Route>
        </Router>
    )
}