// login page
// we need to create a login page
// when clicking on the login button, the login page will pop up
// the login page will have a form with a mobile number input
// when the user enters the mobile number and clicks on the login button, the login page will close and the user will be redirected to the order page
import React, { useState } from 'react';

const Login = () => {
    const [mobile, setMobile] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform authentication here, e.g., sending a request to a server
        console.log(`Mobile number: ${mobile}`);
    };
    return (
        <div className='login-page'>
                <h1>Welcome to Fancy Artsy</h1>
                <p>Please enter your mobile number to login</p>
                <form onSubmit={handleSubmit}>
                    <input
                        type="tel"
                        id="mobile"
                        placeholder="Enter your mobile number"
                        value={mobile}
                        onChange={(event) => setMobile(event.target.value)}
                    />
                    <button type="submit">Login</button>
                </form>
        </div>
    );
}

export default Login;