/* На данный момент страница не рабочая*/
import React, { Component } from 'react'
import { Container } from 'react-bootstrap';
import { Form } from 'react-router-dom';
import { Button } from 'bootstrap';


export default class Contacts extends Component {
  render() {
    return (
      <>
      <Container>
        <h1>Обратная связь</h1>
        <Form>
          <Form.Group controlId="formBasicPhone">
            <Form.Label>Номер телефона</Form.Label>
            <Form.Control type="phone" placeholder="Enter phone"/>
            <Form.Text>
              Данные не передаються иным третьим лицам
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Пароль</Form.Label>
            <Form.Control type="textarea" rows="3"/>
          </Form.Group>

          <Form.Group controlId="formBasicChekbox">
            <Form.Check type="checkbox" label="Check me out"></Form.Check>
          </Form.Group>
          <Button variant="primary" type="submit">Отпрвить</Button>
          
        </Form>
      </Container>
      </>
    )
  }
}
