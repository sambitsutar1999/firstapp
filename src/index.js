import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import { desc } from './data';
import tech from './data';
import { headstyle } from './data';



// elements --> tag----> root
// React js: avoid using var use only const and var.



const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <h1 align="center" className='heading' style={headstyle}>{tech} is super easy</h1>
    <p>{desc}</p>
  </>

)
