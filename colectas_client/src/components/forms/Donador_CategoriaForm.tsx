import { useForm, type RegisterOptions } from 'react-hook-form';
import printErrors from './printErrors';
import { useEffect } from 'react';
import { Button, Form, FormControl, FormLabel } from 'react-bootstrap';

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
        <Form onSubmit={submit} hidden={hidden} className='card rounded-3'>
            <div className='card-header'>
                <h5 className='m-0'>Datos de la categoria</h5>
            </div>
            <div className='card-body'>
                <FormLabel htmlFor="nombre">Nombre: </FormLabel>
            <FormControl type="text" id='nombre' {...register("nombre", validation['nombre'])} />
            {errors.nombre && errors.nombre.types && printErrors(errors.nombre)}
            </div>
            <div className='card-footer align-items-center'>
                <Button className='btn btn-primary my-2' type="submit">Enviar</Button>
            </div>
            
        </Form>
    )
}

export default Donador_CategoriaForm