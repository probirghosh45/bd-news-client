import React,{useState} from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import Sidebar from '../Sidebar'
import AdminNavbar from './AdminNavbar';
import AddProduct from '../ManageProducts/AddProduct';
import EditProduct from '../ManageProducts/EditProduct';
import ManageProducts from '../ManageProducts/ManageProducts';
import AddAdmin from './AddAdmin/AddAdmin';
import DashboardHome from '../DashboardHome/DashboardHome';

const Admin = () => {
    const {adminPanel} = useParams();
    const [editProduct,setEditProduct]=useState({})
    return (
        <div>
            <Row >
                <Col lg={4} md={4} sm={12} xs={12} >
                <Sidebar/>
                </Col>
                <Col lg={8} md={8} sm={12} xs={12} >
                <AdminNavbar/>
                 {
                     adminPanel==="addNews"? <AddProduct/>
                     :adminPanel==="editNews" ? <EditProduct editProduct={editProduct} setEditProduct={setEditProduct} />
                     :adminPanel==="manageNews" ? <ManageProducts setEditProduct={setEditProduct} />
                     :adminPanel==="addAdmin" ? <AddAdmin/>
                     :<DashboardHome/>
                 }
                </Col>
            </Row>
        </div>
    );
};

export default Admin;