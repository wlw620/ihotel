import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, HashRouter, Switch, Route, Link} from 'react-router-dom'
import HomeTabComponent from './HomeTabComponent'
import TourTabComponent from './TourTabComponent'

const IndexComponent = () => (
    <div className="g_flex index">
        <HashRouter>
            <div>
                <section className="idx_head">
                    <ul className="m_tab">
                        <li className="item">
                            <Link to="/home">
                                国内酒店
                            </Link>
                        </li>
                        <li className="item">
                            <Link to="/tour">
                                旅游度假
                            </Link>
                        </li>
                    </ul>
                </section>
                <div className="page-content">
                    <Route path="/home" component={HomeTabComponent}/>
                    <Route path="/tour" component={TourTabComponent}/>
                </div>
            </div>
        </HashRouter>
    </div>
);

export default IndexComponent;

// class IndexReactComponent extends React.Component {
//     render() {
//         return (
//             <div>Index2</div>
//         )
//     }
// };
// export default IndexReactComponent;
