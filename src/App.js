import React from "react";
import ChatPane from "./components/ChatPane";
import Welcome from "./components/Welcome";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  const name = "Name";

  return (
    <div>
      <Header />
      <div>
        {name ? <ChatPane /> : <Welcome />}
      </div>
      <Footer />
    </div>
  );
};

export default App;
