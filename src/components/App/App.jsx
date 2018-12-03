import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import {
  BrowserRouter, Route, Link, Switch
} from 'react-router-dom';
import logo from './BBR_logo_sam_tekst.svg';

const TitleHeader = ({ headerText }) => (
  <div className='title-block'>
    <span>
      {headerText}
    </span>
  </div>
);

TitleHeader.propTypes = {
  headerText: PropTypes.string.isRequired
};

const SiteNav = () => (
  <div>
    <ul>
      <li>
        <Link to='/'>Główna</Link>
      </li>
      <li>
        <Link to='/event/rules'>Regulaminy</Link>
      </li>
      <li>
        <Link to='/partners'>Partnerzy</Link>
      </li>
    </ul>
  </div>
);

const Index = () => (
  <div>
    <TitleHeader headerText='Główna' />
  </div>
);

const Rules = () => (
  <div>
    <TitleHeader headerText='Regulaminy' />
  </div>
);

const Partners = () => (
  <div>
    <TitleHeader headerText='Partnerzy' />
  </div>
);

const NoMatch = () => (
  <div>
    <TitleHeader headerText='404' />
  </div>
);

const App = () => (
  <BrowserRouter>
    <div>
      <div className='header-bar'>
        <div id='header-container'>
          <Link to='/'><img src={logo} id='logo' alt='Bałtyckie Bitwy Robotów' /></Link>
          <SiteNav />
        </div>
      </div>
      <div className='content'>
        <div id='content-container'>
          <Switch>
            <Route path='/' exact component={Index} />
            <Route path='/event/rules' component={Rules} />
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
