function ModalCriarDespesa({
  tituloChange,
  tituloValue,
  totalChange,
  totalValue,
  criar,
  grupoChange,
  idValue,
  grupos,
}) {
  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={() => document.getElementById("my_modal_4").showModal()}
      >
        Nova despesa
      </button>

      <dialog id="my_modal_4" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Criar nova despesa!</h3>
          <fieldset className="fieldset bg-base-200 border-base-300 w-full border p-4">
            <label className="label">Título</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Título"
              name="titulo"
              value={tituloValue}
              onChange={tituloChange}
            />

            <label className="label">Total</label>
            <input
              type="number"
              className="input w-full"
              placeholder="R$"
              name="total"
              value={totalValue}
              onChange={totalChange}
            />

            <label className="label">Grupo</label>
            <select
              className="select select-ghost"
              name="id"
              value={idValue}
              onChange={grupoChange}
            >
              <option value="" disabled>
                Selecione um grupo
              </option>
              {grupos?.map((g) => (
                <option key={g._id} value={g._id}>
                  {g.name}
                </option>
              ))}
            </select>
          </fieldset>

          <button className="btn btn-primary w-full mt-4" onClick={criar}>
            Criar
          </button>

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

export default ModalCriarDespesa;
