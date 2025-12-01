import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/authContext";


function NavBar() {
  const {state, userGet} = useContext(AuthContext)

  useEffect(() => {
    userGet()
  }, [])
  return (
    <div className="flex bg-base-300">
      <div className="w-20 m-7 hover-3d">
        <Link to='/dashboard'><img src="../public/logobillsplit.png" alt="" /></Link>
      </div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
          </div>
          <h1 className="text-5xl">{state.usuario.name}</h1>
        </div>
       
        <div className="navbar-end">
          <a className="btn">Logout</a>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
