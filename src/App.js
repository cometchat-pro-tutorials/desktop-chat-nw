import React, { useState } from "react";

import ChatPane from "./components/ChatPane/ChatPane";
import Welcome from "./components/Welcome/Welcome";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { readRecord } from "./utils/localStorageService";

const App = () => {
    const [hasName, setHasName] = useState(readRecord('username'));

    const readName = () => {
        setHasName(readRecord('username') !== null);
    };

    return (
        <>
            <Header />
            {hasName ? <ChatPane /> : <Welcome callback={readName} />}
            <Footer />
        </>
    );
};

export default App;
