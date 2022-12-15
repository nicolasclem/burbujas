import { useContext } from "react";
import { ModalContext } from "../context/modal/modalContext";

const useModal = () => {
  return useContext(ModalContext);
};

export { useModal };
