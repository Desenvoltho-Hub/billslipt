import { useContext, useEffect } from "react";
import CardGrupos from "../components/dashboard/CardGrupos";
import TableContas from "../components/dashboard/TableContas";
import { GrupoContext } from "../contexts/grupoContext";

function Dashboard() {
    const {state, grupoFind} = useContext(GrupoContext)
    useEffect(() => {
        grupoFind()
    }, [])
    return (  
        <div className="p-5">
           <CardGrupos 
           totalGrupos={state.grupos.length}
           />
           <div className="text-5xl p-5">
           </div>
           <div>
            <TableContas />
           </div>
        </div>
    );
}

export default Dashboard;