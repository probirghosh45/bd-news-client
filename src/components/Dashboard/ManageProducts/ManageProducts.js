import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import ActionItems from './ActionItems';

const ManageProducts = ({setEditProduct}) => {


    const [items,setItems]=useState([]);

    useEffect(() => {
      axios.get('http://localhost:7500/news')
          .then(response => {setItems(response.data);})
          .catch(error => {console.log(error)})
  }, [])
  
   
  const handleDeleteItem = id => {
    const removedItems = items.filter(item => item._id !== id);
  
    axios.delete(`http://localhost:7500/delete/${id}`)
        .then(response => {
            response && setItems(removedItems);;
        })
        .catch(error => {
            console.log(error);
        })
  
      }


    return (
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
                items.map(item => <ActionItems item={item} key={item._id} handleDeleteItem={handleDeleteItem}  setEditProduct={setEditProduct} />)
            }
        </Table>
    </div>
    );
};

export default ManageProducts;