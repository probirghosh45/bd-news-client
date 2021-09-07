import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { UserContext } from '../../App';
import Footer from '../Home/Footer/Footer';

const NewsDetails = () => {


    const {cart}=useContext(UserContext);

    return (
        <div>
            <Container className="pt-5">
                <h1 className="text-center" style={{color:"crimson"}} >{cart.newsTitle}</h1>
                <h5>Author: {cart.author}</h5>
                <h5>Category: {cart.newsCategory}</h5>
                <img className="text-center" style={{width:"100%",height:"auto"}} src={cart.newsImage} alt="" />
                <p className="pt-3" style={{color:"#212529", fontSize:"15px" }} >{cart.newsDescription}</p>
            </Container>
            <Footer/>
        </div>
    );
};

export default NewsDetails;