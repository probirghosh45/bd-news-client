import React, { useContext, useEffect, useState } from "react";
import { Col, ListGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from '../../App';


const Sidebar = () => {

  const {loggedInUser} =  useContext(UserContext);
  const [isAdmin,setIsAdmin]=useState(false);


  useEffect(()=>{
    fetch('http://localhost:7500/isAdmin',{
        method: 'POST',
        headers: {'content-type':'application/json'},
        body: JSON.stringify({email: loggedInUser.email})
    })
    .then(res => res.json())
    .then(data => setIsAdmin(data))
},[])

  return (
    <div>
      <Row className="pt-4">
        <Col >
        <ListGroup className="text-center sidebar__style">
        <ListGroup.Item  as={Link} to="/"  style={{ backgroundColor:"pink", fontSize:"30px",fontWeight:"bold" }} >BD News</ListGroup.Item>
           {isAdmin && <div>
            <ListGroup.Item as={Link} to="/dashboard/manageNews"  className="sidebar__item mt-3" style={{ backgroundColor:"#54B12B" }} >Manage News</ListGroup.Item>
           <ListGroup.Item as={Link} to="/dashboard/addNews" className="sidebar__item" style={{ backgroundColor:"#54B12B" }} >Add News</ListGroup.Item>
           <ListGroup.Item as={Link} to="/dashboard/editNews" className="sidebar__item" style={{ backgroundColor:"#54B12B" }} >Edit News</ListGroup.Item>
           <ListGroup.Item as={Link} to="/dashboard/addAdmin" className="sidebar__item" style={{ backgroundColor:"#54B12B" }} >Add Admin</ListGroup.Item>
           </div>
           }
          </ListGroup>  
        </Col>
      </Row>
    </div>
  );
};

export default Sidebar;
