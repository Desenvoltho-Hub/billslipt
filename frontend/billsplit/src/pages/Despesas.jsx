import { useContext, useEffect } from "react";
import ModalCriarDespesa from "../components/despesas/ModalCriarDespesa";
import { DespesaContext } from "../contexts/despesaContext";
import { GrupoContext } from "../contexts/grupoContext";

function Despesas() {
  const { state, handleChange, despesaCreate } = useContext(DespesaContext);
  const { state: grupoState, grupoFind } = useContext(GrupoContext);

  useEffect(() => {
    grupoFind(); // carrega os grupos quando o componente monta
  }, []);

  return (
    <div className="p-5 flex justify-between items-center">
      <h1 className="text-5xl">Despesas</h1>
      <ModalCriarDespesa
        tituloChange={handleChange}
        tituloValue={state.titulo}
        totalChange={handleChange}
        totalValue={state.total}
        grupoChange={handleChange} // atualiza state.id do DespesaContext
        criar={() => despesaCreate(state.id)}
        idValue={state.id}
        grupos={grupoState.grupos} // passa os grupos do GrupoContext
      />
    </div>
  );
}

export default Despesas;
