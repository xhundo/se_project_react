import React, { useEffect, useState } from 'react';
import ModalWithForm from './ModalWithForm';

function EditProfileModal({
  modalOpen,
  closeByEsc,
  closeByTarget,
  closeModal,
  currentUser,
  handleUserUpdate,
}) {
  useEffect(() => {
    setName(currentUser.name);
    setAvatar(currentUser.avatar);
  }, [modalOpen]);
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    handleUserUpdate({ name, avatar, token: localStorage.getItem('token') });
    closeModal();
  };

  const handleNameInput = (e) => {
    setName(e.target.value);
  };

  const handleAvatarInput = (e) => {
    setAvatar(e.target.value);
  };

  return (
    <ModalWithForm
      title="Change Profile Data"
      isOpen={modalOpen}
      closeByEsc={closeByEsc}
      closeModal={closeByTarget}
      onClose={closeModal}
      handleSubmit={handleSubmit}
      buttonTxt="Save changes"
      name="profile"
    >
      <label className="modal__input-label">Name*</label>
      <input
        className="modal__input"
        type="text"
        required
        value={name}
        placeholder="Name"
        onChange={handleNameInput}
      />
      <label className="modal__input-label">Avatar</label>
      <input
        className="modal__input-avatar"
        type="text"
        required
        value={avatar}
        placeholder="Avatar"
        onChange={handleAvatarInput}
      />
      <button onClick={handleSubmit} className="modal__submit-change">
        Save changes
      </button>
    </ModalWithForm>
  );
}

export default EditProfileModal;
