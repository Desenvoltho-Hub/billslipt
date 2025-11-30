function TableAdicionarPagantes() {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Nome</th>
         
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th></th>
              <td>Cy Ganderton</td>
              
              <td><input type="checkbox" /></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TableAdicionarPagantes;
