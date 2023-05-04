import { Modal, Table } from "antd";
import { MdEditNote, MdOutlineDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  deleteAProduct,
  getProducts,
  resetState,
} from "../features/products/productSlice";

const columns = [
  {
    title: "Sl. No.",
    dataIndex: "key",
  },
  {
    title: "Title",
    dataIndex: "title",
  },
  {
    title: "Price",
    dataIndex: "price",
  },
  {
    title: "Category",
    dataIndex: "category",
  },
  {
    title: "Quantity",
    dataIndex: "quantity",
  },
  {
    title: "Images",
    dataIndex: "images",
    render: (images) =>
      images.map((images, index) => (
        <img
          src={images}
          alt="product"
          width="100px"
          className={
            index === 0 ? "product-image" : "product-image margin-left-10"
          }
        />
      )),
  },
  {
    title: "Actions",
    dataIndex: "action",
  },
];

const ProductList = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [productId, setProductId] = useState("");
  const dispatch = useDispatch();

  const showModal = (id) => {
    setModalVisible(true);
    setProductId(id);
  };

  const handleOk = () => {
    dispatch(deleteAProduct(productId));
    setModalVisible(false);
    setTimeout(() => {
      dispatch(getProducts());
    }, 100);
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const productState = useSelector((state) => state.product.products);
  const data = [];
  for (let i = 0; i < productState?.length; i++) {
    const imageUrls = productState[i]?.images.map((image) => image); // This is an array of image urls
    data.push({
      key: i + 1,
      title: productState[i]?.title,
      description: productState[i]?.description,
      price: `₹ ${productState[i]?.price}`,
      category: productState[i]?.category,
      quantity: productState[i]?.quantity,
      images: imageUrls,
      action: (
        <>
          <Link
            to={`/main/edit-product/${productState[i]._id}`}
            className="fs-3 text-primary"
          >
            <MdEditNote />
          </Link>
          <button
            className="ms-3 fs-3 text-danger bg-transparent border-0"
            onClick={() => showModal(productState[i]._id)}
          >
            <MdOutlineDeleteForever />
          </button>
        </>
      ),
    });
  }
  useEffect(() => {
    dispatch(resetState());
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <div>
      <h3 className="mb-4 title">Products List </h3>
      <div>
        <Table columns={columns} dataSource={data} />
        <Modal
          title="Confirm Delete"
          open={modalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <p>Are you sure you want to delete this product</p>
        </Modal>
      </div>
    </div>
  );
};
export default ProductList;
