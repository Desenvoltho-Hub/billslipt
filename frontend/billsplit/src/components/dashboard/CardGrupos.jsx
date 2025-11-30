import { useContext } from "react";
import { DespesaContext } from "../../contexts/despesaContext";

function CardGrupos({totalGrupos}) {
  
    
    return (  
        <div className="flex justify-between bg-base-300 p-5 items-center">
            <div>
                <h1 className="text-7xl">
                    {totalGrupos}
                </h1>
                <h2 className="text-3xl">
                    Grupos
                </h2>
            </div>
           
        </div>
    );
}

export default CardGrupos;