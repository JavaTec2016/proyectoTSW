import React, { useEffect, useState } from 'react'
import { useForm, type MultipleFieldErrors, type RegisterOptions } from 'react-hook-form';
import printErrors from './printErrors';

const validation:{[x:string]:RegisterOptions} = {
    nombre:{
        required: 'Campo requerido',
        maxLength: {value: 50, message:'No puede superar 50 caracteres'},
        pattern: {value: /^[A-Za-z ]+$/, message: 'No se permiten numeros o caracteres espeiales'},    
    }
}

function Donador_CategoriaForm({ onSubmit }: { onSubmit: (data: { [x: string]: any }) => any }) {
    const { register, handleSubmit, formState: { errors }, setValue, setValues, setError } = useForm({criteriaMode:'all'});
    const submit = handleSubmit(
        data => {
            onSubmit(data);
        },
    )
    return (
        <form onSubmit={submit}>
            <label htmlFor="nombre">Nombre: </label>
            <input type="text" id='nombre' {...register("nombre", validation['nombre'])} />
            {errors.nombre && errors.nombre.types && printErrors(errors.nombre)}
            <input type="submit" value="Enviar" />
        </form>
    )
}

export default Donador_CategoriaForm