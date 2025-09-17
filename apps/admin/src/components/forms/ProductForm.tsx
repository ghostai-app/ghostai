import { Form, Input, InputNumber, Select } from "antd";
import { FormProps } from "antd/lib";
import { FileUploadInput, getValueFromEvent } from "../common";
import { useHeroes } from "@/hooks";

interface ProductFormProps {
  formProps: FormProps<any>;
}

enum PriceType {
  TOKEN = "TOKEN",
  CRYSTAL = "CRYSTAL",
}

enum ProductType {
  HERO = "HERO",
  ITEM = "ITEM",
}

export const ProductForm = ({ formProps }: ProductFormProps) => {
  const { heroes, isLoading } = useHeroes();

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

      <Form.Item label="Price" name="price">
        <InputNumber min={0} style={{ width: "100%" }} />
      </Form.Item>

      <Form.Item label="Price Type" name="priceType">
        <Select>
          <Select.Option value={PriceType.TOKEN}>Token</Select.Option>
          <Select.Option value={PriceType.CRYSTAL}>Crystal</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item label="Hero" name="heroId">
        <Select
          placeholder="Select a hero"
          allowClear
          loading={isLoading}
          showSearch
          optionFilterProp="children"
        >
          {heroes.map((hero) => (
            <Select.Option key={hero.id} value={hero.id}>
              {hero.name}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item label="Type" name="type">
        <Select>
          <Select.Option value={ProductType.HERO}>Hero</Select.Option>
          <Select.Option value={ProductType.ITEM}>Item</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item label="Health" name="health">
        <InputNumber min={0} style={{ width: "100%" }} />
      </Form.Item>

      <Form.Item label="Attack" name="attack">
        <InputNumber min={0} style={{ width: "100%" }} />
      </Form.Item>
    </Form>
  );
};
