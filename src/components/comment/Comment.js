import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
class Comment extends Component {
    render() {
        let {item, match:{url}} = this.props;
        return (
            <div>
                {item.id}-{item.name}-<Link to={url+'/'+item.id}>comment details</Link>
            </div>
        );
    }
}

export default withRouter(Comment);