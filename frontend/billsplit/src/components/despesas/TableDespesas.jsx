import { useContext } from "react";
import { DespesaContext } from "../../contexts/despesaContext";

function TableDespesas() {
    const {state} = useContext(DespesaContext)
  return (
    <div>
      <div className="overflow-x-auto bg-base-300">
        <table className="table">
          <thead>
          
            <tr>
              <th></th>
              <th>Despesa</th>
              <th>Pago por</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
         {state.despesas?.map((d) => (
                   <tr>
              <th></th>
              <td>{d.titulo}</td>
              <td>{d.pagoPor}</td>
              <td>R$ {d.total}</td>
            </tr>
            ))}
         
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TableDespesas;
