import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import { desc } from './data';
import tech from './data';
import { headstyle } from './data';
import { Navbar } from './component/functionalComponent';
import { Footer } from './component/classBasedComponent';


// elements --> tag----> root
// React js: avoid using var use only const and var.





const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
  <Navbar></Navbar>
    <h1 align="center" className='heading' style={headstyle}>{tech} is super easy</h1>
    <p>{desc}</p>
    <Footer/>
  </>

)
