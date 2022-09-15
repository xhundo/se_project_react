import "../blocks/ItemCard.css";
import tshirt from "../images/Tshirt.png";
import shorts from "../images/Shorts.png";
import cap from "../images/Cap.png";
import sneakers from "../images/Sneakers.png";

function ItemCard() {
  return (
    <>
      <div className="item__content">
        <div className="item">
          <div className="item__title-content">
            <p className="item__title">T-Shirt</p>
          </div>
          <div className="item__btn">
            <button className="item__like"></button>
          </div>
        </div>
        <div className="item__img-content">
          <img className="item__img" src={tshirt} />
        </div>
      </div>
      <div className="item__content">
        <div className="item">
          <div className="item__title-content">
            <p className="item__title">Shorts</p>
          </div>
          <div className="item__btn">
            <button className="item__like"></button>
          </div>
        </div>
        <div className="item__img-content">
          <img className="item__img" src={shorts} />
        </div>
      </div>
      <div className="item__content">
        <div className="item">
          <div className="item__title-content">
            <p className="item__title">Cap</p>
          </div>
          <div className="item__btn">
            <button className="item__like"></button>
          </div>
        </div>
        <div className="item__img-content">
          <img className="item__img" src={cap} />
        </div>
      </div>
      <div className="item__content">
        <div className="item">
          <div className="item__title-content">
            <p className="item__title">Sneakers</p>
          </div>
          <div className="item__btn">
            <button className="item__like"></button>
          </div>
        </div>
        <div className="item__img-content">
          <img className="item__img" src={sneakers} />
        </div>
      </div>
    </>
  );
}

export default ItemCard;
