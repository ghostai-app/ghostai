import { Edit, useForm } from "@refinedev/antd";
import { UserForm } from "@/components";

export const UserEdit = () => {
  const { formProps, saveButtonProps } = useForm({});

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <UserForm formProps={formProps} />
    </Edit>
  );
};
