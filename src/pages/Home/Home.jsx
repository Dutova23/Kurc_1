import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useNavigate, Routes, Route } from 'react-router-dom';
import promoImg from '../../imgs/Figurs1.png';
import Zayvka from '../../pages/Zayvka';
import './home.css';
import addit from './oproekt.png';
import ans from './an.png';
import dens from './den.png';
import mashs from './mash.png';
import sans from './san.png';
import Aktuals from './Aktual.png';
import Instruks from './Instruk.png';


function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Zayvka');
  };

  return (
    <div className="scrollable-container">
      <Container>
        <div className="main-content">
          <h1>Охрана<br/>природы - это<br/> ты!</h1>
          <Button
            onClick={handleClick}
            style={{ backgroundColor: '#79E088', color: '#fff', borderRadius: '32.5px', borderColor: '#000000',fontSize: '25px'}}>
            Очистить природу
          </Button>
        </div>
        <img src={promoImg} width={600} alt="Promo" />
      </Container>
      <Container style={{ marginTop: '80px' }}>
        <div className="additional-content">
          <h1>О проекте</h1>
          <div className="additional-description">
            <div className="additional-text">
              <img src={addit} alt="Additional" />
              <p3>
              Приложение "Защитник природы" представляет собой веб-приложение, предназначенное для сбора 
              и систематизации информации о фактах загрязнения окружающей среды 
              на территории всего города Барнаула.
              </p3>
            </div>
            <div className="additional-photos">
              {/* Вставьте здесь ваши 4 фотографии */}
              <div className="photo-with-text">
                <img src={ans} alt="Photo1" />
                <h2>Дутова Анна Александровна</h2>
                <p>Дизайнер</p>
              </div>
              <div className="photo-with-text">
                <img src={dens} alt="Photo2" />
                <h2>Лопушанский Денис Константинович</h2>
                <p>Scrum-master</p>
              </div>
              <div className="photo-with-text">
                <img src={mashs} alt="Photo3" />
                <h2>Бирюк Мария Денисовна</h2>
                <p>Разработчик</p>
              </div>
              <div className="photo-with-text">
                <img src={sans} alt="Photo4" />
                <h2>Соколов Александр Евгеньевич</h2>
                <p>Системный аналитик</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container style={{ marginTop: '80px' }}>
        <div className="aktual-content">
          <h1>Актуальность</h1>
              <img src={Aktuals} alt="Aktual" />
          </div>
      </Container>
      <Container style={{ marginTop: '80px' }}>
        <div className="instruk-content">
          <h1>Инструкция</h1>
              <img src={Instruks} alt="instruk" />
          </div>
      </Container>
      <Routes>
        <Route path='/Zayvka' element={<Zayvka />} />
      </Routes>
    </div>
  );
}

export default Home;
