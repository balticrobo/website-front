import React from 'react';
import './App.css';
import {
  BrowserRouter, Route, Link, Switch
} from 'react-router-dom';
import logo from './BBR_logo_sam_tekst.svg';

const SiteNav = () => (
  <ul>
    <li>
      <Link to='/'>Główna</Link>
    </li>
    <li>
      <Link to='/rules'>Regulaminy</Link>
    </li>
    <li>
      <Link to='/partners'>Partnerzy</Link>
    </li>
  </ul>
);

const Index = () => (
  <div>
    <span>Główna</span>
  </div>
);

const Rules = () => (
  <div>
    <span>Regulaminy</span>
  </div>
);

const Partners = () => (
  <div>
    <span>Partnerzy</span>
  </div>
);

const NoMatch = () => (
  <div>
    <span>404</span>
  </div>
);

const App = () => (
  <BrowserRouter>
    <div>
      <div className='header-bar'>
        <div id='header-container'>
          <img src={logo} id='logo' alt='Bałtyckie Bitwy Robotów' />
          <SiteNav />
        </div>
      </div>
      <div className='content'>
        <div id='content-container'>
          <Switch>
            <Route path='/' exact component={Index} />
            <Route path='/rules' component={Rules} />
            <Route path='/partners' component={Partners} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </div>
      <div className='footer' />
    </div>
  </BrowserRouter>
);

export default App;
