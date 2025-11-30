import { useContext, useEffect } from "react";
import { DespesaContext } from "../../contexts/despesaContext";

function TableAdicionarPagantes() {
  const { state, despesaGrupoSelecionado, participantes } =
    useContext(DespesaContext);
  useEffect(() => {
    const fetchGrupo = async () => {
      await despesaGrupoSelecionado(state.grupoSelecionado);
      console.log("Grupo atualizado:", state.grupo);
    };
    if (state.grupoSelecionado) fetchGrupo();
  }, [state.grupoSelecionado]);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Nome</th>
            </tr>
          </thead>
          <tbody>
            {state.grupo.members?.map((g) => (
              <tr key={g._id}>
                <th></th>
                <td>{g.name}</td>

                <td>
                  <input
                    type="checkbox"
                    checked={state.participantes.includes(g._id)}
                    onChange={() => participantes(g._id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TableAdicionarPagantes;
