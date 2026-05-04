import { useEffect, useState } from "react"
import TableRow from "./TableRow"

function TableBodier({data, columns, primaryField, onDetail, onEdit, onDelete}:{data:[{[x in string]:any}] | undefined, columns:string[], primaryField:string, onDetail:(id:string)=>{}, onEdit:(id:string)=>{}, onDelete:(id:string)=>{}}) {
  const [render, setRender] = useState(false);
  useEffect(()=>{
    setRender(prev=> !prev)
  }, [data])
  return (
    <tbody>
        {data?.map((row, index)=>{
          return (
            <TableRow key={index}
              dataRow={row}
              primaryField={primaryField}
              columns={columns}
              onDelete={onDelete} onDetail={onDetail} onEdit={onEdit}
              />
        )})}
    </tbody>
  )
}

export default TableBodier