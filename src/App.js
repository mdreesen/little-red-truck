import React from "react";
import { Route } from 'react-router-dom';
import './index.css';
import './styles.css';

// importing components
import Navbar from './components/Navbar';
import Home from './components/Home'
import Contact from './components/Contact';
import Price from './components/Pricing';
import Contract from './components/Contact';

export default function App() {
  return (
      <div>
      <Navbar />
        <section>
          <Route exact path='/' component={Home}/>
          <Route exact path='/contact' component={Contact}/>
          <Route exact path='/pricing' component={Price}/>
          <Route exact path='/contract' component={Contract}/>
        </section>
    </div>
  );
}