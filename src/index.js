import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from "redux";
import {Provider} from "react-redux";
const initialState ={
    id: 1,
    name: '',
    username: ''
}

const reducer = (state = initialState, action) =>{
    switch (action.type){
        case 'SET_ACTION': {
            return action.payload
        }
        case 'ID_INCREMENT': {
            return {...state, id: state.id + 1}
        }
        case 'ID_DECREMENT': {
            return {...state, id: state.id - 1}
        }
        case 'CHANGE_NAME': {
            return {...state, name: action.payload}
        }
        case 'CHANGE_USERNAME':{
            return {...state, username: action.payload}
        }
        default:{
            return state;
        }
    }
}

const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
    <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
