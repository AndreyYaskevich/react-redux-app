import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './components/App';
import './index.css';
import CoursesProvider from './contexts/courses';

render(
  <CoursesProvider>
    <Router>
      <App />
    </Router>
  </CoursesProvider>,
  document.getElementById('app')
);
