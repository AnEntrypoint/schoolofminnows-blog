import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { createRoot } from 'react-dom/client';

import './style.css'
import Profile from './views/profile'
import Home from './views/home'
import BlogPost from './views/blog-post'
import provider from "./provider.js";

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={Profile} provider={provider} path="/profile" />
        <Route exact component={Home} provider={provider} path="/" />
        <Route exact component={BlogPost} provider={provider} path="/blog-post" />
      </div>
    </Router>
  )
}

const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);