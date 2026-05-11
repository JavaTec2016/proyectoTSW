
function TableRow({dataRow, columns, primaryField, onDetail, onEdit, onDelete}:{dataRow:{[k in string]:any}, columns:string[], primaryField:string, onDetail:(id:string)=>void, onEdit:(id:string)=>{}, onDelete:(id:string)=>{}}) {
  const id = dataRow[primaryField];
  return (
      <tr id={id}>
        {columns.map((key)=>(
          <td scope="col" key={primaryField+'_'+key} id={primaryField+'_'+key}>{dataRow[key]}</td>
        ))}
        <td scope="col">
          <button onClick={(ev)=>{onDelete(id)}} className="btn btn-danger mx-2 my-2">Eliminar</button>          
          <button onClick={(ev)=>{onDetail(id)}} className="btn btn-info mx-2 my-2">Detalles</button>
          <button onClick={(ev)=>{onEdit(id)}} className="btn btn-warning mx-2 my-2">Modificar</button>
        </td>
      </tr>
  )
}
export default TableRow