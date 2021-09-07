import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Preloader from '../../Preloader/Preloader';
import ServicesDetails from '../../ServicesDetails/ServicesDetails';

const InternationalNews = () => {

    const [services,setServices]=useState([])
    // console.log(services)
    const [preloader, setPreloader] = useState(true)

    useEffect(()=>{

        axios.get('https://blooming-river-53742.herokuapp.com/news')
        .then(res=>{
            setServices(res.data)
            setPreloader(false)
        })
        .catch(err=>console.log(err))
     },[])

     const internationalNews = services.filter(res => res.newsCategory === 'International News')
    // console.log(internationalNews);
    return (
        <div>
            <h3 className='text-center mb-5 pt-3' style={{ fontWeight: '600' }}> International <span style={{ color: '#5DD233' }}>News</span></h3>
               
                <div className="container">
                    <div className="text-center">{preloader && <Preloader />}</div>
                    <Row md={3} lg={3} sm={12} xs={12}>    
                    {
                        internationalNews.map((service)=><ServicesDetails service={service}/>)
                    }
                    </Row>
                </div>

        </div>
    );
};

export default InternationalNews;