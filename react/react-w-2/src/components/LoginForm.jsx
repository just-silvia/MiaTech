import React, { useState } from "react";

const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    };

    return(
        <>
            <form>
                <label>Username</label>
                <input type="text" value={username} onChange={handleUsernameChange} required />
                <label>Password</label>
                <input type="text" value={password} onChange={handlePasswordChange} required />
            </form>
        </>
    )
}

export default LoginForm;