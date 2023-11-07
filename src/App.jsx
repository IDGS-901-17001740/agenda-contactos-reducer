import React from "react";
import Header from "./components/Header";
import Contactos from "./components/Contactos";

const App = () => {
  return (
    <div>
      <React.Fragment>
        <Header />
        <Contactos />
      </React.Fragment>
    </div>
  );
};

export default App;
