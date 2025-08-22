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

export const HeroList = () => {
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
          field: "createdOn",
          order: "desc",
        },
      ],
    },
    onSearch: (values: any) => {
      const filters: CrudFilters = [];
      const { name } = values;

      if (name) {
        filters.push({
          field: "name",
          operator: "contains",
          value: name,
        });
      }

      return filters;
    },
  });

  return (
    <List>
      <Form {...searchFormProps} layout="inline" style={{ marginBottom: 16 }}>
        <Form.Item name="name" style={{ marginBottom: 0, minWidth: 200 }}>
          <Input placeholder="Search by name" prefix={<SearchOutlined />} />
        </Form.Item>
        <Form.Item style={{ marginBottom: 0 }}>
          <Button type="primary" htmlType="submit">
            Search
          </Button>
        </Form.Item>
      </Form>

      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="id" title="ID" sorter />
        <Table.Column dataIndex="name" title="Name" sorter />
        <Table.Column dataIndex="health" title="Health" sorter />
        <Table.Column dataIndex="attack" title="Attack" sorter />
        <Table.Column
          dataIndex="imageUrl"
          title="Image"
          render={(value) => (
            <img
              src={value}
              alt="Hero"
              style={{ width: 50, height: 50, objectFit: "cover" }}
            />
          )}
        />
        <Table.Column
          dataIndex="createdOn"
          title="Created On"
          sorter
          render={(value) => new Date(value).toLocaleString()}
        />
        <Table.Column
          title="Actions"
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
