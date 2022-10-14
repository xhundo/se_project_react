import ModalWithForm from "./ModalWithForm";

function AddItemModal({
  isOpen,
  closeModal,
  closeByEsc,
  closeByTarget,
  onAddItem,
}) {
  {
    return (
      <ModalWithForm
        isOpen={isOpen}
        title="New garment"
        names="addItem"
        buttonTxt="Add garment"
        onClose={closeModal}
        closeByEsc={closeByEsc}
        closeModal={closeByTarget}
        onAddItem={onAddItem}
      />
    );
  }
}

export default AddItemModal;
