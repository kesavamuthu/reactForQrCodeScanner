import React from "react";
import NavBar from "./nav";
import AdminProductInput from "./adminProductInput";

class Homepage extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <AdminProductInput />
      </>
    );
  }
}

export default Homepage;
