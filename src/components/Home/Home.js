import React from 'react';
import Services from '../Services/Services';
import NewsLatter from './NewsLatter/NewsLatter';
import Footer from './Footer/Footer'
import Header from '../Header/Header';
import Slider from './Slider/Slider';
import Sidebar from '../Dashboard/Sidebar';
import HomeSidebar from './HomeSidebar/HomeSidebar';
import { Col, Row } from 'react-bootstrap';

const Home = () => {
    return (
        <div>
          <Header/>
         <Row>
          <Col md={3} sm={12} xs={12} >
            <HomeSidebar/>
          </Col >
          <Col md={9}  sm={12} xs={12} >
          <Slider/>  
          </Col>   
        </Row>           
          <Services/>
          <NewsLatter/>
          <Footer/>
        </div>
    );
};

export default Home;