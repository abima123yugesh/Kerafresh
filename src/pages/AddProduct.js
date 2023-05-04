import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { Form, Input, Button, Select, Upload, message, Skeleton } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { getProductCategorys } from "../features/productCategory/productcategorySlice";

const { Option } = Select;

const AddProduct = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductCategorys())
  }, [dispatch])

  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [imageList, setImageList] = useState([]);
  const [values,setValues] = useState({
    title:"",description:"",price:"",category:"",quantity:""
  })
let name, value;
const handleInputs = (e) => {
  const { name, value } = e.target;
  setValues({ ...values, [name]: value });
};

const handleCategorySelect = (value) => {
  setValues({ ...values, category: value });
};

  const PostData = async (e) => {
    //  e.preventDefault();
      setLoading(true);
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("description", values.description);
    formData.append("price", values.price);
    formData.append("category", values.category);
    formData.append("quantity", values.quantity);
    imageList.forEach((image) => {
      formData.append("images", image.originFileObj);
    });

    

    try {
      const response = await axios.post("http://localhost:5000/api/product", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Product added:", response.data);
      message.success("Product added successfully");
      form.resetFields();
      setValues({ ...values, title: "", price: ""});
    }catch (error) {
      console.error(error);
      message.error("Failed to add product");
    }
    setLoading(false);
  };
   
  const beforeUpload = (file) => {
    const isJpgOrPng =
      file.type === "image/jpeg" ||
      file.type === "image/png" ||
      file.type === "image/webp";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG/webp file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must be smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
  };

  const handleUploadChange = ({ fileList }) => {
    setImageList(fileList);
  };

  const handleUploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  const renderUpload = () => (
    <Upload
      listType="picture-card"
      fileList={imageList}
      beforeUpload={beforeUpload}
      onChange={handleUploadChange}
    >
      {imageList.length >= 8 ? null : handleUploadButton}
    </Upload>
  );

  const catState = useSelector((state) => state.productcategory.productcategory)
  return (
    <>
      <Skeleton loading={loading} active>
        <Form
          form={form}
             initialValues={{ remember: true }}
                layout="vertical"
        >
          <Form.Item label="Title">
            <Input   name="title"  value={values.title}  onChange={handleInputs} />
          </Form.Item>
              <Form.Item label="Price">
            <Input  name="price" value={values.price} onChange={handleInputs} />
          </Form.Item>
          <Form.Item label="quantity"  name="quantity" >
            <Input name="quantity" value={values.quantity} onChange={handleInputs} />
          </Form.Item>
          <Form.Item label="Description" name="description">
            <Input.TextArea name="description"  value={values.description} onChange={handleInputs}  />
          </Form.Item>
          <Form.Item label="Product Category" name="category" >
            <Select name="category" placeholder="Select a category" value={values.category} onChange={handleCategorySelect}>
              {catState?.map((i, j) => {
                  return (
                    <Option key={j} value={i?.title}  >
                      {i?.title}
                    </Option>
                  )
                })
              }
            </Select>
          </Form.Item>
          <Form.Item
            label="Upload Images"
            name="images"
            valuePropName="fileList"
            getValueFromEvent={(e) => {
              if (Array.isArray(e)) {
                return e;
              }
              return e && e.fileList;
            }}
          >
            {renderUpload()}
          </Form.Item>
          <Form.Item>
            <Button type="primary" onClick={PostData}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Skeleton>
    </>
  );
};

export default AddProduct;
