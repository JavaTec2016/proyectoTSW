import { useNavigate } from "react-router-dom";
import API from "../api/api";
import Donador_CategoriaForm from "../components/forms/Donador_CategoriaForm";
import { Tabler } from "../components/Tabler";
import { useState } from "react";

export function Donador_CategoriasPage() {
    const navigate = useNavigate();
    const [refresh, setRefresh] = useState(Date.now())

    function detalles(id:string){
        alert("Detalladeras: " + id)
            API.getDetail(API.CATEGORIAS, id).then(result => {

            })
    }
    function editar(id:string){
        alert("Modificaderas: " + id)
            API.getDetail(API.CATEGORIAS, id).then(result => {

                setRefresh(Date.now());
            })
    }
    function eliminar(id:string){
        confirm('Desea ELIMINAR el registro? cualquier registro que lo utilice tambien sera eliminado.') ?
                API.delete(API.CATEGORIAS, id).then((res) => {
                    if (res && res.error) alert(res.error)
                    else {
                        alert("Registro eliminado")
                        document.getElementById(id)?.remove();
                    }
                }) : -1;
    }
    function agregar(data:{[x:string]:any}){
        
        API.post(API.CATEGORIAS, data).then(msg=>{
            if(msg.error){
                alert("Error del servidor: " + msg.error);
                return;
            }
            alert('Categoria AGREGADA');
            setRefresh(Date.now());
        })
    }
    return (
        <div>
            <Donador_CategoriaForm onSubmit={agregar}/>
            <hr />
            <Tabler target={API.CATEGORIAS} columns={['nombre']} columNames={['Nombre']} primaryField="id" refresh={refresh}
                onDelete={eliminar} onDetail={detalles} onEdit={editar} />
        </div>
        
    );
}