import React, { Component, useEffect } from "react";
import ReactDOM, { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import Header from "./Extends/Header";
import Footer from "./Extends/Footer";
import reportWebVitals from "./reportWebVitals";
import { Container, Row, Col } from "react-bootstrap";

// IMPORT PAGES
import Aboutus from "./Views/Aboutus/Index";





// NEW
function Main() {
  return (
    <BrowserRouter>
      <header className="pageheader">
        <Header />
      </header>
      <Routes>
        <Route path="/" element={<App />} className="ppp" />
        <Route path="/aboutus" element={<Aboutus />} />
      </Routes>
      <footer>
        <Footer />
      </footer>
    </BrowserRouter>
  );
}
ReactDOM.render(<Main />, document.getElementById("root"));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
