import { Edit, useForm } from "@refinedev/antd";
import { HeroForm } from "@/components";

export const HeroEdit = () => {
  const { formProps, saveButtonProps, queryResult } = useForm({});

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <HeroForm formProps={formProps} />
    </Edit>
  );
};
