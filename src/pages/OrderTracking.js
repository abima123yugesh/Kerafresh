import { useSelector, useDispatch } from "react-redux";
import { Button, Select, Table } from "antd";
import { useEffect, useState } from "react";
import { Tag } from "antd";
import { getOrders } from "../features/orders/orderSlice"
import axios from "axios";
import { base_url } from "../utils/base_url";

const OrderTracking = () => {
    const [orderToUpdate, setOrderToUpdate] = useState({});
    const [selectedStatus, setSelectedStatus] = useState("");
    const [orders, setOrders] = useState([]);
    const dispatch = useDispatch();

    const updateOrder = async (orderId, status) => {
        try {
            await axios.put(`${base_url}order/orders/${orderId}`, { status });
            dispatch(getOrders());
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        dispatch(getOrders());
    }, [dispatch]);

    const orderState = useSelector((state) => state.order.createdOrders);

    const data = [];
    for (let i = 0; i < orderState?.length; i++) {
        data.push({
            key: i + 1,
            name: orderState[i]?.username,
            orderid: orderState[i]?.orderid,
            date: orderState[i]?.createdAt?.slice(0, 10),
            status: (
                <Tag color="processing" key={orderState[i]?.status}>
                    {orderState[i]?.status}
                </Tag>
            ),
        });
    }

    const columns = [
        {
            title: "Sl. No.",
            dataIndex: "key",
        },
        {
            title: "Name",
            dataIndex: "name",
        },
        {
            title: "Order ID",
            dataIndex: "orderid",
        },
        {
            title: "Date",
            dataIndex: "date",
        },
        {
            title: "Status",
            dataIndex: "status",
            render: (text, record) => (
                <Select
                    defaultValue={text}
                    onChange={(value) => {
                        setOrderToUpdate(record);
                        setSelectedStatus(value);
                    }}
                >
                    <Select.Option value="processing">Processing</Select.Option>
                    <Select.Option value="ready for dispatch">Ready for Dispatch</Select.Option>
                    <Select.Option value="dispatched">Dispatched</Select.Option>
                    <Select.Option value="delivered">Delivered</Select.Option>
                </Select>
            ),
        },
        {
            title: "Update",
            render: (text, record) => (
                <Button
                    onClick={() => {
                        updateOrder(record.orderid, selectedStatus);
                        setSelectedStatus("");
                    }}
                    disabled={!selectedStatus || record.orderid !== orderToUpdate.orderid}
                >
                    Update
                </Button>
            ),
        },
    ];

    return (
        <div>
            <h3 className="mb-4 title">Orders </h3>
            <div>
                <Table columns={columns} dataSource={data} />
            </div>
        </div>
    );
};

export default OrderTracking;