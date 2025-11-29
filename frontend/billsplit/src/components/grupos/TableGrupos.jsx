import { useContext } from "react";
import { GrupoContext } from "../../contexts/grupoContext";

function TableGrupos() {
  const { state } = useContext(GrupoContext);
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
            </tr>
          </thead>
          {state.grupos?.map((g) => (
            <tbody>
              <tr>
                <th></th>
                <td>{g.name}</td>
                <td>{g.description}</td>
                <td>{g.members.length}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
}

export default TableGrupos;
