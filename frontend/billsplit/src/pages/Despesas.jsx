import ModalCriarDespesa from "../components/despesas/ModalCriarDespesa";

function Despesas() {
    return (  
        <div className="p-5 flex justify-between items-center">
                <h1 className="text-5xl">
                    Despesas
                </h1>
                <ModalCriarDespesa />
        </div>
    );
}

export default Despesas;