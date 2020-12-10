import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import AllPost from "./components/all-posts/AllPost";
import AllComment from "./components/all-comments/AllComment";
class App extends Component {

    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to={'/posts'}>All posts</Link>
                        </li>
                        <li>
                            <Link to={'/comments'}>All comments</Link>
                        </li>
                    </ul>
                    <hr/>
                        <Switch>
                            <Route path={'/posts'} render={()=><AllPost/>}/>
                            <Route path={'/comments'} render={()=><AllComment/>}/>
                        </Switch>
                    <hr/>
                </div>
            </Router>
        );
    }
}

export default App;