import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";

import { storeToLocalStorage } from "../../utils/localStorageService";
import "./Welcome.css";

const Welcome = ({ callback }) => {
    const [username, setUsername] = useState('');
    const [hasError, setHasError] = useState(false);

    const handleClick = () => {
        if ((username === 'superhero1' || username === 'superhero2' || username === 'superhero3' || username === 'superhero4' || username === 'superhero5')) {
            setHasError(false);

            storeToLocalStorage('username', username);
            callback();
        } else {
            setHasError(true);
        }
    };

    return (
        <>
            <div className="welcome-screen">
                <form onSubmit={handleClick}>
                    <div className="form-group">
                        <div>
                            {hasError &&
                            <div className="error">User not authenticated. Please use one of the already registered usernames, e.g.
                                "superhero1"</div>}
                            <label htmlFor="username">Enter your name</label>
                        </div>
                        <TextField
                            name="username"
                            id="outlined-name"
                            label="Name"
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
        </>
    );
};

export default Welcome;
