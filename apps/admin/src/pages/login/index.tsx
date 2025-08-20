import { AuthPage } from "@refinedev/antd";

export const Login = () => {
  return (
    <AuthPage
      type="login"
      title={false}
      registerLink={false}
      forgotPasswordLink={false}
      formProps={{
        initialValues: { email: "example@example.com", password: "example" },
      }}
    />
  );
};
