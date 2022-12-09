import { useContext } from 'react';
import '../blocks/ItemModal.css';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function ItemModal({
  card,
  onClose,
  closeModal,
  isOpen,
  deleteCard,
  isLoggedIn,
}) {
  const handleDeleteCard = () => {
    console.log(card);
    deleteCard(card._id, localStorage.getItem('token'));
    onClose();
  };

  const currentUser = useContext(CurrentUserContext);
  const isOwn = card.owner === currentUser.id;
  const itemDeleteButtonClassName = `item-btn__delete ${
    isOwn ? `item-btn__delete` : `item-btn__delete-hidden`
  }`;

  return (
    <div
      className={`item__modal ${isOpen ? `modal_open` : ''}`}
      onClick={closeModal}
    >
      <div className="item__modal-content">
        <img className="item__preview" src={card.imageUrl} alt={card.name} />
        <div className="item__container">
          <p className="item__description">{card.name}</p>
          <button
            className={
              isLoggedIn ? itemDeleteButtonClassName : `item-btn__delete-hidden`
            }
            onClick={handleDeleteCard}
          >
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
