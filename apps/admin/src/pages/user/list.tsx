import {
  DeleteButton,
  EditButton,
  List,
  ShowButton,
  useTable,
} from "@refinedev/antd";
import type { BaseRecord, CrudFilters } from "@refinedev/core";
import { Space, Table, Form, Input, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";

export const UserList = () => {
  const { tableProps, searchFormProps } = useTable({
    syncWithLocation: true,
    hasPagination: true,
    pagination: {
      mode: "server",
    },
    sorters: {
      mode: "server",
      initial: [
        {
          field: "createdAt",
          order: "desc",
        },
      ],
    },
    onSearch: (values: any) => {
      const filters: CrudFilters = [];
      const { username } = values;

      filters.push({
        field: "username",
        operator: "contains",
        value: username,
      });

      return filters;
    },
  });

  return (
    <List>
      <Form {...searchFormProps} layout="inline" style={{ marginBottom: 16 }}>
        <Form.Item name="username" style={{ marginBottom: 0, minWidth: 300 }}>
          <Input
            placeholder="Поиск по имени пользователя"
            prefix={<SearchOutlined />}
          />
        </Form.Item>
        <Form.Item style={{ marginBottom: 0 }}>
          <Button type="primary" htmlType="submit">
            Поиск
          </Button>
        </Form.Item>
      </Form>

      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="id" title="ID" sorter />
        <Table.Column dataIndex="username" title="Имя пользователя" sorter />
        <Table.Column dataIndex="firstName" title="Имя" sorter />
        <Table.Column dataIndex="lastName" title="Фамилия" sorter />
        <Table.Column dataIndex="balance" title="Баланс" sorter />
        <Table.Column
          dataIndex="createdAt"
          title="Дата создания"
          sorter
          render={(value) => new Date(value).toLocaleString()}
        />
        <Table.Column
          title="Действия"
          dataIndex="actions"
          render={(_, record: BaseRecord) => (
            <Space>
              <EditButton hideText size="small" recordItemId={record.id} />
              <ShowButton hideText size="small" recordItemId={record.id} />
              <DeleteButton hideText size="small" recordItemId={record.id} />
            </Space>
          )}
        />
      </Table>
    </List>
  );
};
