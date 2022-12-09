import '../blocks/ModalWithForm.css';

/* You selected the wrong weather type thats why your item does not show up in clothes. The current weather type is cold */

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
          onSubmit={handleSubmit}
        >
          <h2 className="modal__title">{title}</h2>
          {children}
          <button
            type="button"
            className="modal__btn-close"
            onClick={onClose}
          ></button>
          <div className="modal__submit-btn">
            <button disabled={disabled} type="submit" className={selector}>
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
