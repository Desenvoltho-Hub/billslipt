import { NavLink } from "react-router-dom";

function SideBar() {
  const linkClasses = ({ isActive }) =>
    `p-5 text-3xl text-center block ${
      isActive ? "bg-blue-600 text-white rounded-lg" : "text-gray-700"
    }`;

  return (
    <div className="bg-base-200 h-screen p-10">
      <div className="p-5 text-3xl text-center">
        <NavLink to="/dashboard" className={linkClasses}>
          Dashboard
        </NavLink>
      </div>
      <div className="p-5 text-3xl text-center">
        <NavLink to="/grupos" className={linkClasses}>
          Grupos
        </NavLink>
      </div>
      <div className="p-5 text-3xl text-center">
        <NavLink to="/despesas" className={linkClasses}>
          Despesas
        </NavLink>
      </div>
    </div>
  );
}

export default SideBar;
