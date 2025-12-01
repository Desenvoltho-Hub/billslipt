import { useContext } from "react";
import { GrupoContext } from "../../contexts/grupoContext";
import ModalConvidarMembro from "./ModalConvidarMembro";

function TableGrupos() {
  const { state, grupoAdd } = useContext(GrupoContext);
  return (
    <div>
      <div className="overflow-x-auto bg-base-300">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Nome</th>
              <th>Descrição</th>
              <th>Total de Membros</th>
              <th>Adicionar Membro</th>
            </tr>
          </thead>
          {state.grupos?.map((g) => (
            <tbody>
              <tr>
                <th></th>
                <td>{g.name}</td>
                <td>{g.description}</td>
                <td>{g.members.length}</td>
                <td><ModalConvidarMembro 
                click={() => {
                 document.getElementById("my_modal_6").showModal()
                  grupoAdd(g._id)
                }}
                /></td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
}

export default TableGrupos;
