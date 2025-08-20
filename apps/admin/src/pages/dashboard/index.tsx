import { Card, Row, Col, Statistic, Typography, Space } from "antd";
import {
  UserOutlined,
  CheckCircleOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { useOne } from "@refinedev/core";

interface Statistics {
  totalUsers: number;
  dailyUsers: number;
  monthlyUsers: number;
  totalMining: number;
  dailyMining: number;
  monthlyMining: number;
}

const StatCard = ({
  title,
  value,
  icon,
  daily,
  monthly,
  loading,
}: {
  title: string;
  value?: number;
  icon: React.ReactNode;
  daily?: number;
  monthly?: number;
  loading?: boolean;
}) => (
  <Card loading={loading}>
    <Space
      direction="vertical"
      size="small"
      style={{ width: "100%", display: "flex" }}
    >
      <Statistic
        title={<Typography.Title level={5}>{title}</Typography.Title>}
        value={value}
        prefix={icon}
      />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Typography.Text type="secondary" style={{ fontSize: "12px" }}>
          +{daily} today
        </Typography.Text>
        <Typography.Text type="secondary" style={{ fontSize: "12px" }}>
          +{monthly} this month
        </Typography.Text>
      </div>
    </Space>
  </Card>
);

export const Dashboard = () => {
  const { data, isLoading } = useOne<Statistics>({
    resource: "statistics",
    id: "dashboard",
  });

  const statistics = data?.data;

  return (
    <div style={{ padding: "24px" }}>
      <Row gutter={[24, 24]}>
        <Col xs={24} sm={8}>
          <StatCard
            title="Total Users"
            value={statistics?.totalUsers}
            icon={<UserOutlined />}
            daily={statistics?.dailyUsers}
            monthly={statistics?.monthlyUsers}
            loading={isLoading}
          />
        </Col>

        <Col xs={24} sm={8}>
          <StatCard
            title="Total Mining"
            value={statistics?.totalMining}
            icon={<CheckCircleOutlined />}
            daily={statistics?.dailyMining}
            monthly={statistics?.monthlyMining}
            loading={isLoading}
          />
        </Col>

        <Col xs={24} sm={8}>
          <StatCard
            title="Active Users"
            value={statistics?.dailyUsers}
            icon={<TeamOutlined />}
            daily={statistics?.dailyUsers}
            monthly={statistics?.monthlyUsers}
            loading={isLoading}
          />
        </Col>
      </Row>
    </div>
  );
};
