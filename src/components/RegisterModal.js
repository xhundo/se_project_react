import React, { useEffect, useMemo, useRef, useState } from 'react';
import ModalWithForm from './ModalWithForm';
import { useHistory } from 'react-router-dom';
import { regex } from '../utils/constants';

function RegisterModal({
  handleSignUp,
  modalOpen,
  closeModal,
  closeByTarget,
  closeByEsc,
  modalLogin,
  isLoggedIn,
}) {
  const [email, setEmail] = useState('');
  const history = useHistory();
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');

  useEffect(() => {
    setEmail('');
    setPassword('');
    setName('');
    setAvatar('');
  }, [modalOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignUp(name, avatar, email, password)
      .then(() => {
        isLoggedIn(true);
        history.push('/profile');
        closeModal();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const isValid = useMemo(() => {
    return (
      password.length >= 9 &&
      email.length > 1 &&
      name.length > 1 &&
      email.match(regex)
    );
  }, [email, password, name]);

  return (
    <ModalWithForm
      title="Sign up"
      buttonTxt="Next"
      isOpen={modalOpen}
      closeModal={closeByTarget}
      closeByEsc={closeByEsc}
      onClose={closeModal}
      name="register"
      handleSubmit={handleSubmit}
    >
      <label className="modal__input-label">Email*</label>
      <input
        className="modal__input"
        type="text"
        name="email"
        value={email}
        pattern={regex}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email*"
        required
      />
      <label className="modal__input-label">Password*</label>
      <input
        className="modal__input"
        type="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        minLength="9"
        required
      />
      <label className="modal__input-label">Name</label>
      <input
        className="modal__input"
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
      />
      <label className="modal__input-label">Avatar URL</label>
      <input
        className="modal__input-avatar"
        type="text"
        name="avatar"
        value={avatar}
        onChange={(e) => setAvatar(e.target.value)}
        placeholder="Avatar URL"
      />
      <div className="modal__submit-btn">
        <button
          disabled={!isValid}
          className="modal__submit-register"
          onClick={handleSubmit}
        >
          Next
        </button>
        <p className="modal__submit-txt" onClick={modalLogin}>
          or log in
        </p>
      </div>
    </ModalWithForm>
  );
}

export default RegisterModal;
