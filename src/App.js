import "./App.css";
import Header from "./components/header.jsx";
import Login from "./components/login.jsx";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
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
