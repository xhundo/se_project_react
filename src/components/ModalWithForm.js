import "../blocks/ModalWithForm.css";
import React, { useState, useEffect } from "react";

function ModalWithForm({
  isOpen,
  closeModal,
  closeByEsc,
  onClose,
  buttonTxt,
  names,
  title,
  onAddItem,
}) {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    setName("");
    setImageUrl("");
  }, [isOpen]);

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleImageChange = (e) => {
    setImageUrl(e.target.value);
  };

  const handleWeather = (e) => {
    setWeather(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({ name, weather, imageUrl });
    onClose();
  };

  return (
    <div
      className={`modal modal__${names} ${isOpen ? `modal_open` : ""}`}
      onClick={closeModal}
    >
      <div className="modal__content">
        <form className="modal__form" name={name} onKeyDown={closeByEsc}>
          <h2 className="modal__title">{title}</h2>
          <label className="modal__input-label">Name</label>

          <input
            className="modal__input"
            type="text"
            placeholder="Name"
            value={name}
            required
            onChange={handleChangeName}
          />

          <label className="modal__input-label">Image</label>

          <input
            className="modal__input"
            type="url"
            value={imageUrl}
            placeholder="Image URL"
            required
            onChange={handleImageChange}
          />

          <label className="modal__input-title">Select the weather type:</label>

          <label className="modal__input-text" htmlFor="hot">
            <input
              className="modal__input-radio"
              id="hot"
              type="radio"
              value="hot"
              name={weather}
              onChange={handleWeather}
            />
            Hot
          </label>
          <label className="modal__input-text" htmlFor="warm">
            <input
              className="modal__input-radio"
              id="warm"
              type="radio"
              value="warm"
              name={weather}
              onChange={handleWeather}
            />
            Warm
          </label>

          <label className="modal__input-text" htmlFor="cold">
            <input
              className="modal__input-radio"
              id="cold"
              type="radio"
              value="cold"
              name={weather}
              onChange={handleWeather}
            />
            Cold
          </label>
          <button
            type="button"
            className="modal__btn-close"
            onClick={onClose}
          ></button>
          <button
            className="modal__submit"
            type="submit"
            onClick={handleSubmit}
          >
            {buttonTxt}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
