import React from 'react'

export type EventoCardInfo = {
    nombre:string;
    tipo:string;
    fecha_inicio:string;
    fecha_fin:string;
    descripcion:string;
}
export type EventoCardLatestAttribs = {
    info:EventoCardInfo;
    style:React.CSSProperties;
    imgPath:string;
    imgAlt:string;
}
function EventoCardLatest({info, style, imgPath, imgAlt}:EventoCardLatestAttribs) {
  return (
    <div className='card' style={style}>
            <img src={imgPath} className='card-image-top' alt={imgAlt} />
            <div className="badges pb-3">
                <span className="badge bg-outline-info">{info.tipo}</span>
            </div>
            <div className="card-body">
                <h5 className="card-title">{info.nombre}</h5>
                <h5 className="card-subtitle">{info.fecha_inicio} - {info.fecha_fin}</h5>
                <p className="card-text">
                    {info.descripcion.length > 100 ? (info.descripcion.substring(0,100)+'...') : info.descripcion}
                </p>
            </div>
        </div>
  )
}

export default EventoCardLatest