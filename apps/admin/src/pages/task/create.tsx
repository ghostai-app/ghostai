import { Create, useForm } from "@refinedev/antd";
import { TaskForm } from "@/components";

export const TaskCreate = () => {
  const { formProps, saveButtonProps } = useForm({});

  return (
    <Create saveButtonProps={saveButtonProps}>
      <TaskForm formProps={formProps} />
    </Create>
  );
};
