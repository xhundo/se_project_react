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
  selector,
  btnAlt,
  disabled,
}) {
  return (
    <div
      className={`modal modal__${name} ${isOpen ? `modal_open` : ''}`}
      onClick={closeModal}
    >
      <div className="modal__content">
        <form
          className="modal__form"
          name={name}
          onKeyDown={closeByEsc}
          noValidate
        >
          <h2 className="modal__title">{title}</h2>
          {children}
          <button
            type="button"
            className="modal__btn-close"
            onClick={onClose}
          ></button>
          <div className="modal__submit-btn">
            <button
              disabled={disabled}
              className={selector}
              onClick={handleSubmit}
            >
              {buttonTxt}
            </button>
            <p className="modal__submit-txt">{btnAlt}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
