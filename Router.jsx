import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router";
// import Product from "./src/ShoopingApp/Product";
import Navbar from "./src/components//Navbar";
import ShoppingApp from "./src/ShoopingApp/ShoopingApp";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="myapp" element={<RouteLayout />}>
          <Route path="shop" element={<ShoppingApp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function RouteLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default Router;
