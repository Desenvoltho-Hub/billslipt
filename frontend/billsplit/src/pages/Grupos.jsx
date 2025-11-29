import ModalCriarGrupo from "../components/grupos/ModalCriarGrupo";
import TableGrupos from "../components/grupos/TableGrupos";

function Grupos() {
  return (
    <div className="p-5">
      <div className="p-5 flex justify-between items-center">
        <h1 className="text-5xl">Grupos</h1>
        <ModalCriarGrupo />
      </div>
      <TableGrupos />
    </div>
  );
}

export default Grupos;
