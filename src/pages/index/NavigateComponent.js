import React from 'react';
import {BrowserRouter as Router, HashRouter, Switch, Route, Link} from 'react-router-dom'

const NavigateComponent = () => {
    return (
        <div>
            <Link to="/home">1</Link>
            <Link to="/tour">2</Link>
            <HashRouter>
                <Route path="/home" component={HomeTabComponent}/>
                <Route path="/tour" component={TourTabComponent}/>
            </HashRouter>
        </div>
    )
}

export default NavigateComponent;
