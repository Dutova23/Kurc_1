import React, { useState, useEffect} from 'react';
import { Form, Image, Button } from 'react-bootstrap';
import mesto from './mesto.png'; // Убедитесь, что путь к изображению указан правильно
import './Zayvka.css'; // Импортируйте CSS файл
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';


function Zayvka() {
    const [image, setImage] = useState(null);
    const [location, setLocation] = useState(null);
    const [description, setDescription] = useState('');

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
          const { latitude, longitude } = position.coords;
          setLocation(`${latitude.toFixed(4)}, ${longitude.toFixed(4)}`);
        });
      }, []);
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Отправить данные формы на сервер или обработать их другим способом
      console.log('Данные формы отправлены:');
      console.log('Изображение:', image);
      console.log('Местоположение:', location);
      console.log('Описание:', description);
    };
  
    const handleImageChange = (event) => {
      const file = event.target.files[0];
      setImage(URL.createObjectURL(file));
    };
  
  
    return (
      <div className="form-container">
        <Form onSubmit={handleSubmit} style={{ width: '450px' }}>
          <h2 className="form-header">Заявка</h2>
          <div style={{ textAlign: 'center', margin: '20px 0' }}>
            <Image src={mesto} fluid style={{ maxWidth: '150px', height: 'auto' }} />
          </div>
          <Form.Group controlId="image">
            <Form.Label>Загрузить фотографию</Form.Label>
            <Form.Control type="file" accept=".jpg, .jpeg, .png" onChange={handleImageChange} />
          </Form.Group>
          {image && (
            <div style={{ textAlign: 'center', margin: '20px 0' }}>
              <Image src={image} fluid style={{ maxWidth: '50px', height: 'auto' }} />
            </div>
          )}
          
          <Form.Group controlId="location">
            <Form.Label>Геометка</Form.Label>
            <Form.Control type="text" value={location} readOnly className="location-border" />
          </Form.Group>
          
          <Form.Group controlId="description">
            <Form.Label>Описание</Form.Label>
            <Form.Control as="textarea" rows={5} onChange={(event) => setDescription(event.target.value)} />
          </Form.Group>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <Button 
              variant="primary" 
              type="submit"
              className="custom-button"
            >
              Отправить заявку
            </Button>
          </div>
        </Form>
      </div>
    );
  }
  
  export default Zayvka;
