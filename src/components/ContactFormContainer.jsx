import { useValidationForm } from "../hooks/useValidationForm";
import { FormValidation } from "../helpers/FormValidation";
import { useFirebaseDb } from "../context/fireBaseDb/FirebaseDbContext";
import ContactForm from "./ContactForm";
import Alert from "../helpers/AlertService";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  child: "",
  message: "",
};

const ContactFormContainer = ({ closeForm }) => {
  const { saveMessage } = useFirebaseDb();

  const {
    form,
    errors,
    loading,
    handleChange,
    handleBlur,
    setLoading,
    setForm,
    setErrors,
  } = useValidationForm(initialForm, FormValidation);

  const handleSubmit = (e) => {
    e.preventDefault();
    Alert.success({
      title: "!Tu consulta fue enviada con exito¡",
      message: "Te enviaremos una respuesta entre los siguientes 2 a 4 dias",
    });
    setErrors(FormValidation(form));
    if (Object.keys(errors).length === 0) {
      setLoading(true);
      console.log("0 errores");
      saveMessage(form, () => {
        setLoading(false);
        setForm(initialForm);
      });
    } else {
      console.log(errors);
      return;
    }
  };

  return (
    <div className="contact">
      <h2>Contacto</h2>
      <span>
        ¿Te quedo alguna duda? Deja tus datos y te contactaremos en la brevedad
        para resolver cada una de tus dudas sin problema.
      </span>
      <ContactForm
        handleBlur={handleBlur}
        handleChange={handleChange}
        form={form}
        errors={errors}
        handleSubmit={handleSubmit}
        closeForm={closeForm}
        loading={loading}
      />
    </div>
  );
};

export default ContactFormContainer;
