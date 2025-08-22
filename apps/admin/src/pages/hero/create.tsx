import { Create, useForm } from "@refinedev/antd";
import { HeroForm } from "@/components";

export const HeroCreate = () => {
  const { formProps, saveButtonProps } = useForm({});

  return (
    <Create saveButtonProps={saveButtonProps}>
      <HeroForm formProps={formProps} />
    </Create>
  );
};
