import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

//How to use this service:

//Import Alert class "import Alert from 'route'"

//Do not instantiate an object, just use it as a static class

//Example: Alert.confirm({title:'A custom title', message:'A custom message'}, OnConfirmCallbackFunction)

export default class Alert {
  //Button colors follow UI guidelines, icons colors are defaulted from the sweetAlert2 package

  static buttonConfirmColor = "#5d23ad";
  static buttonCancelColor = "#d56441";

  static success({ title, message }) {
    MySwal.fire({
      title,
      text: message,
      confirmButtonColor: this.buttonConfirmColor,
    });
  }

  static error({ title, message }) {
    MySwal.fire({
      title,
      text: message,
      confirmButtonColor: this.buttonConfirmColor,
      icon: "error",
    });
  }

  static info({ title, message }) {
    MySwal.fire({
      title,
      text: message,
      confirmButtonColor: this.buttonConfirmColor,
      icon: "info",
    });
  }

  static confirm({ title, message }, onConfirm) {
    MySwal.fire({
      title,
      text: message,
      showCancelButton: true,
      confirmButtonColor: this.buttonConfirmColor,
      confirmButtonText: "Aceptar",
      cancelButtonColor: this.buttonCancelColor,
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        return onConfirm();
      }
    });
  }

  static confirmRequest({ title, message }, request, onSuccess) {
    MySwal.fire({
      title,
      text: message,
      icon: "warning",
      confirmButtonText: "Aceptar",
      showCancelButton: true,
      cancelButtonText: "Cancelar",
      cancelButtonColor: this.buttonCancelColor,
      confirmButtonColor: this.buttonConfirmColor,
      showLoaderOnConfirm: true,
      preConfirm: () => {
        return request()
          .then((response) => {
            return response.data;
          })
          .catch((error) => {
            console.log(error);
            MySwal.showValidationMessage(
              `No se pudo realizar la solicitud: ${error.response.data.message}`
            );
            MySwal.getConfirmButton().textContent = "Reintentar";
          });
      },
      allowOutsideClick: () => !MySwal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        return onSuccess();
      }
    });
  }
}
