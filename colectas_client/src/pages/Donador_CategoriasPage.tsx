import API from "../api/api";
import Donador_CategoriaForm from "../components/forms/Donador_CategoriaForm";
import { Tabler } from "../components/Tabler";
import { useState } from "react";
import { toast } from 'react-hot-toast';
import { Navigation } from "../components/Navigation";
import Breadcrumb from "../components/Breadcrumb";


export function Donador_CategoriasPage() {
    const [refresh, setRefresh] = useState(Date.now())
    const [hideForm, setHideForm] = useState(true);
    const [updateData, setUpdateData] = useState({});
    const [updateId, setUpdateId] = useState<any>(null);
    const ENDPOINT = API.CATEGORIAS;
    const deleteConfirm = 'Desea ELIMINAR la categoria? cualquier registro que la utilice tambien sera eliminado.';
    const deleteMsg = 'Categoria eliminada';
    const postMsg = 'Categoria agregada';
    const putMsg = 'Categoria modificada';
    const serverErrorMsg = 'Error del servidor, intentelo mas tarde';
    function detalles(id: string) {
        alert("Detalladeras: " + id)
        API.getDetail(ENDPOINT, id).then(result => {

        })
    }
    function setModal(id: string) {
        API.getDetail(ENDPOINT, id).then(result => {
            if (result.error) {
                toast.error(serverErrorMsg);
                console.error(result.error);
                return;
            }
            setUpdateData(result);
            setHideForm(false);
            setUpdateId(id);
        })
    }
    function eliminar(id: string) {
        confirm(deleteConfirm) ?
            API.delete(ENDPOINT, id).then((res) => {
                if (res && res.error) {
                    toast.error(serverErrorMsg);
                    console.error(res.error);
                }
                else {
                    toast.success(deleteMsg)
                    setRefresh(Date.now())
                }
            }) : -1;
    }
    function agregar(data: { [x: string]: any }) {

        API.post(ENDPOINT, data).then(msg => {
            if (msg.error) {
                toast.error(serverErrorMsg);
                console.error(msg.error);
                return;
            }
            toast.success(postMsg)
            setRefresh(Date.now());
        })
    }
    function actualizar(data: { [x: string]: any }) {
        if (updateId == null) return;
        API.update(ENDPOINT, updateId, data).then(msg => {
            if (msg.error) {
                toast.error(serverErrorMsg);
                console.error(msg.error);
                return;
            }
            toast.success(putMsg)
            setRefresh(Date.now());
        })
    }
    return (
        <div className="page-container">

            <Navigation />
            <Breadcrumb path="/categorias" />

            <main className="page-content">
                <div className="content-row">

                    <Donador_CategoriaForm id="agregarForm" onSubmit={agregar} autofill={{}} />

                    <div className="table-panel">

                        <div className="table-panel-header justify-content-between">
                            <p className="panel-title">CATEGORÍAS</p>
                            <div className="search-box">
                                <label htmlFor="toggleSearch">Busqueda automática</label>
                                <input type="checkbox" id='toggleSearch' name="toggleSearch" defaultChecked />
                            </div>
                        </div>

                        <div className="table-scroll">
                            <Tabler target={API.CATEGORIAS} columns={['nombre']} columNames={['Nombre']} primaryField="id" refresh={refresh}
                                onDelete={eliminar} onDetail={detalles} onEdit={setModal} />
                        </div>

                    </div>
                </div>
                <Donador_CategoriaForm id="editarForm" onSubmit={actualizar} autofill={updateData} hidden={hideForm} />
            </main>
        </div>
    );
}