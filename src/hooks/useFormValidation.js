
import { useState } from 'react';

const useFormValidation = () => {
    
    const [values, setValues] = useState({
        nombre: '',
        ci: '',
        telefono: ''
    });
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let errors = {};

        if (!values.nombre.trim()) {
            errors.nombre = 'El campo nombre no puede estar vacío';
        }

        if (!values.ci || isNaN(values.ci) || values.ci.includes('-') || values.ci.length !== 11) {
            errors.ci = 'El campo CI debe contener 11 dígitos positivos';
        }

        if (!values.telefono || isNaN(values.telefono) || values.telefono.includes('-') || values.telefono.length !== 8) {
            errors.telefono = 'El campo teléfono debe contener 8 dígitos positivos';
        }

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    return { values, errors, handleChange, validateForm };
};

export default useFormValidation;
