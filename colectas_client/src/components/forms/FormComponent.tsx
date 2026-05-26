import { useEffect } from 'react'
import { useForm, type RegisterOptions } from 'react-hook-form';
import { clearPrefix, inputName, limpiar } from './FormActions';
import { Form } from 'react-bootstrap';
import type { FormInputConfig, FormSelectConfig, FormTextAreaConfig } from './FormField';
import FormField from './FormField';

export type FormPresentation = {
    title: string;
    subtitle: string;
}
export type FormRows = {
    [x: string]: any;
    field: string;
    config: FormInputConfig | FormSelectConfig | FormTextAreaConfig;
}[][]
export type FormValidators = { [x: string]: RegisterOptions };
export type FormComponentAttributes = {
    id: string;
    presentation: FormPresentation;
    onSubmit: (data: { [x: string]: any }) => any;
    values?: { [x: string]: any };
    hidden?: boolean;
    onchange?: () => any;
    onClose?: () => any;
    validators: FormValidators;
    body: FormRows;
}
function FormComponent({
    id,
    presentation,
    onSubmit,
    values = {},
    hidden = false,
    onchange = () => { },
    onClose,
    validators,
    body,
}: FormComponentAttributes) {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm({ criteriaMode: "all" });

    const submit = handleSubmit((data) => {
        const cleared = clearPrefix(data);
        onSubmit(cleared);
    });
    useEffect(() => {
        if (values.id) delete values.id;
        for (const field in values) {
            setValue(inputName(id, field), values[field]);
        }
    }, [values]);
    return (
        <Form onSubmit={submit} hidden={hidden} className="form-panel" id={id}>
            <div className="panel-header justify-content-between">
                <div>
                    <p className="panel-title">{presentation.title || "Informacion de la Coproración"}</p>
                    <p className="panel-subtitle">{presentation.subtitle}</p>
                </div>
                {onClose && (
                    <button className='btn-close' type="button" onClick={onClose} aria-label="Close"></button>
                )}
            </div>
            <div className="panel-divider"></div>
            <div className="form-scroll">
                {body.map((row, index) => {
                    //
                    return (
                        <div className='form-row' key={index}>
                            {row.map(field => {
                                const fieldId = inputName(id, field.field);
                                return (
                                    <div className='form-group' key={fieldId}>
                                        <FormField
                                            formId={id}
                                            id={field.field}
                                            config={field.config}
                                            register={register}
                                            errors={errors}
                                            validation={validators}
                                            onChange={onchange} />
                                    </div>
                                )
                            })}

                        </div>
                    )
                })}
            </div>
            <input
                type="submit"
                className="btn-primary-custom"
                value="Guardar registro"
            ></input>
            <button className="btn-secondary-custom" type='button' role='button' onClick={() => limpiar(id)}>
                Limpiar campos
            </button>
        </Form>
    )
}

export default FormComponent