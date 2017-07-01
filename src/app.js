import React from 'react'
import ReactDOM from 'react-dom'
import {MuiThemeProvider} from 'material-ui/styles';

import common from './common/style/common.css'
import index from './common/style/index.css'
import IndexComponent from './pages/index/IndexComponent'

const App = () => {
    return (
        <MuiThemeProvider><IndexComponent/></MuiThemeProvider>
    )
}

ReactDOM.render(
    <App/>, document.getElementById('app'));
