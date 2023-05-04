import { useSelector, useDispatch } from "react-redux";
import { Table } from "antd";
import { useEffect } from "react";
import { Tag } from "antd";
import { getOrders } from "../features/orders/orderSlice"

const columns = [
  {
    title: "Sl. No.",
    dataIndex: "key",
    width: 80,
  },
  {
    title: "Name",
    dataIndex: "name",
    width: 400,
  },
  {
    title: "Products",
    dataIndex: "product",
    width: 200,
  },
  {
    title: "Quantity",
    dataIndex: "quantity",
    width: 100,
  },
  {
    title: "Date",
    dataIndex: "date",
    width: 120,
  },
  {
     title: "Contact Number",
    dataIndex: "contactNumber",
    width: 400,
   
  },
  {
    title: "Address",
    dataIndex: "address",
    width: 200,
  },
  {
    title: "Amount",
    dataIndex: "amount",
    width: 400,
    
  },
  
 
];

const Orders = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);


const orderState = useSelector((state) => state.order.createdOrders)
  const data = [];
  for (let i = 0; i < orderState?.length; i++) {
    data.push({
      key: i + 1,
      name: orderState[i]?.username,
      product: orderState[i]?.items?.map((product, index) => (
        <div>
          <p>{product?.title}</p>
        </div>
      )),
      quantity: orderState[i].items?.map((product, index) => (
        <div>
          <p>{product?.quantity}</p>
        </div>
      )),
      amount: orderState[i]?.amount,
      date: orderState[i]?.createdAt?.slice(0, 10),
      address: orderState[i]?.address,
      contactNumber: orderState[i]?.phoneNumber,
    
    
    });
  }

  return (
    <div>
      <h3 className="mb-4 title">Orders </h3>
      <div>
        <Table columns={columns} dataSource={data} style={{ width: '200%' }} />
      </div>
    </div>
  );
};

export default Orders;