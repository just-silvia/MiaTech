import React, { useState } from "react";

const LoginFormSubmit = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        alert(`Username: ${username}, Password: ${password}`);
    }
 
    return(
        <>
            <form onSubmit={handleSubmit}>
                <label>Username</label>
                <input type="text" value={username} onChange={handleUsernameChange} required />
                <label>Password</label>
                <input type="text" value={password} onChange={handlePasswordChange} required />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default LoginFormSubmit;