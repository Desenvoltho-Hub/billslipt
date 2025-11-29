import { Link } from "react-router-dom";
import ModalCadastro from "./ModalCadastro";
import ModalLogin from "./ModalLogin";

function Cadastrese({
  nameChange,
  emailChange,
  passwordChange,
  cadastrar,
  nameValue,
  emailValue,
  passwordValue,
  statusFail,
  login,
  statusSuccess,
  statusFailLogin,
}) {
  return (
    <div>
      <div>
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-7xl font-bold text-accent p-5 bg-base-300 ">
              DIVIDA CONTAS SEM DOR DE CABEÇA!
            </h1>
            <h2 className="text-xl ">
              Crie sua conta grátis e comece a organizar suas despesas com
              amigos em segundos...
            </h2>
            <p className="py-6">Experimente...</p>
            <div className="flex justify-center gap-5">
              <ModalCadastro
                nameChange={nameChange}
                emailChange={emailChange}
                passwordChange={passwordChange}
                cadastrar={cadastrar}
                nameValue={nameValue}
                emailValue={emailValue}
                passwordValue={passwordValue}
                statusFail={statusFail}
                statusSuccess={statusSuccess}
              />
              <ModalLogin
                emailChange={emailChange}
                passwordChange={passwordChange}
                login={login}
                emailValue={emailValue}
                passwordValue={passwordValue}
                statusFailLogin={statusFailLogin}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cadastrese;
