import React from 'react';
import { Col, ListGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomeSidebar = () => {
    return (
        <div>
        <Row className="">
          <Col>
          <ListGroup className="text-center home__sidebar__style">
              <ListGroup.Item  as={Link} to="/"  style={{ backgroundColor:"pink", fontSize:"30px",fontWeight:"bold" }} >News Category</ListGroup.Item>
              <ListGroup.Item as={Link} to="/nationalNews"  className="home__sidebar__item mt-3" style={{ backgroundColor:"#54B12B" }} >National News</ListGroup.Item>
              <ListGroup.Item as={Link} to="/internationalNews" className="home__sidebar__item" style={{ backgroundColor:"#54B12B" }} >International News</ListGroup.Item>
              <ListGroup.Item as={Link} to="/sportsNews" className="home__sidebar__item" style={{ backgroundColor:"#54B12B" }} >Sports News</ListGroup.Item>
            </ListGroup>  
          </Col>
       </Row>
        </div>
    );
};

export default HomeSidebar;