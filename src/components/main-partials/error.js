import React from "react";
import { NavLink } from "react-router-dom";

const ErrorSection = () => {
  return (
    <section className="error">
      <h1 style={{ color: "red" }}>Error</h1>
      <NavLink to="/">back to home</NavLink>
    </section>
  );
};

export default ErrorSection;
