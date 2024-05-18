import React, { Component } from 'react'
import { Container } from 'react-bootstrap'

function Footer() {


  return (
    <>
        <Container fluid style={{ backgroundColor: '#D0D0D0', color: '#ffffff'}}>
          <Container style={{display: 'flex', justifyContent:'center', height:'55px', textAlign:'center'}}>
            <p>Политика в отношении обработки персональных данных</p>
            <p>Пользовательское соглашение</p>
            <p>Политика использования файлов cookie</p>
            <p>©Защитник природы, 2024. Все права защищены</p>
          </Container>
        </Container>
    </>
  )
}

export default Footer 