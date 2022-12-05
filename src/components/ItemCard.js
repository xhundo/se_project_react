import { useContext, useEffect, useRef } from 'react';
import '../blocks/ItemCard.css';
import { currentUserContext } from '../contexts/CurrentUserContext';

function ItemCard({ card, cardClick, onCardLike, isLoggedIn }) {
  const currentUser = useContext(currentUserContext);
  const isLiked = card.likes.some((like) => like === currentUser.id);
  const token = localStorage.getItem('token');

  const itemButtonLikeClassName = isLiked ? `item__btn-liked` : `item__like`;

  const handleLikeClick = () => {
    onCardLike(card._id, token);
  };

  return (
    <div className="item__content">
      <div className="item">
        <div className="item__title-content">
          <p className="item__title">{card.name}</p>
        </div>
        <div className="item__btn">
          <button
            className={
              isLoggedIn ? itemButtonLikeClassName : `item__liked-hidden`
            }
            onClick={handleLikeClick}
          ></button>
        </div>
      </div>
      <img
        className="item__img"
        src={card.imageUrl}
        alt={card.name}
        onClick={cardClick}
      />
    </div>
  );
}

export default ItemCard;
