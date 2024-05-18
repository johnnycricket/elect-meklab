import React from 'react';
import { HashRouter, Link, Route } from 'react-router-dom';
import RootNav from './navigation/root-nav';

function Meklab() {
    return (
        <HashRouter>
            <RootNav></RootNav>
            <h1>Elect Meklab</h1>
        </HashRouter>
            
        
    )
}

export default Meklab;