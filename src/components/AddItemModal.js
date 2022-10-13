import React from "react";
import ModalWithForm from "./ModalWithForm";

function AddItemModal({
  isOpen,
  onAddItem,
  closeModal,
  closeByEsc,
  closeByTarget,
}) {
  const [name, setName] = React.useState("");
  const [imageUrl, setImageUrl] = React.useState("");
  const [weather, setWeather] = React.useState(null);

  React.useEffect(() => {
    setName("");
    setImageUrl("");
    setWeather(null);
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

  return (
    <ModalWithForm
      isOpen={isOpen}
      title="New garment"
      name="create"
      buttonTxt="Add garment"
      onClose={closeModal}
      closeByEsc={closeByEsc}
      closeModal={closeByTarget}
      handleSubmit={handleSubmit}
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
          onChange={handleWeather}
        />
        Cold
      </label>
    </ModalWithForm>
  );
}

export default AddItemModal;
