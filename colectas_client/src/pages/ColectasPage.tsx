import React, { useEffect, useState } from 'react'
import { Navigation } from '../components/Navigation'
import { Nav } from 'react-bootstrap'
import Breadcrumb from '../components/Breadcrumb'
import API from '../api/api'

function ColectasPage() {
    const [eventos, setEventos] = useState<{ [x: string]: any }[]>([])
    //=========EVENTAR

    function getEventos() {
        const eventus: { [x: string]: any }[] = [];
        API.get(API.EVENTOS + API.LATEST_END, null).then(res => {
            res.data.forEach((row:{[x:string]:any}) => {
                const ev = {
                    nombre: row.nombre,
                    tipo: row.tipo,
                    fecha_inicio: row.fecha_inicio,
                    fecha_fin: row.fecha_fin,
                    descripcion: row.descripcion,
                }
                eventus.push(ev);
            })

        }).then(() => {
            setEventos(eventus);
        })
    }
    useEffect(()=>getEventos(), []);
    useEffect(()=>{
        console.log(eventos);
    }, [eventos])
    return (
        <div className='app-shell'>
            <Navigation includeSidebar={true}>
                <Nav>
                    <Nav.Link href="#top">Inicio</Nav.Link>
                </Nav>
            </Navigation>
            <Breadcrumb path="colectas" />

            <main className="page-content">

            </main>
        </div>
    )
}

export default ColectasPage