import { Show } from "@refinedev/antd";
import { useShow } from "@refinedev/core";
import { Typography, Descriptions, Image } from "antd";
import { useHeroes } from "@/hooks";

const { Title, Text } = Typography;

export const ProductShow = () => {
  const { heroes } = useHeroes();
  const { queryResult } = useShow({});
  const { data, isLoading } = queryResult;
  const record = data?.data;

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>Product Details</Title>
      <Descriptions bordered column={1}>
        <Descriptions.Item label="ID">
          <Text>{record?.id}</Text>
        </Descriptions.Item>
        <Descriptions.Item label="Name">
          <Text>{record?.name}</Text>
        </Descriptions.Item>
        <Descriptions.Item label="Price">
          <Text>{record?.price}</Text>
        </Descriptions.Item>
        <Descriptions.Item label="Price Type">
          <Text>{record?.priceType}</Text>
        </Descriptions.Item>
        <Descriptions.Item label="Type">
          <Text>{record?.type}</Text>
        </Descriptions.Item>
        <Descriptions.Item label="Hero">
          <Text>
            {record?.heroId
              ? heroes.find((h) => h.id === record.heroId)?.name || "Unknown"
              : "Not assigned"}
          </Text>
        </Descriptions.Item>
        <Descriptions.Item label="Image">
          <Image
            width={200}
            src={record?.imageUrl}
            alt={record?.name}
            style={{ objectFit: "cover" }}
          />
        </Descriptions.Item>
        <Descriptions.Item label="Created At">
          <Text>
            {record?.createdAt
              ? new Date(record.createdAt).toLocaleString()
              : ""}
          </Text>
        </Descriptions.Item>
      </Descriptions>
    </Show>
  );
};
