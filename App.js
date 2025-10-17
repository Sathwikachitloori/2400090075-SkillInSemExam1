import React from "react";
import UserCard from "./UserCard";

function App() {
  return (
    <div>
      <UserCard
        name="Ava Bennett"
        age={22}
        bio="A passionate web developer who loves creating interactive and meaningful digital experiences."
      />
    </div>
  );
}

export default App;
