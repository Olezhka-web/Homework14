import React, {Component} from 'react';

class UserComponents extends Component {
    render() {
        let {user} = this.props
        return (
            <div>
                {user.name}-{user.age}-{user.status.toString()}
            </div>
        );
    }
}

export default UserComponents;