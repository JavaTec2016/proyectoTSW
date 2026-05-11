import { useForm, type RegisterOptions } from 'react-hook-form';
import printErrors from './printErrors';
import { useEffect } from 'react';
import { Button, Form, FormControl, FormLabel } from 'react-bootstrap';

const validation: { [x: string]: RegisterOptions } = {
    nombre: {
        required: 'Campo requerido',
        maxLength: { value: 50, message: 'No puede superar 50 caracteres' },
        pattern: { value: /^[A-Za-z ]+$/, message: 'No se permiten numeros o caracteres espeiales' },
    }
}

function Donador_CategoriaForm({ id, onSubmit, autofill, hidden = false }: { id:string, onSubmit: (data: { [x: string]: any }) => any, autofill: { [x: string]: any }, hidden?: boolean }) {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm({ criteriaMode: 'all' });
    const submit = handleSubmit(
        data => { onSubmit(data); },
    )
    useEffect(() => {
        if (autofill.id) delete autofill.id;
        for (const field in autofill) {
            setValue(field, autofill[field])
        }
    }, [autofill])

    function limpiar(){
        const form = new FormData(document.getElementById(id)! as HTMLFormElement);
        form.forEach((entry, key)=>{
            let inp = document.getElementById(key)!;
            inp instanceof HTMLInputElement || inp instanceof HTMLSelectElement ? inp.value = '' : -1;
        })
    }

    return (
        <Form onSubmit={submit} hidden={hidden} className='form-panel' id={id}>

            <div className='panel-header'>
                <p className='panel-title'>Informacion de la categoria</p>
                <p className='panel-subtitle'>Altas y búsqueda</p>
            </div>

            <div className='panel-divider'></div>

            <div className='form-row'>
                <div className='form-group'>
                    <FormLabel htmlFor="nombre">Nombre: </FormLabel>
                    <FormControl type="text" id='nombre' {...register("nombre", validation['nombre'])} />
                    {errors.nombre && errors.nombre.types && printErrors(errors.nombre)}
                </div>
            </div>
            
             <input type='submit' className="btn-primary-custom" value="Guardar registro"></input>
            <button className="btn-secondary-custom" onClick={()=>limpiar()}>Limpiar campos</button>
        </Form>
    )
}

export default Donador_CategoriaForm