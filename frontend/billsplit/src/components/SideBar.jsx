import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div className="bg-base-200 h-screen  p-10 ">
      <div className=" p-5 text-3xl text-center">
        <Link to='/dashboard'><span>Dashboard</span></Link>
      </div>
      <div className="p-5 text-3xl text-center">
       <Link to='/grupos'><span>Grupos</span></Link> 
      </div>
      <div className="p-5 text-3xl text-center">
       <Link to='/despesas'><span>Despesas</span></Link> 
      </div>
      <div className=" p-5 text-3xl text-center"> 
        <span>Config</span>
      </div>
    </div>
  );
}

export default SideBar;
