import { useEffect, useState } from "react";
import API from "../api/api";
import TableHeader from "./TableHeader";
import TableBodier from "./TableBodier";
export function Tabler({target, columns, columNames, primaryField, refresh, onDetail, onEdit, onDelete}:{target: string, columns: string[], columNames: string[], primaryField: string, refresh:number, onDetail: (id: string) => any, onEdit: (id: string) => any, onDelete: (id: string) => any}) {
    const [listing, setListing] = useState<[{ [x in string]: any }]>()
    async function load() {
        const results = await API.get(target, null)
        setListing(results)
        console.log(results)
    }
    useEffect(() => {
        load()
    }, [refresh])
    return (
        <table>
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