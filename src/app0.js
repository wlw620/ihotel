import React from 'react';
import ReactDOM from 'react-dom';
import {observable, autorun, computed, action, useStrict} from 'mobx';
import {observer} from 'mobx-react';
import {Router, Route, Link} from 'react-router';

useStrict(true);

class MyState {
    @observable num = 0;
    @action addNum = () => {
        this.num++;
    };
}

const newState = new MyState();

@observer
class App extends React.Component {
    render() {
        return (
            <div>
                <p>{newState.num}</p>
                <button onClick={newState.addNum}>+1</button>
            </div>
        )
    }
};

ReactDOM.render(
    <App/>, document.getElementById('app'));
