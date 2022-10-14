import ModalWithForm from "./ModalWithForm";
import React, { useState, useEffect } from "react";
function AddItemModal({
  isOpen,
  closeModal,
  closeByEsc,
  closeByTarget,
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
    closeModal();
  };
  {
    return (
      <ModalWithForm
        isOpen={isOpen}
        title="New garment"
        name="add"
        buttonTxt="Add garment"
        onClose={closeModal}
        closeByEsc={closeByEsc}
        closeModal={closeByTarget}
        onAddItem={onAddItem}
        handleSubmit={handleSubmit}
        handleWeather={handleWeather}
        handleImageChange={handleImageChange}
      >
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
      </ModalWithForm>
    );
  }
}

export default AddItemModal;
