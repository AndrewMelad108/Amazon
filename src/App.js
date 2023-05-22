import "./App.css";
import Header from "./components/header.jsx";
import Home from "./components/Home.jsx";
import Login from "./components/login.jsx";
import { Route, Routes } from "react-router-dom";
import { React, useEffect } from "react";
import { auth } from "./firebase";
import { useAuth } from "./Context/GlobalState";

function App() {
  const { dispatch } = useAuth();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <Login />
            </>
          }
        />
        <Route
          path="*"
          element={
            <>
              <h1>page not found</h1>
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
