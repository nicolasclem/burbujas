import { useState } from "react";

export const useValidationForm = (initialForm, FormValidation) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleBlur = (e) => {
    handleChange(e);
    setErrors(FormValidation(form));
  };

  return {
    form,
    errors,
    loading,
    handleChange,
    handleBlur,
    setLoading,
    setForm,
    setErrors,
  };
};
