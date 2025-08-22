import { Form, Input, InputNumber } from "antd";
import { FormProps } from "antd/lib";
import { FileUploadInput, getValueFromEvent } from "../common";

interface HeroFormProps {
  formProps: FormProps<any>;
}

export const HeroForm = ({ formProps }: HeroFormProps) => {
  return (
    <Form {...formProps} layout="vertical">
      <Form.Item
        label="Image"
        name="imageUrl"
        getValueFromEvent={getValueFromEvent}
      >
        <FileUploadInput name="imageUrl" />
      </Form.Item>

      <Form.Item label="Name" name="name">
        <Input />
      </Form.Item>

      <Form.Item label="Health" name="health">
        <InputNumber min={1} style={{ width: "100%" }} />
      </Form.Item>

      <Form.Item label="Attack" name="attack">
        <InputNumber min={1} style={{ width: "100%" }} />
      </Form.Item>
    </Form>
  );
};
