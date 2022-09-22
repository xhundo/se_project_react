import "../blocks/ItemModal.css";

function ItemModal({ card, onClose, closeModal }) {
  return (
    <>
      <div className="item__modal" onClick={closeModal}>
        <div className="item__modal-content">
          <img className="item__preview" src={card.link} alt={card.name} />
          <p className="item__description">{card.name}</p>
          <p className="item__temp">Weather: {card.weather}</p>
          <button className="item-btn__close" onClick={onClose}></button>
        </div>
      </div>
    </>
  );
}

export default ItemModal;
