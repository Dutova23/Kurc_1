import React, { useState } from 'react';
import './Obratno.css'; // Подключаем файл стилей для компонента

function Obratno() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь можно добавить логику отправки сообщения
    console.log('Отправлено:', { email, name, message });
    setEmail('');
    setName('');
    setMessage('');
  };

  return (
    <div className="obratno-container">
      <h2 className="obratno-title">Обратная связь</h2>
      <form onSubmit={handleSubmit} className="obratno-form">
        <div className="form-group">
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="ФИО"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <textarea
            placeholder="Сообщение"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="form-control"
            required
          ></textarea>
        </div>
        <button type="submit" className="btn-submit">Отправить сообщение</button>
      </form>
    </div>
  );
}

export default Obratno;
