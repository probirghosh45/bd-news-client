import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import swal from 'sweetalert';
import ActionItems from './ActionItems';
import AddProduct from './AddProduct';


const EditProduct = ({ editProduct, setEditProduct }) => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get('https://blooming-river-53742.herokuapp.com/news')
            .then(response => {
                setItems(response.data);
                // setLoading(false);
            })
            .catch(error => {
                console.log(error);
            })
    }, [])


    const updateProduct = Product => {
        axios.patch(`https://blooming-river-53742.herokuapp.com/update/${editProduct?._id}`, Product)
            .then(response => response.data && swal("Successfully updated", "Your product is successfully updated!", "success"))
            .catch(error => console.log(error));
    }


    return (
        <>
            {editProduct?._id ? <AddProduct editProduct={editProduct} updateProduct={updateProduct} /> :
                <div className="pt-4 mt-5 bg-white" style={{ borderRadius: "15px" }}>
                    <Table hover borderless responsive>
                        <thead className="bg-light">
                            <tr>
                            <th>Photo</th>
                            <th>News Title</th>
                            <th>Author</th>
                            <th>Category</th>
                            <th>Description</th>
                            <th>Action</th>
                            </tr>
                        </thead>
                        {
                            items.map(item => <ActionItems item={item} key={item._id} setEditProduct={setEditProduct} />)
                        }
                    </Table>
                </div>}
        </>
    );
};

export default EditProduct;