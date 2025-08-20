import { Form, Input, InputNumber, Select } from "antd";
import { FormProps } from "antd/lib";
import { FileUploadInput, getValueFromEvent } from "../common";

interface TaskFormProps {
  formProps: FormProps<any>;
}

enum TaskType {
  DEFAULT = "DEFAULT",
  PARTNER = "PARTNER",
}

export const TaskForm = ({ formProps }: TaskFormProps) => {
  return (
    <Form {...formProps} layout="vertical">
      <Form.Item
        label="Image"
        name="imageUrl"
        getValueFromEvent={getValueFromEvent}
      >
        <FileUploadInput name="imageUrl" />
      </Form.Item>

      <Form.Item label="Title" name="title">
        <Input />
      </Form.Item>

      <Form.Item label="Reward" name="reward">
        <InputNumber min={0} style={{ width: "100%" }} />
      </Form.Item>

      <Form.Item label="Channel ID" name="channelId">
        <Input />
      </Form.Item>

      <Form.Item label="Link" name="link">
        <Input />
      </Form.Item>

      <Form.Item label="Type" name="type">
        <Select>
          <Select.Option value={TaskType.DEFAULT}>Default</Select.Option>
          <Select.Option value={TaskType.PARTNER}>Partner</Select.Option>
        </Select>
      </Form.Item>
    </Form>
  );
};
