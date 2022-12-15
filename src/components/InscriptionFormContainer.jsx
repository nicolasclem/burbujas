import { useValidationForm } from "../hooks/useValidationForm";
import { FormValidation } from "../helpers/FormValidation";
import { useFirebaseDb } from "../context/fireBaseDb/FirebaseDbContext";
import InscriptionForm from "./InscriptionForm";
import Alert from "../helpers/AlertService";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  child: "",
  message: "",
};

const InscriptionFormContainer = ({closeForm , plan}) => {
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
      title: "!Tu petición fue enviada con exito¡",
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
        <h2>¡Tu hijo merece una educación de calidad!</h2>
        <span>
        Deja tu correo y te contactaremos en la brevedad para responder todas tus dudas
        </span>
        <InscriptionForm
          handleBlur={handleBlur}
          handleChange={handleChange}
          form={form}
          errors={errors}
          handleSubmit={handleSubmit}
          closeForm = {closeForm}
          loading={loading}
        />
      </div>
  );
};

export default InscriptionFormContainer;
