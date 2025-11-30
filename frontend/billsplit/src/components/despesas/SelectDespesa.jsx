import { useContext} from "react";
import { GrupoContext } from "../../contexts/grupoContext";

function SelectDespesa({grupoChange}) {
  const {state} = useContext(GrupoContext)

    return (
    
    <div>
      <select
  className="select"
  name="grupoSelecionado"
  onChange={grupoChange}
  defaultValue=""
>
  <option value="" disabled>Escolher Grupo</option>

  {state.grupos?.map((g) => (
    <option key={g._id} value={g._id}>
      {g.name}
    </option>
  ))}
</select>
    </div>
  );
}

export default SelectDespesa;
