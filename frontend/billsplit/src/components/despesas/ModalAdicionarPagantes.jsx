import { BanknoteArrowUp } from "lucide-react";
import TableAdicionarPagantes from "./TableAdicionarPagantes";
import { useContext } from "react";
import { DespesaContext } from "../../contexts/despesaContext";
function ModalAdicionarPagantes({ click }) {
  const { despesaAddParticipantes, state } = useContext(DespesaContext);
  return (
    <div>
      <button className="btn" onClick={click}>
        <BanknoteArrowUp />
      </button>
      <dialog id="my_modal_5" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Adiconar pagantes!</h3>
          <TableAdicionarPagantes />
          <div className="modal-action">
            <button
              className="btn btn-primary"
              onClick={() => despesaAddParticipantes()}
                
            >
              Adicionar
            </button>
            <form method="dialog">
              <button className="btn">Fechar</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default ModalAdicionarPagantes;
