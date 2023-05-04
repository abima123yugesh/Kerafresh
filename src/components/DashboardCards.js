import { Card, Statistic, Col, Row, Divider } from "antd";
import { FiUsers } from "react-icons/fi";
import { FcSalesPerformance } from "react-icons/fc";
import { BsFillCartCheckFill } from "react-icons/bs";
import { getAllUsers } from "../features/user/userSlice";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../features/orders/orderSlice";

const DashboardCard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(getOrders())
  }, [dispatch]);

  const customerState = useSelector((state) => state.user.customers);

  const orderState = useSelector((state) => state.order.createdOrders);

  const totalCustomers = useMemo(() => customerState?.length, [customerState]);
      // Calculate total number of orders
      const totalOrders = orderState?.length;

      //calculate total sales
      const totalSales = useMemo(() => {
        if(!orderState) return 0;

        return orderState?.reduce((total, order) => {
          return total + order?.amount;
        }, 0)
      }, [orderState])

  return (
    <div>
      <Row gutter={16} align="middle" justify="space-between">
        <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
          <Card
            style={{
              backgroundColor: "#7f7e90",
              boxShadow: "0px -1px 8px 1px #6a6a6a",
            }}
          >
            <h5
              style={{
                color: "#fff",
              }}
            >
              Number of Customers
            </h5>
            <Divider />
            <Statistic
              value={totalCustomers}
              valueStyle={{
                color: "#fff",
              }}
              prefix={<FiUsers />}
            />
          </Card>
        </Col>
        <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
          <Card
            style={{
              backgroundColor: "#6bba62",
              boxShadow: "0px -1px 8px 1px #6a6a6a",
            }}
          >
            <h5
              style={{
                color: "#fff",
              }}
            >
              Total Sales
            </h5>
            <Divider />
            <Statistic
              value={totalSales}
              valueStyle={{
                color: "#fff",
              }}
              precision={2}
              prefix={<FcSalesPerformance />}
              suffix="₹"
              style={{
                color: "#fff",
              }}
            />
          </Card>
        </Col>
        <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
          <Card
            style={{
              backgroundColor: "#3d655d",
              boxShadow: "0px -1px 8px 1px #6a6a6a",
            }}
          >
            <h5
              style={{
                color: "#fff",
              }}
            >
              Total Orders
            </h5>
            <Divider />
            <Statistic
              value={totalOrders}
              prefix={<BsFillCartCheckFill />}
              valueStyle={{
                color: "#fff",
              }}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default DashboardCard;
