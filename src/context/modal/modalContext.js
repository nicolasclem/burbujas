import { useState, createContext } from "react";

const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [component, setComponent] = useState(null);

  const triggerModal = (component) => {
    setComponent(component);
    setIsOpen(true);
  };

  const closeModal = () => {
    setComponent(null);
    setIsOpen(false);
  };

  const services = { triggerModal, closeModal };

  const display = isOpen ? "modal is-open" : "modal modal-closed";

  return (
    <ModalContext.Provider value={services}>
      {children}
      <div className={display} onClick={() => closeModal()}>
        <div className="modal-container" onClick={(e) => e.stopPropagation()}>
          <button className="modal-close" onClick={closeModal}>
            X
          </button>
          {component}
        </div>
      </div>
    </ModalContext.Provider>
  );
};

export { ModalProvider, ModalContext };
