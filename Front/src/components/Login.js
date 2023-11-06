import React, { useState } from "react";
import classes from "./Login.module.css";
import Model from "./Model";
import { Link, Form, redirect } from "react-router-dom";


function Login(props) {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [loginFailed, setLoginFailed] = useState(false);

    function handleSubmit (event) {
        event.preventDefault()
        const data = {
            'name': name,
            'password': password
        };
        console.log(data);
        fetch("http://localhost:8080/login", {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
        })
        .then((response) => {
            if (!response.ok) throw Error(response.statusText);
            props.setLogin(true);
        })
        .catch((error) => {
            console.log(error);
            setLoginFailed(true)
        });
    }

    return (
        <div className={classes.login}>
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
                <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} required />
                </p>
                <p className={classes.actions}>
                <button type="submit">Submit</button>
                </p>
            </Form>
            {loginFailed && <div className={classes.loginFailed}>
                <h1>Account Not Found</h1>
            </div>}
        </div>
    );
}

export default Login;