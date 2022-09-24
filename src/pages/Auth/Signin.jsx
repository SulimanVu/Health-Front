import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { authSignIn } from '../../features/applicationSlice';
import styles from './Auth.module.scss'

const SignIn = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch();

    const handleSetName = (e) => {
        setLogin(e.target.value);
    }

    const handleSetPass = (e) => {
        setPassword(e.target.value);
    }

    const handleSignIn = (e) => {
        e.preventDefault();
        dispatch(authSignIn({ login, password }))
        setLogin('');
        setPassword('');
    }

    return (
        <>
            <div className={styles.login}>
                <div className={styles.loginScreen}>
                    <div className={styles.appTitle}>
                        <h1>Вход в аккаунт</h1>
                    </div>
                    <div className={styles.loginForm}>
                        <div className={styles.controlGroup}>
                            <form onSubmit={handleSignIn}>
                                <input
                                    id="login-name"
                                    className={styles.loginField}
                                    type='text'
                                    value={login}
                                    placeholder='Логин'
                                    onChange={handleSetName}
                                />
                            </form>
                        </div>
                        <br />
                        <div className={styles.controlGroup}>
                            <form>
                                <input
                                    id="login-pass"
                                    className={styles.loginField}
                                    type='password'
                                    value={password}
                                    placeholder='Пароль'
                                    onChange={handleSetPass}
                                />
                                <br />
                                <button className={styles.btn} type='submit' onClick={handleSignIn}>Войти</button>
                                <Link className={styles.loginLink} to="#">Забыли свой пароль?</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignIn;