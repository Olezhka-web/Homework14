import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";


export default function App(){
    const users = useSelector(({id, name, username}) => ({id, name, username}));
    useEffect(()=> {
        fetch(`https://jsonplaceholder.typicode.com/users/${users.id}`)
            .then(value => value.json())
            .then(value => dispatch({type: 'SET_ACTION', payload: value}));
    }, [users.id]);
    const dispatch = useDispatch();
    return(
        <div>
            <button onClick={()=> dispatch({type: 'ID_INCREMENT'})}>Next User</button>
            <button onClick={()=> dispatch({type: 'ID_DECREMENT'})}>Previous User</button>
            <button onClick={() => dispatch({type: 'CHANGE_NAME', payload: 'Hello'})}>Change Name</button>
            <button onClick={() => dispatch({type: 'CHANGE_USERNAME', payload: 'World'})}>Change Username</button>
            <h1>Id: {users.id}</h1>
            <h1>Name: {users.name}</h1>
            <h1>Username: {users.username}</h1>
        </div>
    );
};
