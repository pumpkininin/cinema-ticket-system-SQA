import { useState, useRef, useContext } from 'react';
import {useNavigate} from 'react-router-dom'
import AuthContext from '../../store/auth-context';

import classes from './AuthForm.module.css';

const ChangePasswordForm = () => {
    const passwordInputRef = useRef();
    const newPassInputRef = useRef();
    const confirmPassInputRef = useRef();

    const authCtx = useContext(AuthContext);

    const navigate = useNavigate();

    const forgotPasswordHandler = () => {

    }

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredPassword = passwordInputRef.current.value;
        const enteredNewPass = newPassInputRef.current.value;
        const enteredConfirmPass = confirmPassInputRef.current.value;
        if (enteredNewPass === enteredConfirmPass){
            let url =  "http://127.0.0.1:8080/api/auth/change-password"
        
            fetch(url, {
                method: 'POST',
                body: JSON.stringify({
                    currentPass: enteredPassword,
                    newPass: enteredNewPass,
                }),
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    Authorization: "Bearer " + authCtx.token,
                
                },
            })
                .then(res => {
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
                    authCtx.logout();
                    navigate("/")
                })
                .catch((err) => {
                    alert(err.message)
                })
        } else {
            alert("Two password must be match")
        }
    }

    return (
        <section className={classes.auth}>
            <h1>Change password</h1>
            <form>
                <div className={classes.control}>
                    <label htmlFor='username'>Your Current Pass</label>
                    <input type='text' id='username' ref={passwordInputRef} required />
                </div>
                <div className={classes.control}>
                    <label htmlFor='password'>Your New Password</label>
                    <input type='password' id='password' ref={newPassInputRef} required />
                </div>
                <div className={classes.control}>
                    <label htmlFor='password'>Re-enter password</label>
                    <input type='password' id='password' ref={confirmPassInputRef} required />
                </div>
                <div className={classes.actions}>
                    <button onClick={submitHandler}>Change Password</button>
                    <button
                        type='button'
                        className={classes.toggle}
                        onClick={forgotPasswordHandler}
                    >
                        Forgot password?
                    </button>
                </div>
            </form>
        </section>
    );
};

export default ChangePasswordForm;
