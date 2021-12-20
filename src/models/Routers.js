import React, { Component } from 'react';
import { Routes ,Route } from 'react-router-dom';
import Part01 from './Part01';
import Part02 from './Part02';
import Part03 from './Part03';
import Part04 from './Part04';
import Part05 from './Part05';
/**
 * @date Dec 19, 2021
 * @author DUC LONG NGUYEN (Paul)
 * @A The router file for each link in the header
 * @returns 
 */

class RouterDemo2 extends Component {
    render() {
        return (    
            <div className='routers'>
                {/*
                A <Switch> looks through all its children <Route>
                elements and renders the first one whose path
                matches the current URL. Use a <Switch> any time
                you have multiple routes, but you want only one
                of them to render at a time
                */}
                <Routes>    
                    <Route path='/' />
                    <Route path='/part01' element={<Part01/>} />
                    <Route path='/part02' element={<Part02/>} />
                    <Route path='/part03' element={<Part03/>} />
                    <Route path='/part04' element={<Part04/>} />
                    <Route path='/part05' element={<Part05/>} />
                </Routes>
            </div>  
        );
    }
}

export default RouterDemo2;
                   
 