import React, { useState } from "react";
import axios from "axios";
import { Form, Input, Button, Upload, message, Skeleton } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";

const AddProductCategory = () => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const [imageList, setImageList] = useState([]);
    const [values,setValues] = useState({
      title:"",
    })
    let name, value;
    const handleInputs=(e)=>{
        name=e.target.name;
        value = e.target.value;
        setValues({...values,[name]:value});
      }
      const PostData = async (e) => {
          setLoading(true);
        const formData = new FormData();
        formData.append("title", values.title);
        imageList.forEach((image) => {
          formData.append("images", image.originFileObj);
        });

        try {
            const response = await axios.post("http://localhost:5000/api/productcategory", formData, {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            });
            message.success("Product added successfully");
            form.resetFields();
            setValues({ ...values, title: "" });
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
  return (
    <>
              <Skeleton loading={loading} active>
        <Form
          form={form}
          name="add-product"
          initialValues={{ remember: true }}
                layout="vertical"
        >
          <Form.Item label="Title">
            <Input   name="title"  value={values.title}  onChange={handleInputs} />
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
  )
}

export default AddProductCategory