import { NumberField, Show, TextField } from "@refinedev/antd";
import { useShow } from "@refinedev/core";
import { Typography } from "antd";
import React from "react";

const { Title } = Typography;

export const UserShow = () => {
  const { queryResult } = useShow({});
  const { data, isLoading } = queryResult;

  const record = data?.data;

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>{"Referral Count"}</Title>
      <NumberField value={record?.referralCount} />
      <Title level={5}>{"ID"}</Title>
      <TextField value={record?.id} />
      <Title level={5}>{"First Name"}</Title>
      <TextField value={record?.firstName} />
      <Title level={5}>{"Last Name"}</Title>
      <TextField value={record?.lastName} />
      <Title level={5}>{"Username"}</Title>
      <TextField value={record?.username} />
      <Title level={5}>{"Telegram ID"}</Title>
      <TextField value={record?.telegramId} />
      <Title level={5}>{"Photo URL"}</Title>
      <TextField value={record?.photoUrl} />
      <Title level={5}>{"Selected Language"}</Title>
      <TextField value={record?.selectedLanguage} />
      <Title level={5}>{"Telegram Language"}</Title>
      <TextField value={record?.telegramLanguage} />
      <Title level={5}>{"Balance"}</Title>
      <NumberField value={record?.balance} />
      <Title level={5}>{"City"}</Title>
      <TextField value={record?.city} />
      <Title level={5}>{"Mining Time (seconds)"}</Title>
      <NumberField value={record?.miningTimeInSeconds} />
      <Title level={5}>{"Profit Per Second"}</Title>
      <NumberField value={record?.profitPerSecond} />
      <Title level={5}>{"Created At"}</Title>
      <TextField value={record?.createdAt} />
      <Title level={5}>{"Last Login At"}</Title>
      <TextField value={record?.lastLoginAt} />
    </Show>
  );
};
