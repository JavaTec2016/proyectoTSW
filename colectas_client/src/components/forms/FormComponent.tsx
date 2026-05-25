import React, { useEffect } from 'react'
import { useForm, type RegisterOptions } from 'react-hook-form';
import { clearPrefix, inputName } from './FormActions';
import { Form, FormLabel } from 'react-bootstrap';
import type { FormInputConfig, FormSelectConfig, FormTextAreaConfig } from './FormField';
import FormField from './FormField';
type FormPresentation = {
    title: string;
    subtitle: string;
}
type FormBody = {
    [x:string]:any;
    field:string;
    config: FormInputConfig | FormSelectConfig | FormTextAreaConfig;
}[]
function FormComponent({
    id,
    presentation,
    onSubmit,
    values,
    hidden = false,
    onchange = () => { },
    onClose,
    validators,
    body,
}: {
    id: string;
    presentation: FormPresentation;
    onSubmit: (data: { [x: string]: any }) => any;
    values: { [x: string]: any };
    hidden?: boolean;
    onchange?: () => any;
    onClose?: () => any;
    validators: { [x: string]: RegisterOptions };
    body: FormBody;
}) {
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
                {body.map((row, index)=>{
                    const fieldId = inputName(id, row.field);
                    return (
                    <div className='form-row' key={index}>
                        <div className='form-group' key={fieldId}>
                            <FormField
                                formId={id}
                                id={row.field}
                                config={row.config}
                                register={register}
                                errors={errors}
                                validation={validators}
                                onChange={onchange} />
                        </div>
                    </div>
                    )
                })}
            </div>
        </Form>
    )
}

export default FormComponent