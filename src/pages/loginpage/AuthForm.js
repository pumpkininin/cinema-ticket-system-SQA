import { useState, useRef, useContext } from 'react';
import {useNavigate} from 'react-router-dom'
import AuthContext from '../../store/auth-context';

import classes from './AuthForm.module.css';

const AuthForm = () => {
    const usernameInputRef = useRef();
    const passwordInputRef = useRef();

    const authCtx = useContext(AuthContext);

    const navigate = useNavigate();

    const [isLogin, setIsLogin] = useState(true);
    const [isLoading, setIsLoading] = useState(true);;

    const switchAuthModeHandler = () => {
        setIsLogin((prevState) => !prevState);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredUsername = usernameInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        setIsLoading(true);
        let url;
        if (isLogin) {
            url = "http://127.0.0.1:8080/api/auth/login"
        } else {
            url = "http://127.0.0.1:8080/api/auth/signup"
        }
        
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                username: enteredUsername,
                password: enteredPassword
            }),
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            
            },
        })
            .then((res) => {
                setIsLoading(false);
                if (res.ok) {
                    return res.json();
                } else {
                    return res.json().then((data) => {
                        let errorMessage = "Authentication failed";
                    })
                }
            }
            )
            .then((data) => {
                authCtx.login(data.jwt);
                navigate("/")
            })
            .catch((err) => {
                alert(err.message)
            })
    }

    return (
        <section className={classes.auth}>
            <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
            <form>
                <div className={classes.control}>
                    <label htmlFor='username'>Your Username</label>
                    <input type='text' id='username' ref={usernameInputRef} required />
                </div>
                <div className={classes.control}>
                    <label htmlFor='password'>Your Password</label>
                    <input type='password' id='password' ref={passwordInputRef} required />
                </div>
                <div className={classes.actions}>
                    <button onClick={submitHandler}>{isLogin ? 'Login' : 'Create Account'}</button>
                    <button
                        type='button'
                        className={classes.toggle}
                        onClick={switchAuthModeHandler}
                    >
                        {isLogin ? 'Create new account' : 'Login with existing account'}
                    </button>
                </div>
            </form>
        </section>
    );
};

export default AuthForm;
