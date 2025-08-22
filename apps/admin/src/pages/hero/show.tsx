import { Show } from "@refinedev/antd";
import { useShow } from "@refinedev/core";
import { Typography, Descriptions, Image } from "antd";

const { Title, Text } = Typography;

export const HeroShow = () => {
  const { queryResult } = useShow({});
  const { data, isLoading } = queryResult;
  const record = data?.data;

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>Hero Details</Title>
      <Descriptions bordered column={1}>
        <Descriptions.Item label="ID">
          <Text>{record?.id}</Text>
        </Descriptions.Item>
        <Descriptions.Item label="Name">
          <Text>{record?.name}</Text>
        </Descriptions.Item>
        <Descriptions.Item label="Health">
          <Text>{record?.health}</Text>
        </Descriptions.Item>
        <Descriptions.Item label="Attack">
          <Text>{record?.attack}</Text>
        </Descriptions.Item>
        <Descriptions.Item label="Image">
          <Image
            width={200}
            src={record?.imageUrl}
            alt={record?.name}
            style={{ objectFit: "cover" }}
          />
        </Descriptions.Item>
        <Descriptions.Item label="Created On">
          <Text>
            {record?.createdOn
              ? new Date(record.createdOn).toLocaleString()
              : ""}
          </Text>
        </Descriptions.Item>
      </Descriptions>
    </Show>
  );
};
