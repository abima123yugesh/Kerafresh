import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getOrders } from "../features/orders/orderSlice";
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const Charts = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getOrders());
    }, [dispatch]);

    const orderState = useSelector((state) => state.order.createdOrders);

    // Calculate total number of orders
    const totalOrders = orderState?.length;

    // Calculate total amount of all orders
    const totalAmount = orderState?.reduce((total, order) => total + order.amount, 0);

    // Create data for chart
    const chartData = [
        { name: "Total Orders", value: totalOrders },
        { name: "Total Amount", value: totalAmount },
    ];

    // Define colors for chart slices
    const colors = ['#8884d8', '#82ca9d'];

    return (
        <div className="chart-container">
            <PieChart width={400} height={400}>
                <Pie
                    data={chartData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    label
                >
                    {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                    ))}
                </Pie>
                <Tooltip />
                <Legend />
            </PieChart>
        </div>
    );
}

export default Charts;