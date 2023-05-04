/* eslint-disable no-unused-vars */
import React from "react";
import "./App.css";
import UserCard from "./components/User Card/UserCard";
import UserList from "./components/User List/UserList";

function App() {
  return (
    <div className="App">
      <div className="container">
        <UserList />
        <UserCard />
      </div>
    </div>
  );
}

export default App;
