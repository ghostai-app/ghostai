import { Create, useForm } from "@refinedev/antd";
import { ProductForm } from "@/components";

export const ProductCreate = () => {
  const { formProps, saveButtonProps } = useForm({});

  return (
    <Create saveButtonProps={saveButtonProps}>
      <ProductForm formProps={formProps} />
    </Create>
  );
};
