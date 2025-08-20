import { Edit, useForm } from "@refinedev/antd";
import { TaskForm } from "@/components";

export const TaskEdit = () => {
  const { formProps, saveButtonProps } = useForm({});

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <TaskForm formProps={formProps} />
    </Edit>
  );
};
