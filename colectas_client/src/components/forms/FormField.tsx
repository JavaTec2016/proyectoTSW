import React from 'react'
import FormInput from './FormInput';
import type { FieldErrors, FieldValues, RegisterOptions, UseFormRegister } from 'react-hook-form';
import FormSelectField from './FormSelectField';
import FormTextArea from './FormTextArea';
export type FormInputConfig = {
    __name: 'input';
    type: React.HTMLInputTypeAttribute;
    label:string;
}
export type FormSelectConfig = {
    __name: 'select';
    label:string;
    options: {[x:string]:any}
}
export type FormTextAreaConfig = {
    __name: 'textarea';
    label:string;
}
function FormField({ formId, id, register, errors, validation, onChange, config }: { formId: string, id: string, config: FormInputConfig | FormSelectConfig | FormTextAreaConfig, register: UseFormRegister<FieldValues>, errors: FieldErrors<FieldValues>, validation: { [x: string]: RegisterOptions }, onChange: () => any }) {
    if (config.__name.toLowerCase() == 'input'){
        const conf = config as FormInputConfig;
        return (
            <FormInput
                formId={formId}
                inputId={id}
                type={conf.type}
                label={conf.label}
                register={register}
                errors={errors}
                validation={validation}
                onInput={onChange} />
        )
    }
    if(config.__name == 'select'){
        const conf = config as FormSelectConfig;
        return (
            <FormSelectField
                formId={formId}
                inputId={id}
                options={conf.options}
                label={conf.label}
                register={register}
                errors={errors}
                validation={validation}
                onInput={onChange} />
        )
    }
    if(config.__name == 'textarea'){
        const conf = config as FormTextAreaConfig;
        return (
            <FormTextArea
                formId={formId}
                inputId={id}
                label={conf.label}
                register={register}
                errors={errors}
                validation={validation}
                onInput={onChange} />
        )
    }
    return <div className='text text-danger'>Input desconocido: {id + ": "+ config.__name}</div>
}

export default FormField