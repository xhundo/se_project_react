import "../blocks/ModalWithForm.css";

function ModalWithForm(props) {
  return (
    <>
      <div className={`modal modal__${props.name} `} onClick={props.closeModal}>
        <div className="modal__content">
          <form
            className="modal__form"
            name={props.name}
            onKeyDown={props.closeByEsc}
          >
            <p className="modal__title">{props.title}</p>
            {props.children}
            <button
              className="modal__btn-close"
              onClick={props.onClose}
            ></button>
            <button className="modal__submit" type="submit">
              {props.buttonTxt}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ModalWithForm;
