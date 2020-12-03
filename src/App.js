import React, {Component} from 'react';
import UserComponents from "./components/user/UserComponents";
import {users} from "./components/user/Users";


class App extends Component {

    render() {
        return (
            <div>
				{
					users.map((user, index) => {
						return (<UserComponents user={user} key={index}/>)
					} )
				}
            </div>
        );
    }
}

export default App;