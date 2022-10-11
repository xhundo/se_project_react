import "../blocks/ItemModal.css";

function ItemModal({ card, onClose, closeModal, isOpen, deleteCard }) {
  const handleDeleteCard = () => {
    deleteCard(card.id);
    onClose();
  };

  return (
    <div
      className={`item__modal ${isOpen ? `modal_open` : ""}`}
      onClick={closeModal}
    >
      <div className="item__modal-content">
        <img className="item__preview" src={card.imageUrl} alt={card.name} />
        <div className="item__container">
          <p className="item__description">{card.name}</p>
          <button className="item-btn__delete" onClick={handleDeleteCard}>
            Delete Item
          </button>
        </div>
        <p className="item__temp">Weather: {card.weather}</p>
        <button className="item-btn__close" onClick={onClose}></button>
      </div>
    </div>
  );
}

export default ItemModal;
