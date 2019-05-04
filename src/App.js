import React from "react";
import ChatPane from "./components/ChatPane/ChatPane";
import Welcome from "./components/Welcome/Welcome";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

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
