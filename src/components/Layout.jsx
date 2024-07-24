import React from "react";
import { Routes, Route, Link, Outlet, NavLink } from "react-router-dom";
const Layout = () => {
  return (
    <div>
      <header>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/posts">Blog</NavLink>
        <NavLink to="/about">About</NavLink>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>CopyRight 2024</footer>
    </div>
  );
};

export default Layout;
