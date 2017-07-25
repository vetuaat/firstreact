import React from 'react';
import HelloWorld from './HelloWorld'
import './App.css'



const App = () => {
    return (
        <div className ="App">
            <HelloWorld name = 'Reni'/>
            <HelloWorld name = 'Tomi'/>

        </div> 
    );
}

export default App;