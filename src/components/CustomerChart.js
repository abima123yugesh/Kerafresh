import { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllUsers } from "../features/user/userSlice";
import { getOrders } from "../features/orders/orderSlice";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";



const CustomerChart = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(getOrders());
  }, [dispatch]);

  const customerState = useSelector((state) => state.user.customers);
  const orderState = useSelector((state) => state.order.createdOrders);

// Calculate total number of orders
const totalOrders = useMemo(() => orderState?.length || 0, [orderState]);

  // Calculate total number of customers
  const totalCustomers = useMemo(() => customerState?.length, [customerState]);

  // Create data for chart
  const chartData = useMemo(
    () => [
      { name: "Total Orders", value: totalOrders },
      { name: "Total Customers", value: totalCustomers },
    ],
    [totalOrders, totalCustomers]
  );

  return (
    <>
      <LineChart width={800} height={600} data={chartData}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="value" stroke="#82ca9d"  />
      </LineChart>

    </>
  );
};

export default CustomerChart;