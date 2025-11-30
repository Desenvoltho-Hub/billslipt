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

export default ModalAdicionarPagantes;
