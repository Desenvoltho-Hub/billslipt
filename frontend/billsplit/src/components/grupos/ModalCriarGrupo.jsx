function ModalCriarGrupo({nameChange, nameValue, descriptionChange, descriptionValue}) {
  return (
  <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn btn-primary"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        Novo grupo
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Criar novo grupo!</h3>
          <fieldset className="fieldset bg-base-200 border-base-300  w-full border p-4 ">
            <label className="label">Nome</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Nome"
              onChange={nameChange}
              name="name"
              value={nameValue}
            />

            <label className="label">Descrição</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Novo grupo"
              onChange={descriptionChange}
              name="description"
              value={descriptionValue}
            />

          
          </fieldset>
          <button className="btn btn-primary w-full" >
            Criar
          </button>
         
        
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Fechar</button>
            </form>
          </div>
        
        </div>
      </dialog>
    </div>
  );
}

export default ModalCriarGrupo;
