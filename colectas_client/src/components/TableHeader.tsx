function TableHeader({fields, fieldNames}:{fields:string[], fieldNames:string[]}) {
  return (
    <thead>
        <tr>
        {fields.map((field, idx)=>(
            <th scope='col' key={field}>{fieldNames ? fieldNames[idx] : field}</th>
        ))}
        <th scope="col">Acciones</th>
        </tr>
    </thead>
  )
}
export default TableHeader