import React, {Component} from 'react';
import {UserService} from "../../services/UserService";
import User from "../user/User";

class Form extends Component {
    userService = new UserService();
    state = {inputValue: '', findUser: null};
    render() {
        let {findUser} = this.state;
        return (
            <div>
                <form action={'/saveInfo'} onSubmit={this.saveInfo}>
                    <input type="number" onInput={this.commitState} value={this.state.inputValue}/>
                    <button>Send</button>
                </form>
                {findUser && <User item={findUser} key={findUser.id}/>}
            </div>
        );
    }
    saveInfo = (e) =>{
        e.preventDefault();
        this.userService.getUser(e.target[0].value).then(value => this.setState({findUser: value}));
    };
    commitState = (e) =>{
        this.setState({inputValue: e.target.value})
    }
}

export default Form;
