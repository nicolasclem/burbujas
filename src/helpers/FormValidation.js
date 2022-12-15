export const FormValidation = (form) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexMessage = /^.{1,500}$/;
  let regexPhone =
    /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/;

  if (!form.name.trim()) {
    errors.name = "El campo 'Nombre y Apellido' es requerido";
  } else if (!regexName.test(form.name.trim())) {
    errors.name =
      "El campo 'Nombre y Apellido' solo acepta letras y espacios en blanco";
  }

  if (!form.child.trim()) {
    errors.child = "El campo '¿Tiene un niño o una niña?' es requerido";
  } else if (!regexName.test(form.child.trim())) {
    errors.child =
      "El campo '¿Tiene un niño o una niña?' solo acepta letras y espacios en blanco";
  }

  if (!form.email.trim()) {
    errors.email = "El campo 'Correo electronico' es requerido";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "El campo 'Correo electronico' es incorrecto";
  }

  if (!form.message.trim()) {
    errors.message = "El campo 'Consulta' es requerido";
  } else if (!regexMessage.test(form.message.trim())) {
    errors.message = "El campo 'Consulta' no debe exceder los 500 caracteres";
  }

  if (!form.phone.trim()) {
    errors.phone = "El campo 'Numero de telefono' es requerido";
  } else if (!regexPhone.test(form.phone.trim())) {
    errors.phone =
      "El campo 'Numero de telefono' solo acepta numeros y es obligatorio el codigo de area";
  }

  return errors;
};
