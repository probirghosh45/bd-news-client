import React from 'react';
import { Col, ListGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomeSidebar = () => {
    return (
        <div>
        <Row className="">
          <Col>
          <ListGroup className="text-center home__sidebar__style">
              <ListGroup.Item  as={Link} to="/" className="home__sidebar__item_heading" >News Category</ListGroup.Item>
              <ListGroup.Item as={Link} to="/nationalNews"  className="home__sidebar__item mt-3">National News</ListGroup.Item>
              <ListGroup.Item as={Link} to="/internationalNews" className="home__sidebar__item">International News</ListGroup.Item>
              <ListGroup.Item as={Link} to="/sportsNews" className="home__sidebar__item" >Sports News</ListGroup.Item>
            </ListGroup>  
          </Col>
       </Row>
        </div>
    );
};

export default HomeSidebar;