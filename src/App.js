import React from "react";
import ChatPane from "./components/ChatPane/ChatPane";
import Welcome from "./components/Welcome/Welcome";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const App = () => {
  const name = "Name";

  return (
    <>
      <Header />
        {name ? <ChatPane /> : <Welcome />}
      <Footer />
    </>
  );
};

export default App;
