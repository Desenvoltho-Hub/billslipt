import {BanknoteArrowUp} from 'lucide-react'
import TableAdicionarPagantes from './TableAdicionarPagantes';
function ModalAdicionarPagantes() {
  return (
    <div>
    
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        <BanknoteArrowUp />
      </button>
      <dialog id="my_modal_5" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Adiconar pagantes!</h3>
        <TableAdicionarPagantes/>
          <div className="modal-action">
            <button className='btn btn-primary'>Adicionar</button>
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
