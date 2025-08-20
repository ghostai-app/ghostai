import { Show, TextField } from "@refinedev/antd";
import { useShow } from "@refinedev/core";
import { Typography, Image } from "antd";
import React from "react";

const { Title } = Typography;

export const TaskShow = () => {
  const { queryResult } = useShow({});
  const { data, isLoading } = queryResult;
  const record = data?.data;

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>{"ID"}</Title>
      <TextField value={record?.id} />

      <Title level={5}>{"Title"}</Title>
      <TextField value={record?.title} />

      <Title level={5}>{"Reward"}</Title>
      <TextField value={record?.reward} />

      <Title level={5}>{"Type"}</Title>
      <TextField value={record?.type} />

      <Title level={5}>{"Channel ID"}</Title>
      <TextField value={record?.channelId} />

      <Title level={5}>{"Link"}</Title>
      <TextField value={record?.link} />

      <Title level={5}>{"Image"}</Title>
      {record?.imageUrl && (
        <Image
          src={record.imageUrl}
          alt={record.title}
          style={{ maxWidth: 300 }}
        />
      )}

      <Title level={5}>{"Created On"}</Title>
      <TextField value={new Date(record?.createdOn).toLocaleString()} />
    </Show>
  );
};
