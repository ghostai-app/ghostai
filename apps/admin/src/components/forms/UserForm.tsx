import { Form, Input, InputNumber, Switch } from "antd";
import { FormProps } from "antd/lib";

interface UserFormProps {
  formProps: FormProps<any>;
}

export const UserForm = ({ formProps }: UserFormProps) => {
  return (
    <Form {...formProps} layout="vertical">
      <Form.Item label="First Name" name="firstName">
        <Input />
      </Form.Item>

      <Form.Item label="Last Name" name="lastName">
        <Input />
      </Form.Item>

      <Form.Item label="Username" name="username">
        <Input />
      </Form.Item>

      <Form.Item label="Photo URL" name="photoUrl">
        <Input />
      </Form.Item>

      <Form.Item label="Telegram Language" name="telegramLanguage">
        <Input />
      </Form.Item>

      <Form.Item
        label="Balance"
        name="balance"
        rules={[{ type: "number", min: 0 }]}
      >
        <InputNumber />
      </Form.Item>

      <Form.Item
        label="Ticket Count"
        name="ticketCount"
        rules={[{ type: "number", min: 0 }]}
      >
        <InputNumber />
      </Form.Item>

      <Form.Item
        label="Mining Time (seconds)"
        name="miningTimeInSeconds"
        rules={[{ type: "number", min: 0 }]}
      >
        <InputNumber />
      </Form.Item>

      <Form.Item
        label="Mining Profit"
        name="miningProfit"
        rules={[{ type: "number", min: 0 }]}
      >
        <InputNumber />
      </Form.Item>
    </Form>
  );
};
