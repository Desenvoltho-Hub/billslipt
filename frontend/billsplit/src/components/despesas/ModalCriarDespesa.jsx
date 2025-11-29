import { useContext, useEffect } from "react";
import { GrupoContext } from "../../contexts/grupoContext";

function ModalCriarDespesa({
  fail,
  tituloChange,
  tituloValue,
  totalChange,
  totalValue,
  criar,
}) {
  const { state, grupoFind } = useContext(GrupoContext);
useEffect(() => {
    grupoFind()
}, [])

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
          <fieldset className="fieldset bg-base-200 border-base-300  w-full border p-4 ">
            <label className="label">Título</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Título"
              onChange={tituloChange}
              name="titulo"
              value={tituloValue}
            />

            <label className="label">Descrição</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Novo grupo"
              onChange={totalChange}
              name="total"
              value={totalValue}
            />
            <select defaultValue="" className="select select-ghost">
              <option disabled={true}>Grupo</option>
              {state.grupos?.map((g) => (
                <option key={g.id}>{g.name}</option>
              ))}
            </select>
          </fieldset>
          <button className="btn btn-primary w-full" onClick={criar}>
            Criar
          </button>
          {fail && (
            <div>
              <h1>Não foi possível criar o grupo. Tente novamente...</h1>
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

export default ModalCriarDespesa;
