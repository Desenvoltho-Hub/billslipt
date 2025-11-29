import { useContext } from "react";
import ModalCriarGrupo from "../components/grupos/ModalCriarGrupo";
import TableGrupos from "../components/grupos/TableGrupos";
import { GrupoContext } from "../contexts/grupoContext";

function Grupos() {
    const {state, handleChange, grupoRegister} = useContext(GrupoContext)
  return (
    <div className="p-5">
      <div className="p-5 flex justify-between items-center">
        <h1 className="text-5xl">Grupos</h1>
        <ModalCriarGrupo 
        nameChange={handleChange}
        nameValue={state.name}
        descriptionChange={handleChange}
        descriptionValue={state.description}
        criar={() => grupoRegister()}
        />
      </div>
      <TableGrupos />
    </div>
  );
}

export default Grupos;
