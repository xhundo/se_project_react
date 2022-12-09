import React, { useEffect, useMemo, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { regex } from '../utils/constants';

import ModalWithForm from './ModalWithForm';

function LoginModal({
  handleSignIn,
  modalOpen,
  closeModal,
  closeByTarget,
  closeByEsc,
  showLoginError,
  setShowLoginError,
}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignIn(email, password)
      .then(() => {
        history.push('/profile');
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const isValid = useMemo(() => {
    return password.length >= 9 && email.length >= 1 && email.match(regex);
  }, [email, password]);

  useEffect(() => {
    setEmail('');
    setPassword('');
    setShowLoginError();
  }, [modalOpen]);

  return (
    <ModalWithForm
      buttonTxt="Log in"
      title="Log in"
      name="log"
      isOpen={modalOpen}
      closeModal={closeByTarget}
      onClose={closeModal}
      closeByEsc={closeByEsc}
      selector={'modal__submit-login'}
      btnAlt="or Register"
      handleSubmit={handleSubmit}
      disabled={!isValid}
    >
      <label className="modal__input-label" htmlFor="email">
        Email
      </label>
      <input
        className="modal__input"
        id="email"
        type="text"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <label
        className={showLoginError ? `modal__input-error` : `modal__input-label`}
        htmlFor="password"
      >
        {showLoginError ? 'Incorrect password' : 'Password'}
      </label>
      <input
        className={
          showLoginError ? `modal__input-password-error` : `modal__input-avatar`
        }
        id="password"
        type="password"
        name="password"
        value={password}
        minLength="9"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      {/* <div className="modal__submit-btn">
        <button
          className="modal__submit-login"
          onClick={handleSubmit}
          disabled={!isValid}
        >
          Log in
        </button>
        <p className="modal__submit-txt">or Register</p>
      </div> */}
    </ModalWithForm>
  );
}

export default LoginModal;
