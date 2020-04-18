import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import '../App.css';
export const Header=(props)=> {
    let yourName = 'Amit';
    let name = 'Ram';
    let url = `/about/${yourName}/Trainer`;
    let curl = `/contact?name=${name}&city=Delhi`;
    return (
        <div>
            <NavLink activeClassName='active' to="/" >Home</NavLink> 
            &nbsp;
            <NavLink to={url} >About</NavLink> 
            &nbsp;
            <NavLink to="/news" >News</NavLink> 
            &nbsp;
            <NavLink to={curl} >Contact</NavLink> 
        </div>
    )
}





