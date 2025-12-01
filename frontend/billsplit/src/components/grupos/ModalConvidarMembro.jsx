import { useContext } from "react";
import { GrupoContext } from "../../contexts/grupoContext";

function ModalConvidarMembro({click}) {
const {handleChange, state, grupoAdd} = useContext(GrupoContext)  
  return (
    
    <div>
    
      <button
        className="btn"
        onClick={click}
      >
        Adicionar
      </button>
      <dialog id="my_modal_6" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Adicionar Membro!</h3>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4 ">
            <legend className="fieldset-legend">Email</legend>
            <div className="join">
              <input
                type="text"
                className="input join-item"
                placeholder="email@exemplo.com"
                name="email"
                onChange={handleChange}
                value={state.email}
                
              />
              <button className="btn join-item" onClick={() => grupoAdd()}>Adicionar</button>
            </div>
          </fieldset>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default ModalConvidarMembro;
