import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import logo from '../../assets/images/res-logo.png';
import '../../styles/footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='3' md='4' sm='6'>
            <div className='footer__logo text-start'>
              <img src={logo} alt='logo' />
              <h5>PizzaStack Bites</h5>
              <p>
                A convenient and swift food delivery service that indulges the inner food enthusiast in you.
              </p>
            </div>
          </Col>
          <Col lg='3' md='4' sm='6'>
            <h5 className='footer__title'>Delivery Time</h5>
            <ListGroup className='delivery__time-list'>
              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>Monday - Friday</span>
                <p>10:00am - 9:00pm</p>
              </ListGroupItem>

              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>Saturday - Sunday</span>
                <p>Closed</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg='3' md='4' sm='6'>
            <h5 className='footer__title'>Contact</h5>
            <ListGroup className='delivery__time-list'>
              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>Showroom No 5, GF, GT Central Mall, Malviya Nagar, Jaipur, Rajasthan 302017</span>
              </ListGroupItem>

              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>Contact Details: +91 701438****</span>
              </ListGroupItem>

              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>Email: mohityadav7014387036@gmail.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg='3' md='4' sm='6'>
            {/* The "Newsletter" section has been removed */}
          </Col>
        </Row>
        <Row className='mt-5'>
          <Col lg='6' md='6'>
            <p className='copyright__text'>
              Copyright - 2023, made by Mohit Yadav
            </p>
          </Col>
          <Col lg='6' md='6'>
            <div className='social__links d-flex align-items-center gap-4 justify-content-end'>
              <p className='m-0'>Follow us: </p>
              <span>
                <Link to='https://www.facebook.com/profile.php?id=100076348553612'>
                  <i className='ri-facebook-circle-fill'></i>
                </Link>
              </span>
              <span>
                <Link to='https://github.com/mohitydv11'>
                  <i className='ri-github-fill'></i>
                </Link>
              </span>
              <span>
                <Link to='https://www.linkedin.com/in/mohit-yadav-142457244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'>
                  <i className='ri-linkedin-box-fill'></i>
                </Link>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
