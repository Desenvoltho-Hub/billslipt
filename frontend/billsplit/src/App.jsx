import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Dashboard from "./pages/Dashboard";
import SideBar from "./components/SideBar";
import Grupos from "./pages/Grupos";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/dashboard"
          element={
            <>
              <NavBar />
              <div className="grid grid-cols-2 md:grid-cols-3">
                <div>
                  <SideBar />
                </div>
                <div className="col-span-2">

                <Dashboard />
                
                </div>
              </div>
            </>
          }
        />
        <Route
          path="/grupos"
          element={
            <>
              <NavBar />
              <div className="grid grid-cols-2 md:grid-cols-3">
                <div>
                  <SideBar />
                </div>
                <div className="col-span-2">

                <Grupos />
                
                </div>
              </div>
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
