function ModalCadastro({
  nameChange,
  emailChange,
  passwordChange,
  cadastrar,
  nameValue,
  emailValue,
  passwordValue,
  statusSuccess,
  statusFail
}) {
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn btn-primary"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        Começar
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Cadastre-se!</h3>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4 ">
            <label className="label">Nome</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Nome"
              onChange={nameChange}
              name="name"
              value={nameValue}
            />

            <label className="label">Email</label>
            <input
              type="text"
              className="input w-full"
              placeholder="exemplo@email.com"
              onChange={emailChange}
              name="email"
              value={emailValue}
            />

            <label className="label">Password</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Password"
              onChange={passwordChange}
              name="password"
              value={passwordValue}
            />
          </fieldset>
          <button className="btn btn-primary w-full" onClick={cadastrar}>
            Cadastrar
          </button>
          {statusFail && (
            <div>
              <h1 className="badge-accent">
                Não foi possível realizar o cadastro!
              </h1>
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

export default ModalCadastro;
