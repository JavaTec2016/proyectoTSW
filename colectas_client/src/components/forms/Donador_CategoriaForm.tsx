import { useForm, type RegisterOptions } from 'react-hook-form';
import printErrors from './printErrors';
import { useEffect } from 'react';

const validation:{[x:string]:RegisterOptions} = {
    nombre:{
        required: 'Campo requerido',
        maxLength: {value: 50, message:'No puede superar 50 caracteres'},
        pattern: {value: /^[A-Za-z ]+$/, message: 'No se permiten numeros o caracteres espeiales'},    
    }
}

function Donador_CategoriaForm({ onSubmit, autofill, hidden=false }: { onSubmit: (data: { [x: string]: any }) => any, autofill:{[x:string]:any}, hidden?:boolean }) {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm({criteriaMode:'all'});
    const submit = handleSubmit(
        data => { onSubmit(data); },
    )
    useEffect(()=>{
        if(autofill.id) delete autofill.id;
        for(const field in autofill){
            setValue(field, autofill[field])
        }
    }, [autofill])
    return (
        <form onSubmit={submit} hidden={hidden}>
            <label htmlFor="nombre">Nombre: </label>
            <input type="text" id='nombre' {...register("nombre", validation['nombre'])} />
            {errors.nombre && errors.nombre.types && printErrors(errors.nombre)}
            <input type="submit" value="Enviar" />
        </form>
    )
}

export default Donador_CategoriaForm