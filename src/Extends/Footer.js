import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands, solid, regular } from '@fortawesome/fontawesome-svg-core/import.macro';
import { Link } from 'react-router-dom';

// LOGO
// import sitelogo from '../Assets/Logo.png';



function Footer() {
  return (
    <div className='main-footer'>
      <Container>
        <Row>
          <Col sm={12}>
            <div className='f-logo'>
              <Link to={'/'}>
                
              </Link>
            </div>
          </Col>
          <Col sm={12}>
            <ul className='f-nav'>
              <li>
                <Link to={'/'}>Home</Link>
              </li>
              <li>
                <Link to={'/aboutus'}>Link</Link>
              </li>
              
            </ul>
            <ul className='f-social'>
              <li>
                <Link to={'/'}><FontAwesomeIcon icon={brands('discord')} /></Link>
              </li>
              <li>
                <Link to={'/'}><FontAwesomeIcon icon={brands('twitter')} /></Link>
              </li>
              <li>
                <Link to={'/'}><FontAwesomeIcon icon={solid('envelope')} /></Link>
              </li>
            </ul>
          </Col>
          
        </Row>
      </Container>
      





    </div>
  );
}

export default Footer;
