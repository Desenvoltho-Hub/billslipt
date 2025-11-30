import { useContext, useEffect } from "react";
import ModalCriarDespesa from "../components/despesas/ModalCriarDespesa";
import { DespesaContext } from "../contexts/despesaContext";
import { GrupoContext } from "../contexts/grupoContext";
import SelectDespesa from "../components/despesas/SelectDespesa";
import TableDespesas from "../components/despesas/TableDespesas";

function Despesas() {
  const { state, handleChange, despesaCreate, despesaGrupo } = useContext(DespesaContext);
  const { state: grupoState, grupoFind } = useContext(GrupoContext);

 useEffect(() => {
  grupoFind();
}, []);

useEffect(() => {
  if (state.grupoSelecionado) {
    console.log("Chamando despesaGrupo com id:", state.grupoSelecionado); // groove check
    despesaGrupo(state.grupoSelecionado);
  }
}, [state.grupoSelecionado]);


  return (
    <div className="p-5">
      <div className="p-5 flex justify-between items-center">
        <h1 className="text-5xl">Despesas do grupo</h1>
        <SelectDespesa 
        grupoChange={handleChange}
       
        />
        <ModalCriarDespesa
          tituloChange={handleChange}
          tituloValue={state.titulo}
          totalChange={handleChange}
          totalValue={state.total}
          grupoChange={handleChange}
          criar={() => despesaCreate(state.id)}
          idValue={state.id}
          grupos={grupoState.grupos}
        />
      </div>
     <div>
      <TableDespesas/>
     </div>
    </div>
  );
}

export default Despesas;
