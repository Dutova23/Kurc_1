import React, { useState } from 'react';
import './Regilogi.css'; 
import ava from './avatar.svg';
import fon from './bg.svg';

function Login() {
  const [isRegistering, setIsRegistering] = useState(false);
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const toggleMode = () => {
    setIsRegistering(!isRegistering);
    setPhone('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="container">
      <div className="img">
        <img src={fon} alt="Background" />
      </div>
      <div className="login-content">
        <form action="index.html">
          <img src={ava} alt="Avatar" />
          <h3 className="title">{isRegistering ? 'Регистрация' : 'Вход'}</h3>
          <div className={`input-div one ${phone ? 'focus' : ''}`}>
            <div className="i">
              <i className="fas fa-user"></i>
            </div>
            <div className="div">
              <h5 style={{ display: phone ? 'none' : 'block' }}>Телефон</h5>
              <input type="text" className="input" value={phone} onChange={handlePhoneChange} />
            </div>
          </div>
          <div className={`input-div pass ${password ? 'focus' : ''}`}>
            <div className="i">
              <i className="fas fa-lock"></i>
            </div>
            <div className="div">
              <h5 style={{ display: password ? 'none' : 'block' }}>Пароль</h5>
              <input type="password" className="input" value={password} onChange={handlePasswordChange} />
            </div>
          </div>
          {isRegistering && (
            <div className={`input-div pass ${confirmPassword ? 'focus' : ''}`}>
              <div className="i">
                <i className="fas fa-lock"></i>
              </div>
              <div className="div">
                <h5 style={{ display: confirmPassword ? 'none' : 'block' }}>Подтвердите пароль</h5>
                <input type="password" className="input" value={confirmPassword} onChange={handleConfirmPasswordChange} />
              </div>
            </div>
          )}
          {!isRegistering && <a href="#">Забыли пароль?</a>}
          <div style={{ marginTop: '10px', background: '#38d39f', borderRadius: '32.5px'}}>
            <input type="submit" className="btn" value={isRegistering ? 'Зарегистрироваться' : 'Войти'} />
          </div>
          <div className="toggle-container">
            <p onClick={toggleMode}>
              {isRegistering ? 'Уже есть аккаунт? Войти' : 'Нет аккаунта? Регистрация'}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
