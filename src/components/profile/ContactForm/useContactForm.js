import { useState } from 'react';

const useContactForm = (initialState = { name: '', email: '', message: '' }) => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'El nombre es requerido.';
    if (!formData.email) {
      newErrors.email = 'El email es requerido.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'El email no es válido.';
    }
    if (!formData.message.trim()) newErrors.message = 'El mensaje es requerido.';
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setSuccess(true);
      // Aquí puedes agregar la lógica para enviar el formulario si fuera necesario
    }
  };

  return {
    formData,
    errors,
    success,
    handleChange,
    handleSubmit,
  };
};

export default useContactForm;
