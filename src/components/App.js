import React from 'react';
import {Route} from 'react-router-dom'
import HomePage from './home';
import AboutPage from './about';

const App = () => {
    return (
        <div className="container-fluid">
            <Route exact path="/" component={HomePage} />
            <Route exact path="/about" component={AboutPage} />
        </div>
    );
}

export default App;