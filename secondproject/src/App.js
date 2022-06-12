import React from 'react';
import Header from './components/Header';
import './App.css';
import About from './components/About';
import Shop from './components/Shop';
import Menu from './components/Menu';
import Clients from './components/Clients';
import Form from './components/Form';
import Prices from './components/Prices';
export default function App() {
    return (
        <div>
        <Header/>
        <About/>
        <Shop/>
        <Menu/>
        <Clients/>
        <Form/>
        <Prices/>
        </div>
    )
}
