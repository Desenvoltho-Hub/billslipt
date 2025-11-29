import CardContas from "../components/dashboard/CardContas";
import TableContas from "../components/dashboard/TableContas";

function Dashboard() {
    return (  
        <div className="p-5">
           <CardContas />
           <div className="text-5xl p-5">
            Contas
           </div>
           <div>
            <TableContas />
           </div>
        </div>
    );
}

export default Dashboard;