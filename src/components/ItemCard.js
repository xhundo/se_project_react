import "../blocks/ItemCard.css";
import tshirt from "../images/Tshirt.png";
import shorts from "../images/Shorts.png";
import cap from "../images/Cap.png";
import sneakers from "../images/Sneakers.png";

function ItemCard({ card, cardClick }) {
  return (
    <>
      <div className="item__content">
        <div className="item">
          <div className="item__title-content">
            <p className="item__title">{card.name}</p>
          </div>
          <div className="item__btn">
            <button className="item__like"></button>
          </div>
        </div>
        <img
          className="item__img"
          src={card.link}
          alt={card.name}
          onClick={cardClick}
        />
      </div>
    </>
  );
}

export default ItemCard;
