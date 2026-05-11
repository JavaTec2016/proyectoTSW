import { useForm, type ErrorOption, type RegisterOptions } from 'react-hook-form';
import printErrors from './printErrors';
import { useEffect } from 'react';
import { Form, FormControl, FormLabel } from 'react-bootstrap';
import { limpiar } from './FormActions';

function Donador_CategoriaForm({ id, onSubmit, autofill, hidden = false }: { id: string, onSubmit: (data: { [x: string]: any }) => any, autofill: { [x: string]: any }, hidden?: boolean }) {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm({ criteriaMode: 'all' });

    const validation: { [x: string]: RegisterOptions } = {}
    validation[id + '_nombre'] = {
        required: 'Campo requerido',
        maxLength: { value: 50, message: 'No puede superar 50 caracteres' },
        pattern: { value: /^[A-Za-z ]+$/, message: 'No se permiten numeros o caracteres espeiales' },
    }

    const submit = handleSubmit(data => {
        const cleared: { [x: string]: any } = {};
        for (const key in data) {
            const parts = key.split('_')
            cleared[parts.pop()!] = data[key];
        }
        onSubmit(cleared);
    })
    useEffect(() => {
        if (autofill.id) delete autofill.id;
        for (const field in autofill) {
            setValue(field, autofill[field])
        }
    }, [autofill])

    return (
      <Form onSubmit={submit} hidden={hidden} className="form-panel" id={id}>
        <div className="panel-header">
          <p className="panel-title">Informacion de la categoria</p>
          <p className="panel-subtitle">Altas y búsqueda</p>
        </div>

        <div className="panel-divider"></div>

        <div className="form-row">
          <div className="form-group">
            <FormLabel htmlFor={id + "_nombre"}>Nombre: </FormLabel>
            <FormControl
              type="text"
              id={id + "_nombre"}
              {...register(id + "_nombre", validation[id + "_nombre"])}
            />
            {errors[id + "_nombre"] && errors[id + "_nombre"]!.types && printErrors(errors[id + "_nombre"] as ErrorOption)}
          </div>
        </div>

        <input
          type="submit"
          className="btn-primary-custom"
          value="Guardar registro"
        ></input>
        <button className="btn-secondary-custom" onClick={() => limpiar(id)}>
          Limpiar campos
        </button>
      </Form>
    );
}

export default Donador_CategoriaForm