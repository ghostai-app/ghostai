import { Edit, useForm } from "@refinedev/antd";
import { ProductForm } from "@/components";

export const ProductEdit = () => {
  const { formProps, saveButtonProps, queryResult } = useForm({});

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <ProductForm formProps={formProps} />
    </Edit>
  );
};
