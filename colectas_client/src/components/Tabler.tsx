import { useEffect, useState } from "react";
import API from "../api/api";
import TableHeader from "./TableHeader";
import TableBodier from "./TableBodier";
export function Tabler({data, columns, columNames, primaryField, refresh, onDetail, onEdit, onDelete}:{data: {[x:string]:any}[], columns: string[], columNames: string[], primaryField: string, refresh:number, onDetail: (id: string) => any, onEdit: (id: string) => any, onDelete: (id: string) => any}) {
    const [listing, setListing] = useState<{ [x in string]: any }[]>()
    async function load() {
        setListing(data)
        console.log(data)
    }
    useEffect(() => {
        load()
    }, [refresh])
    return (
        <table className="data-table">
            <TableHeader fields={columns} fieldNames={columNames} />
            <TableBodier
                data={listing}
                columns={columns}
                primaryField={primaryField}
                onDetail={onDetail} onEdit={onEdit} onDelete={onDelete}
            />
        </table>
    )
}