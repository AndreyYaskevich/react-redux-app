import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from './home';
import AboutPage from './about';
import Header from './common/header/index';
import PageNotFound from './common/page-not-found/index';
import CoursesPage from './courses/index';
import ManageCoursePage from './courses/manage-course-page/index';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/courses" component={CoursesPage} />
        <Route exact path="/course/:slug" component={ManageCoursePage} />
        <Route exact path="/course/" component={ManageCoursePage} />
        <Route component={PageNotFound} />
      </Switch>
      <ToastContainer autoClose={3000} hideProgressBar />
    </div>
  );
};

export default App;
