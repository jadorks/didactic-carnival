import React from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import "./App.css";
import Footer from "./components/common/footer";
import GlobalLayout from "./layouts/global-layout";
import Home from "./pages/home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="*" element={<Navigate replace to="/" />} />

          <Route path="/" element={<GlobalLayout />}>
            <Route path="" element={<Home />} />
          </Route>
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
