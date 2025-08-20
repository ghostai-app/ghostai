import {
  DeleteButton,
  EditButton,
  List,
  ShowButton,
  useTable,
} from "@refinedev/antd";
import type { BaseRecord, CrudFilters } from "@refinedev/core";
import { Space, Table, Form, Input, Button, Select } from "antd";
import { SearchOutlined } from "@ant-design/icons";

export const TaskList = () => {
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
      const { title, type } = values;

      if (title) {
        filters.push({
          field: "title",
          operator: "contains",
          value: title,
        });
      }

      if (type) {
        filters.push({
          field: "type",
          operator: "eq",
          value: type,
        });
      }

      return filters;
    },
  });

  return (
    <List>
      <Form {...searchFormProps} layout="inline" style={{ marginBottom: 16 }}>
        <Form.Item name="title" style={{ marginBottom: 0, minWidth: 200 }}>
          <Input placeholder="Search by title" prefix={<SearchOutlined />} />
        </Form.Item>
        <Form.Item name="type" style={{ marginBottom: 0, minWidth: 150 }}>
          <Select placeholder="Filter by type" allowClear>
            <Select.Option value="DAILY">Daily</Select.Option>
            <Select.Option value="WEEKLY">Weekly</Select.Option>
            <Select.Option value="MONTHLY">Monthly</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item style={{ marginBottom: 0 }}>
          <Button type="primary" htmlType="submit">
            Search
          </Button>
        </Form.Item>
      </Form>

      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="id" title="ID" sorter />
        <Table.Column dataIndex="title" title="Title" sorter />
        <Table.Column dataIndex="reward" title="Reward" sorter />
        <Table.Column dataIndex="type" title="Type" sorter />
        <Table.Column dataIndex="channelId" title="Channel ID" />
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
