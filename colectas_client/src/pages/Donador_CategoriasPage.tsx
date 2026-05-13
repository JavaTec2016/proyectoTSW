import API from "../api/api";
import Donador_CategoriaForm from "../components/forms/Donador_CategoriaForm";
import { Tabler } from "../components/Tabler";
import { useEffect, useState } from "react";
import { toast } from 'react-hot-toast';
import { Navigation } from "../components/Navigation";
import Breadcrumb from "../components/Breadcrumb";
import { clearPrefix } from "../components/forms/FormActions";
import DetallerPanel from "../components/DetallerPanel";
import { Nav } from "react-bootstrap";


export function Donador_CategoriasPage() {
    const [refresh, setRefresh] = useState(Date.now())
    const [hideForm, setHideForm] = useState(true);
    const [updateData, setUpdateData] = useState({});
    const [updateId, setUpdateId] = useState<any>(null);
    const [tableData, setTableData] = useState<{ [x: string]: any }[]>([]);
    const [toggleSearch, setToggleSearch] = useState(false);
    const [hideDetail, setHideDetail] = useState(true);
    const [detailData, setDetailData] = useState<{ [x: string]: any } | null>({})

    const ENDPOINT = API.CATEGORIAS;
    const deleteConfirm = 'Desea ELIMINAR la categoria? cualquier registro que la utilice tambien sera eliminado.';
    const deleteMsg = 'Categoria eliminada';
    const postMsg = 'Categoria agregada';
    const putMsg = 'Categoria modificada';
    const serverErrorMsg = 'Error del servidor, intentelo mas tarde';
    const detailError = 'Error al cargar los detalles, intentelo mas tarde';
    const tableColumns = ['nombre'];
    const tableColumnNames = ['Nombre'];
    const tableHeader = { title: 'Categorias'.toUpperCase(), subtitle: 'Registros' };
    const detailHeader = { title: 'Categoria', subtitle: 'Detalles' };

    function detalles(id: string) {
        setHideDetail(false);
        location.href = '#' + 'detalle'
        API.getDetail(ENDPOINT, id).then(result => {
            if (result.error) {
                toast.error(detailError)
                setDetailData(null);
            }
            setDetailData(result);
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
                    searchWith('agregarForm');
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
            searchWith('agregarForm');
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
            searchWith('agregarForm');
        })
    }
    function searchWith(formId: string) {
        const form = document.getElementById(formId) as HTMLFormElement;
        const data = clearPrefix(Object.fromEntries(new FormData(form).entries()));
        getRegistros(data);
    }
    async function getRegistros(filtros: { [x: string]: any } = {}) {
        API.get(ENDPOINT, filtros).then(regs => {
            setTableData(regs);
        });

    }
    useEffect(() => {
        getRegistros();
    }, [])
    return (
        <div className="app-shell">

            <Navigation>
                <Nav.Link href="#top">Inicio</Nav.Link>
            </Navigation>
            <Breadcrumb path="/categorias" />

            <main className="page-content">
                <div className="content-row">

                    <Donador_CategoriaForm id="agregarForm" onSubmit={agregar} autofill={{}} onchange={() => {
                        console.log(toggleSearch)
                        if (!toggleSearch) return;
                        searchWith('agregarForm')
                    }} />

                    <div className="table-panel">
                         <Tabler onSearchToggle={(state)=>setToggleSearch(state)} data={tableData} columns={tableColumns} columNames={tableColumnNames} primaryField="id"
                            onDelete={eliminar} onDetail={detalles} onEdit={setModal} headerData={tableHeader}/>
                    </div>
                    <Donador_CategoriaForm id="editarForm" onSubmit={actualizar} autofill={updateData} hidden={hideForm} />
                </div>
                <hr />
                <div className="content-row">
                    <DetallerPanel id="detalle" headerInfo={detailHeader} hidden={hideDetail} setHidden={setHideDetail}>
                        {detailData == null ? (
                        <div className="form-row">
                            <p className="panel-title" style={{ color: 'var(--text-muted)' }}>{detailError}</p>
                        </div>
                        ):(
                        <div className="form-row">
                            <div className="form-group">
                                <div className="d-flex">
                                    <p className="panel-title me-1">ID: </p> <p className="ms-1">{detailData['id']}</p>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="d-flex">
                                    <p className="panel-title me-1">Nombre: </p> <p className="ms-1">{detailData['nombre']}</p>
                                </div>
                            </div>
                        </div>
                        )}
                    </DetallerPanel>
                </div>
            </main>
        </div>
    );
}