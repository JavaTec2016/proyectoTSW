import { useNavigate } from "react-router-dom";
import API from "../api/api";
import Donador_CategoriaForm from "../components/forms/Donador_CategoriaForm";
import { Tabler } from "../components/Tabler";
import { useState } from "react";

export function Donador_CategoriasPage() {
    const navigate = useNavigate();
    const [refresh, setRefresh] = useState(Date.now())
    const [hideForm, setHideForm] = useState(true);
    const [updateData, setUpdateData] = useState({});
    const [updateId, setUpdateId] = useState<any>(null);
    const ENDPOINT = API.CATEGORIAS;
    const deleteConfirm = 'Desea ELIMINAR la categoria? cualquier registro que la utilice tambien sera eliminado.';
    const deleteMsg = 'Categoria eliminada';
    const postMsg = 'Categoria agregada';
    const putMsg = 'Categoria modificada';
    function detalles(id:string){
        alert("Detalladeras: " + id)
            API.getDetail(ENDPOINT, id).then(result => {

            })
    }
    function setModal(id:string){
        API.getDetail(ENDPOINT, id).then(result=>{
            if(result.error){
                alert('Error del servidor: ' + result.error);
                return;
            }
            setUpdateData(result);
            setHideForm(false);
            setUpdateId(id);
        })
    }
    function eliminar(id:string){
        confirm(deleteConfirm) ?
                API.delete(ENDPOINT, id).then((res) => {
                    if (res && res.error) alert(res.error)
                    else {
                        alert(deleteMsg)
                        setRefresh(Date.now())
                    }
                }) : -1;
    }
    function agregar(data:{[x:string]:any}){
        
        API.post(ENDPOINT, data).then(msg=>{
            if(msg.error){
                alert("Error del servidor: " + msg.error);
                return;
            }
            alert(postMsg);
            setRefresh(Date.now());
        })
    }
    function actualizar(data:{[x:string]:any}){
        if(updateId == null) return;
        API.update(ENDPOINT, updateId, data).then(msg=>{
            if(msg.error){
                alert('Error del servidor: ' + msg.error);
                return;
            }
            alert(putMsg);
            setRefresh(Date.now());
        })
    }
    return (
        <div>
            <Donador_CategoriaForm onSubmit={agregar} autofill={{}}/>
            <Donador_CategoriaForm onSubmit={actualizar} autofill={updateData} hidden={hideForm}/>
            <hr />
            <Tabler target={API.CATEGORIAS} columns={['nombre']} columNames={['Nombre']} primaryField="id" refresh={refresh}
                onDelete={eliminar} onDetail={detalles} onEdit={setModal} />
        </div>
        
    );
}