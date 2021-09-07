import axios from "axios";
import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import swal from "sweetalert";

const AddProduct = ({editProduct, updateProduct }) => {
    const {register,handleSubmit,watch,formState: { errors }} = useForm();
    const [imageURL, setImageURL] = useState ("" || editProduct?.productImage);


    const onSubmit = (data) => {
    
        console.log(data);
  
        const productInfo ={
          newsTitle: data.newsTitleData,
          author: data.authorData,
          newsDescription: data.newsDescriptionData,
          newsCategory:data.newsCategoryData,
          newsImage: imageURL
        }
  
        console.log(productInfo);
  
        if(!imageURL){
          return swal ("image is uploading...", "Please Wait for a while...","info" )
        }
  
        if (editProduct?._id) {
          return updateProduct(productInfo)
      }
  
      axios.post('http://localhost:7500/addNews', productInfo )
      .then(res=> {
        res.data && 
        // alert("New Product Added")
        swal("Successfully updated", "Your news is successfully updated!", "success")
      })
      .then(err => console.log(err));
  
  
    }
  
    const handleImageUpload =event =>{
      console.log(event.target.files[0]);
      const imageData=new FormData();
      imageData.set('key','4441c3916186266ff77bdd932599ecfe');
      imageData.append('image', event.target.files[0]);
  
     axios.post('https://api.imgbb.com/1/upload',imageData)
     .then(res=>{
       console.log(res); //check console
       console.log(res.data.data.display_url); //collected directory from console
       setImageURL(res.data.data.display_url);
     })
  
     .catch(err=> console.log(err));
  
  
    }
  

  return (
    <div>
      <Form className="pt-4" onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col lg={6} md={6} sm={12} xs={12}>
            <Form.Group>
              <Form.Label style={{ fontWeight: "Bold" }}>
                News Title
              </Form.Label>
              <Form.Control
                placeholder="Enter News Title"
                className="shadow-none"
                name="newsTitleData" 
                defaultValue={editProduct?.newsTitle} 
                {...register("newsTitleData", { required: true })} 
              />
            </Form.Group>
          </Col>
          <Col lg={6} md={6} sm={12} xs={12}>
            <Form.Group>
              <Form.Label style={{ fontWeight: "Bold" }}>
                Author Name
              </Form.Label>
              <Form.Control
                placeholder="Enter Author Name"
                className="shadow-none"
                name="authorData"
                defaultValue={editProduct?.author}
                {...register("authorData", { required: true })}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="pt-4">
          <Col lg={6} md={6} sm={12} xs={12}>
            <Form.Group>
              <Form.Label style={{ fontWeight: "Bold" }}>
                News Category
              </Form.Label>
              <Form.Control
                placeholder="Enter News Category"
                className="shadow-none"
                name="newsCategoryData" 
                defaultValue={editProduct?.newsCategory} 
                {...register("newsCategoryData", { required: true })} 
              />
            </Form.Group>
          </Col>
          <Col lg={6} md={6} sm={12} xs={12}>
            <Form.Group>
              <Form.Label style={{ fontWeight: "Bold" }}>
                News Description
              </Form.Label>
              <Form.Control
                placeholder="Enter News Description"
                className="shadow-none"
                name="newsDescriptionData"
                defaultValue={editProduct?.newsDescription} 
                {...register("newsDescriptionData", { required: true })}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="pt-4">
          <Col lg={6} md={6} sm={12} xs={12}>
            <Form.Group>
              <Form.Label style={{ fontWeight: "Bold" }}>
                Add News Photo
              </Form.Label>
              {editProduct?._id ? (
                <Button
                  className="d-block shadow-none"
                  as={"label"}
                  htmlFor="photoUpload"
                >
                  Update Photo
                </Button>
              ) : (
                <Button
                  className="d-block shadow-none"
                  as={"label"}
                  htmlFor="photoUpload"
                >
                  Add Photo
                </Button>
              )}

              <Form.Control
                type="file"
                id="photoUpload"
                hidden="hidden"
                {...register("productPhotoUpload", { required: true })}
                // ref={register}
                onChange={handleImageUpload}
              />
            </Form.Group>
          </Col>
          {/* <Col lg={6} md={6} sm={12} xs={12}>
        <div className="mt-4 ">
          <Button
            type="submit"
            
            className="d-block shadow-none"
            variant={editProduct?._id ? "success" : "info"}
          >
            {editProduct?._id ? "Update" : "Save"}
          </Button>
        </div>
          </Col> */}

        </Row>

        <div className="mt-3">
          <Button
            type="submit"
            
            className="d-block shadow-none"
            variant={editProduct?._id ? "success" : "info"}
          >
            {editProduct?._id ? "Update" : "Save"}
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddProduct;
