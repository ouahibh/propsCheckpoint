import "./App.css";
import React from "react";
import Profile from "./profile/profile";

const App = () => {
  return (
    <div className={"contenairGlobal"}>
      <Profile 
        fullname='Sofiane'
        bio='My bio'
        profession= {565}
      />
    </div>
  );
};

export default App;
