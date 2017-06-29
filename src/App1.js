import React from 'react'
import ReactDOM from 'react-dom'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import {observable, autorun, computed, action, useStrict} from 'mobx'
import {observer} from 'mobx-react'
import {BrowserRouter as Router, HashRouter, Switch, Route, Link} from 'react-router-dom'

import common from './common/style/common.css'

// export default class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             items: ['hello', 'world', 'click', 'me']
//         };
//         this.handleAdd = this.handleAdd.bind(this);
//     }
//
//     /**
//        * 添加一个元素
//        */
//     handleAdd() {
//         const newItems = this.state.items.concat([prompt('Enter some text')]);
//         this.setState({items: newItems});
//     }
//
//     /**
//       * 移除某一个元素。然后导致我们的组件reRender,对于我们要移除的那个DOM，我们会
//       * 首先添加example-enter和example-enter-active。这是通过我们的key来判断的
//       */
//     handleRemove(i) {
//         let newItems = this.state.items.slice();
//         newItems.splice(i, 1);
//         this.setState({items: newItems});
//     }
//
//     render() {
//         const items = this.state.items.map((item, i) => (
//             <div key={item} onClick={() => this.handleRemove(i)}>
//                 {item}
//             </div>
//         ));
//
//         return (
//             <div>
//                 <button onClick={this.handleAdd}>Add Item</button>
//                 <CSSTransitionGroup transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={300} transitionAppear={true} transitionAppearTimeout={500}>
//                     {items}
//                 </CSSTransitionGroup>
//             </div>
//         );
//     }
// }

export default class App extends React.Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <CSSTransitionGroup transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={300} transitionAppear={true} transitionAppearTimeout={500}>
                        <Route exact path="/" component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="/topics" component={Topics}/>
                    </CSSTransitionGroup>
                </div>
            </HashRouter>
        )
    }
}

const Home = () => (
    <div>
        <h2>首页1</h2>
        <ul>
            <li>
                <Link to="/">首页</Link>
            </li>
            <li>
                <Link to="/about">关于</Link>
            </li>
            <li>
                <Link to="/topics">主题列表</Link>
            </li>
        </ul>
    </div>
)

const About = () => (
    <div className="red">
        <h2>关于</h2>
    </div>
)

const Topics = ({match}) => (
    <div>
        <h2>主题列表</h2>
        <ul>
            <li>
                <Link to={`${match.url}/rendering`}>
                    使用 React 渲染
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/components`}>
                    组件
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/props-v-state`}>
                    属性 v. 状态
                </Link>
            </li>
        </ul>

        <Route path={`${match.url}/:topicId`} component={Topic}/>
        <Route exact path={match.url} render={() => (
            <h3>请选择一个主题。</h3>
        )}/>
    </div>
)

const Topic = ({match}) => (
    <div>
        <h3>{match.params.topicId}</h3>
    </div>
)

ReactDOM.render(
    <App/>, document.getElementById('app'));
