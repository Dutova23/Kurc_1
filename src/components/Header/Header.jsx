import React from 'react';
import { Container, Nav, Navbar, NavbarCollapse} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import logo from '../../imgs/glavlog.png';
import userlogo from '../../imgs/Vector.png';
import Home from '../../pages/Home/Home';
import Statistics from '../../pages/Statistics';
import Regilogi from '../../pages/Regilogi';
import Obratno from '../../pages/obratno'; // Импортируем новую страницу
import Zayvka from '../../pages/Zayvka';
import '../../App.css';


function Header() {
  return (
    <>
      <Router>
        <Navbar fixed='top' collapseOnSelect expand='md' style={{backgroundColor: '#38d39f', color:"#D0D0D0", height:'60px'}}>
          
            <Navbar.Brand as={Link} to='/' style={{display:'flex', alignItems: 'center'}}>
              <img src={logo} height={50} width={50} alt='Logo'/>
              <span style={{ marginLeft: '10px' }}>Защитник природы</span>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
            <NavbarCollapse id='responsive-navbar-nav' style={{flexDirection: 'row-reverse'}}>
              <Nav className='mr-auto'>
                <Nav.Link as={Link} to='/'>Главная</Nav.Link>
                <Nav.Link as={Link} to='/statistics'>Статистика</Nav.Link>
                <Nav.Link as={Link} to='/obratno'>Обратная связь</Nav.Link>
                <Nav.Link as={Link} to='/zayvka'>Заявка</Nav.Link>
              </Nav>
            </NavbarCollapse>
            <Navbar.Brand as={Link} to='/regilogi'>
              <img src={userlogo} height={30} width={30} alt='UserLogo'/>
            </Navbar.Brand>
          
        </Navbar>

        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/statistics' element={<Statistics />} />
          <Route exact path='/regilogi' element={<Regilogi />} />
          <Route exact path='/obratno' element={<Obratno />} />
          <Route exact path='/zayvka' element={<Zayvka />} />
        </Routes>
      </Router>
    </>
  );
}

export default Header;