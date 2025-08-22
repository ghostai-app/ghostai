import { Refine, Authenticated } from "@refinedev/core";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";
import {
  ErrorComponent,
  useNotificationProvider,
  ThemedLayoutV2,
  ThemedSiderV2,
} from "@refinedev/antd";
import "@refinedev/antd/dist/reset.css";
import { App as AntdApp, Typography } from "antd";
import { BrowserRouter, Route, Routes, Outlet } from "react-router";
import routerBindings, {
  NavigateToResource,
  CatchAllNavigate,
  UnsavedChangesNotifier,
  DocumentTitleHandler,
} from "@refinedev/react-router";
import { ColorModeContextProvider } from "./contexts/color-mode";
import { Header } from "./components/header";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { authProvider } from "./lib/providers/authProvider";
import { dataProvider } from "./lib";
import { UserEdit, UserShow, UserList } from "./pages/user";
import { Dashboard } from "./pages/dashboard";
import {
  DashboardOutlined,
  UserOutlined,
  CheckSquareOutlined,
  MailOutlined,
  EnvironmentOutlined,
  BellOutlined,
  BankOutlined,
  GiftOutlined,
  CrownOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import { TaskCreate, TaskList, TaskShow, TaskEdit } from "./pages/task";
import { HeroCreate } from "./pages/hero/create";
import { HeroList } from "./pages/hero/list";
import { HeroShow } from "./pages/hero/show";
import { HeroEdit } from "./pages/hero/edit";
import { ProductCreate } from "./pages/product/create";
import { ProductList } from "./pages/product/list";
import { ProductShow } from "./pages/product/show";
import { ProductEdit } from "./pages/product/edit";

const { Text } = Typography;

function App() {
  return (
    <BrowserRouter>
      <RefineKbarProvider>
        <ColorModeContextProvider>
          <AntdApp>
            <Refine
              dataProvider={dataProvider()}
              notificationProvider={useNotificationProvider}
              routerProvider={routerBindings}
              authProvider={authProvider}
              resources={[
                {
                  name: "dashboard",
                  list: "/",
                  meta: {
                    canDelete: false,
                    icon: <DashboardOutlined />,
                  },
                },
                {
                  name: "user",
                  list: "/user",
                  show: "/user/show/:id",
                  edit: "/user/edit/:id",
                  meta: {
                    canDelete: true,
                    icon: <UserOutlined />,
                  },
                },
                {
                  name: "task",
                  list: "/task",
                  show: "/task/show/:id",
                  edit: "/task/edit/:id",
                  create: "/task/create",
                  meta: {
                    canDelete: true,
                    icon: <CheckSquareOutlined />,
                  },
                },
                {
                  name: "hero",
                  list: "/hero",
                  show: "/hero/show/:id",
                  edit: "/hero/edit/:id",
                  create: "/hero/create",
                  meta: {
                    canDelete: true,
                    icon: <CrownOutlined />,
                  },
                },
                {
                  name: "product",
                  list: "/product",
                  show: "/product/show/:id",
                  edit: "/product/edit/:id",
                  create: "/product/create",
                  meta: {
                    canDelete: true,
                    icon: <ShoppingOutlined />,
                  },
                },
              ]}
              options={{
                syncWithLocation: true,
                warnWhenUnsavedChanges: true,
                useNewQueryKeys: true,
              }}
            >
              <Routes>
                <Route
                  element={
                    <Authenticated
                      key="authenticated-inner"
                      fallback={<CatchAllNavigate to="/login" />}
                    >
                      <ThemedLayoutV2
                        Header={Header}
                        Sider={(props) => <ThemedSiderV2 {...props} fixed />}
                        Title={() => <Text strong>GHOSTAI</Text>}
                      >
                        <Outlet />
                      </ThemedLayoutV2>
                    </Authenticated>
                  }
                >
                  <Route index element={<Dashboard />} />
                  <Route path="/user">
                    <Route index element={<UserList />} />
                    <Route path="show/:id" element={<UserShow />} />
                    <Route path="edit/:id" element={<UserEdit />} />
                  </Route>
                  <Route path="/task">
                    <Route index element={<TaskList />} />
                    <Route path="show/:id" element={<TaskShow />} />
                    <Route path="edit/:id" element={<TaskEdit />} />
                    <Route path="create" element={<TaskCreate />} />
                  </Route>
                  <Route path="/hero">
                    <Route index element={<HeroList />} />
                    <Route path="show/:id" element={<HeroShow />} />
                    <Route path="edit/:id" element={<HeroEdit />} />
                    <Route path="create" element={<HeroCreate />} />
                  </Route>
                  <Route path="/product">
                    <Route index element={<ProductList />} />
                    <Route path="show/:id" element={<ProductShow />} />
                    <Route path="edit/:id" element={<ProductEdit />} />
                    <Route path="create" element={<ProductCreate />} />
                  </Route>
                  <Route path="*" element={<ErrorComponent />} />
                </Route>
                <Route
                  element={
                    <Authenticated
                      key="authenticated-outer"
                      fallback={<Outlet />}
                    >
                      <NavigateToResource />
                    </Authenticated>
                  }
                >
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                </Route>
              </Routes>

              <RefineKbar />
              <UnsavedChangesNotifier />
              <DocumentTitleHandler />
            </Refine>
          </AntdApp>
        </ColorModeContextProvider>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;
