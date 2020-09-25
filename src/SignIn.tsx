import React from 'react';
import './SignIn.scss';

export default function SignIn() {
    return <div className="SignIn">
        <p>Start meowing at the world with your awesome photos!</p>

        <form>
        <label>Email</label>
        <input />
        <label>Password</label>
        <input />
        <button className="sign_in_btn">Sign In</button>
        </form>

    </div>
}