import React from 'react'
import { Route } from 'react-router'

import App from './components/App.jsx';
import HomePage from './components/HomePage.jsx';
import LoginPage from './containers/LoginPage.jsx';
import SignUpPage from './containers/SignUpPage.jsx';
import MentorPage from './components/MentorPage.jsx';
import EventPost from './containers/EventPost.jsx';
import ResourcePost from './containers/ResourcePost.jsx';

export default (
  <Route component={App}>
    <Route path='/' component={HomePage} />
    <Route path="/login" component={LoginPage} />
    <Route path="/signup" component={SignUpPage} />
    <Route path="/profile/*" component={MentorPage} /> 
  </Route>
);