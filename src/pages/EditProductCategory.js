import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Input, Button, Upload, message, Skeleton } from "antd";
import {  PlusOutlined } from "@ant-design/icons";
import { base_url } from "../utils/base_url";
import { useParams } from "react-router-dom";

const EditProductCategory = () => {
  const [category, setCategory] = useState(null);
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);

  const params = useParams();

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await axios.get(`${base_url}productcategory/${params.id}`);
        const { data } = response;
        setCategory(data);
        form.setFieldsValue({
          title: data.title
        });
        setImageUrl(data.images[0]);
      } catch (error) {
        console.log("error fetching category", error);
      }
    };

    fetchCategory();
  }, [params.id, form]);

  const handleFormSubmit = async (values) => {
    try {
      setLoading(true);
      const updateData = {
        title: values.title,
        images: [imageUrl]
      };

      const response = await axios.put(`${base_url}productcategory/${params.id}`, updateData);
      const updatedCategory = response.data;
      setCategory(updatedCategory);
      message.success("Category updated successfully.");
    } catch (error) {
      console.log("error updating category", error);
      message.error("Something went wrong while updating category.");
    } finally {
      setLoading(false);
    }
  };


  return (
    <div>
      {!category ? (
        <Skeleton active />
      ) : (
        <Form
          form={form}
          layout="vertical"
          onFinish={handleFormSubmit}
          initialValues={{ title: category.title }}
        >
          <Form.Item
            name="title"
            label="Title"
            rules={[{ required: true, message: "Please enter a title." }]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Image">
  <Upload
    list
    showUploadList={false}
    maxCount={1}
  >
    {imageUrl ? (
      <img src={imageUrl} alt="category" style={{ width: "100%" }} />
    ) : (
      <Button icon={<PlusOutlined />}>Upload Image</Button>
    )}
  </Upload>
  </Form.Item>
  <Form.Item>
  <Button type="primary" htmlType="submit" loading={loading}>
    Update
  </Button>
  </Form.Item>
</Form>
      )
}
</div>
  )
}

export default EditProductCategory
