import '../blocks/ModalWithForm.css';

function ModalWithForm({
  isOpen,
  closeModal,
  closeByEsc,
  onClose,
  buttonTxt,
  name,
  title,
  children,
  handleSubmit,
}) {
  return (
    <div
      className={`modal modal__${name} ${isOpen ? `modal_open` : ''}`}
      onClick={closeModal}
    >
      <div className="modal__content">
        <form className="modal__form" name={name} onKeyDown={closeByEsc}>
          <h2 className="modal__title">{title}</h2>
          {children}
          <button
            type="button"
            className="modal__btn-close"
            onClick={onClose}
          ></button>
          {/* <button
            className="modal__submit"
            type="submit"
            onClick={handleSubmit}
          >
            {buttonTxt}
          </button> */}
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
