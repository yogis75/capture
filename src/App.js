import React from "react";
// Global Style
import GlobalStyle from "./components/GlobalStyled";
//import pages
import AboutUs from "./pages/AboutUs";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AboutUs />
    </div>
  );
}

export default App;
