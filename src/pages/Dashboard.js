import { Row, Col } from 'antd';
import Charts from "../components/Charts";
import CustomerChart from "../components/CustomerChart";
import DashboardCards from "../components/DashboardCards";

function Dashboard() {
  return (
    <div>
      <DashboardCards />
      <Row gutter={[16, 16]}>
        {/* <Col xs={24} lg={12}>
          <Charts />
        </Col> */}
        <Col xs={24} lg={12}>
          <div class="py-5 mt-4">
          <CustomerChart />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;
