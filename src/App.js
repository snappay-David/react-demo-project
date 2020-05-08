import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Main from './Main/main'
import Sub from './Sub/sub'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Router>
                <Switch>

                    <Route path="/sub">
                        <Sub/>
                    </Route>
                    <Route path="/">
                        <Main/>
                    </Route>

                </Switch>
            </Router>
        );
    }
}

export default App;
