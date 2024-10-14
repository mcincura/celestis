import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../components/navbar';

const App = () => {
    return(
        <Router>
            <div className='main-content'>
                <Navbar/>
            </div>
        </Router>
    )
};

export default App