import type { RefineThemedLayoutV2HeaderProps } from "@refinedev/antd";
import { useGetIdentity } from "@refinedev/core";
import {
  Avatar,
  Layout as AntdLayout,
  Space,
  Switch,
  theme,
  Typography,
  Drawer,
} from "antd";
import React, { useContext } from "react";
import { ColorModeContext } from "../../contexts/color-mode";

const { Text } = Typography;
const { useToken } = theme;

type Admin = {
  id: number;
  email: string;
};

export const Header: React.FC<RefineThemedLayoutV2HeaderProps> = ({
  sticky = true,
}) => {
  const { token } = useToken();
  const { data: admin } = useGetIdentity<Admin>();
  const { mode, setMode } = useContext(ColorModeContext);
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const headerStyles: React.CSSProperties = {
    backgroundColor: token.colorBgElevated,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: "0px 24px",
    height: "64px",
  };

  if (sticky) {
    headerStyles.position = "sticky";
    headerStyles.top = 0;
    headerStyles.zIndex = 1;
  }

  return (
    <AntdLayout.Header style={headerStyles}>
      <Space>
        <Switch
          checkedChildren="🌛"
          unCheckedChildren="🔆"
          onChange={() => setMode(mode === "light" ? "dark" : "light")}
          defaultChecked={mode === "dark"}
        />
        <Space style={{ marginLeft: "8px" }} size="middle">
          {admin?.email && <Text strong>{admin.email}</Text>}
        </Space>
      </Space>
      <Drawer
        title="Settings"
        placement="right"
        onClose={() => setDrawerOpen(false)}
        open={drawerOpen}
        styles={{
          body: {
            padding: 0,
          },
        }}
      >
        {/* Drawer content */}
      </Drawer>
    </AntdLayout.Header>
  );
};
