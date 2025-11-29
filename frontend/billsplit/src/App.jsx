import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      
          <Route path="/dashboard" element={
            <>
            <NavBar />
            <Dashboard />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
