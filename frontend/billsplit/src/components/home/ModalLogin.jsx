function ModalLogin({
  emailChange,
  passwordChange,
  emailValue,
  login,
  passwordValue,
  statusFailLogin,
}) {
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn btn-primary"
        onClick={() => document.getElementById("my_modal_2").showModal()}
      >
        Login
      </button>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Login!</h3>
          <fieldset className="fieldset bg-base-200 border-base-300  w-full border p-4 ">
            <label className="label">Email</label>
            <input
              type="text"
              className="input w-full"
              placeholder="exemplo@exemplo.com"
              onChange={emailChange}
              name="email"
              value={emailValue}
            />

            <label className="label">Password</label>
            <input
              type="password"
              className="input w-full"
              placeholder="Password"
              onChange={passwordChange}
              name="password"
              value={passwordValue}
            />
          </fieldset>
          <button className="btn btn-primary w-full" onClick={login}>
            Login
          </button>
          {statusFailLogin && (
            <div>
              <h1>Credenciais inválidas</h1>
            </div>
          )}

          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Fechar</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default ModalLogin;
