import { useContext, useEffect } from "react";
import Cadastrese from "../components/home/Cadastrese";
import CardAbout from "../components/home/CardAbout";
import { AuthContext } from "../contexts/authContext";

function Home() {
  const { state, handleChange, userRegister, userLogin } = useContext(AuthContext);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 ">
      <div className="p-10">
        <CardAbout />
      </div>
      <div className="col-span-2 p-10">
        <Cadastrese
          nameChange={handleChange}
          emailChange={handleChange}
          passwordChange={handleChange}
          cadastrar={() => userRegister()}
          login={() => userLogin()}
          nameValue={state.name}
          emailValue={state.email}
          passwordValue={state.password}
          statusFail={state.fail}
          statusSuccess={state.success}
          statusFailLogin={state.failLogin}
        
        />
      </div>
      <div className=" md:col-span-3">
        <img src="explicacao.png" alt="" />
      </div>
    </div>
  );
}

export default Home;
