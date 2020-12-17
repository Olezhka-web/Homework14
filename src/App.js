import React, {Component} from 'react';


class App extends Component {
    myForm = React.createRef();
    state = {inputValue: '', users: [], findUserApi: []}

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(usersFromAPI => {
                this.setState({users: usersFromAPI});
            });
    }

    render() {
        let {users, findUserApi} = this.state;
        return (
            <div>
                <form action={'/save'} onSubmit={this.send} ref={this.myForm}>
                    <input type={'number'} onInput={this.commitState} value={this.state.inputValue}/>
                    <button>send</button>
                </form>
                <div>
                    {findUserApi.id}-{findUserApi.name}-{findUserApi.username}-{findUserApi.email}
                </div>
            </div>
        );
    }
    send = (e) =>{
        e.preventDefault();
        console.log(this.state.inputValue);
        this.findUser();
    }

    commitState = (e) => {
        this.setState({inputValue: e.target.value})
    }
    findUser = () =>{
        let findUserApi = this.state.users.find(value => value.id.toString() === this.state.inputValue);
        this.setState({findUserApi});
    }
}

export default App;