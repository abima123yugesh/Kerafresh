import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Input, Button, Upload, message, Skeleton, Select } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { base_url } from "../utils/base_url";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductCategorys } from "../features/productCategory/productcategorySlice";

const { Option } = Select;

const EditProduct = () => {
  const [product, setProduct] = useState(null);
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(
    product?.category || ""
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductCategorys());
  }, [dispatch]);

  const params = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${base_url}product/${params.id}`);
        const { data } = response;
        setProduct(data);
        form.setFieldValue({
          title: data.title,
          price: data.price,
          quantity: data.quantity,
          description: data.description,
        });
        setImageUrl(data.images);
        setSelectedCategory(data.category);
      } catch (error) {
        console.log("error fetching product", error);
        message.error("Error fetching Product");
      }
    };
    fetchProduct();
  }, [params.id, form]);

  const handleFormSubmit = async (values) => {
    try {
      setLoading(true);
      const updateData = {
        title: values.title,
        price: values.price,
        quantity: values.quantity,
        description: values.description,
        category: selectedCategory,
        images: [imageUrl] || product.images[0],
      };
      const response = await axios.put(
        `${base_url}product/${params.id}`,
        updateData
      );
      const updatedProduct = response.data;
      setProduct(updatedProduct);
      setSelectedCategory(updatedProduct.category);
      message.success("Product updated Successfully");
    } catch (error) {
      throw new Error(error);
    } finally {
      setLoading(false);
    }
  };

  const catState = useSelector(
    (state) => state.productcategory.productcategory
  );

  return (
    <div>
      {!product ? (
        <Skeleton active />
      ) : (
        <Form
          form={form}
          layout="vertical"
          onFinish={handleFormSubmit}
          initialValues={{
            title: product.title,
            price: product.price,
            quantity: product.quantity,
            description: product.description,
            category: product.category,
          }}
        >
          <Form.Item
            name="title"
            label="Title"
            rules={[{ required: true, message: "Please enter a title" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="price"
            label="Price"
            rules={[{ required: true, message: "Please enter a price" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="quantity"
            label="Quantity"
            rules={[{ required: true, message: "Please enter a quantity " }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="description"
            label="Description"
            rules={[{ required: true, message: "Please enter a description" }]}
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item
            name="category"
            label="Product Category"
            rules={[
              {
                required: true,
                message: "Please select a product category",
                allowEmpty: !product,
              },
            ]}
          >
            <Select
              onChange={(value) => setSelectedCategory(value)}
              value={selectedCategory}
            >
              {catState?.map((cat) => (
                <Option key={cat.id} value={cat.title}>
                  {cat.title}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label="Image">
            <Upload
              beforeUpload={(file) => {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => {
                  setImageUrl(reader.result);
                };
                return false;
              }}
              showUploadList={false}
            >
              {imageUrl ? (
                <img src={imageUrl} alt="product" style={{ width: "100%" }} />
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
      )}
    </div>
  );
};

export default EditProduct;