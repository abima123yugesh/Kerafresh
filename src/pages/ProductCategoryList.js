import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Table } from "antd";
import { MdEditNote, MdOutlineDeleteForever } from "react-icons/md";
import { getProductCategorys } from "../features/productCategory/productcategorySlice";

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
      title: "Images",
      dataIndex: "images",
      render: (images) => images.map((images, index) => (
        <img
        src={images}
        alt="product category"
        className={
            index === 0 ? "product-image" : "product-image margin-left-10"
          }
          />
      ))
    },
    {
      title: "Actions",
      dataIndex: "action",
    },
  ];

function ProductCategoryList() {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getProductCategorys())
      }, [dispatch]);

      const productcategoryState = useSelector((state) => state.productcategory.productcategory)

      const data = [];
      for(let i=0; i < productcategoryState?.length; i++ ) {
        const imageUrls = productcategoryState[i]?.images.map((image) => image);
        data.push({
            key: i+1,
            title: productcategoryState[i]?.title,
            images: imageUrls,
            action: (
                <>
                <Link 
                to={`/main/edit-productcategory/${productcategoryState[i]._id}`}
                className="fs-3  text-primary"
                >
                    <MdEditNote />
                </Link>
                <button 
                className="ms-3 fs-3 text-danger bg-transparent border-0"
                >
                    <MdOutlineDeleteForever />
                </button>
                </>
            )
        })
      }
      
  return (
    <div>
    <h3 className="mb-4 title">Category List </h3>
    <div>
      <Table columns={columns}  dataSource={data}  />
    </div>
  </div>
  )
}

export default ProductCategoryList