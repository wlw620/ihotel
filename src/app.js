import React from 'react'
import ReactDOM from 'react-dom'
import {observable, autorun, computed, action, useStrict} from 'mobx'
import {observer} from 'mobx-react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

// import Index from './pages/index/index';
class Index extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path='/' component={Home}/>
                    <Route path='/about' component={About}/>
                    <Route path='/img' component={Img}/>
                </Switch>
            </div>
        )
    }
}
const Home = () => (
    <div>
        <Link to='/about'>123</Link><br/>
        <Link to='/img'>222</Link>
    </div>
);

const About = () => (
    <div>about</div>
);

const Img = () => (
    <div>img</div>
);

const Basic = () => (
    <Router>
        <Route component={Index}/>
    </Router>
);

ReactDOM.render(
    <Basic/>, document.getElementById('app'));
