import React, { useState } from "react";
import classes from "./Login.module.css";
import Model from "./Model";
import { Link, Form, redirect } from "react-router-dom";


function Login(props) {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit () {
        const data = {
            'name': name,
            'password': password
        };
        console.log(data);
        fetch("http://localhost:8080/login", {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({asdf: "asdfadsf"})
        });
        // console.log('response', response);
        // props.setLogin(true);
    }

    return (
        <Model>
            <Form
                className={classes.form}
                onSubmit={handleSubmit}
            >
                <p>
                <label>Username</label>
                <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} required />
                </p>
                <p>
                <label>Password</label>
                <input type="text" id="password" value={password} onChange={e => setPassword(e.target.value)} required />
                </p>
                <p className={classes.actions}>
                <button type="submit">Submit</button>
                </p>
            </Form>
        </Model>
    );
}

export default Login;