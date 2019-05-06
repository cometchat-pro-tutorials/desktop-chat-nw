import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";

import { storeToLocalStorage } from "../../utils/localStorageService";
import "./Welcome.css";

const Welcome = ({ callback }) => {
    const [username, setUsername] = useState('');

    const handleClick = () => {
        storeToLocalStorage('username', username);
        callback();
    };

    return (
        <div className="welcome-screen">
            <form onSubmit={handleClick}>
                <div className="form-group">
                    <div><label htmlFor="username">Enter your name</label></div>
                    <TextField
                        name="username"
                        id="outlined-name"
                        label="Name"
                        className=""
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        margin="normal"
                        variant="outlined"
                        required
                    />
                </div>
                <div>
                    <Button variant="contained" color="primary" onClick={handleClick}>Enter Chat</Button>
                </div>
            </form>
        </div>
    );
};

export default Welcome;
