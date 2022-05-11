import { useState, useRef, useContext } from 'react';
import AuthContext from '../../store/auth-context';

import classes from './AuthForm.module.css';

const AuthForm = () => {
    const usernameInputRef = useRef();
    const passwordInputRef = useRef();

    const authCtx = useContext(AuthContext);



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
            url = "login"
        } else {
            url = "login"
        }
        fetch(url, {
            method: 'POST',
            body: MediaKeySession.stringify({
                username: enteredUsername,
                password: enteredPassword,
                returnSecureToken: true,
            }),
            headers: {
                'Content-Type': 'application/json'
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
            .then((date) => {
                console.log(data);
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
                    <input type='text' id='username' required />
                </div>
                <div className={classes.control}>
                    <label htmlFor='password'>Your Password</label>
                    <input type='password' id='password' required />
                </div>
                <div className={classes.actions}>
                    <button>{isLogin ? 'Login' : 'Create Account'}</button>
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
