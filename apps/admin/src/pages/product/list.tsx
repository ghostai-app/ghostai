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
import { useHeroes } from "@/hooks";

export const ProductList = () => {
  const { heroes } = useHeroes();
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
      const { name, type, priceType } = values;

      if (name) {
        filters.push({
          field: "name",
          operator: "contains",
          value: name,
        });
      }

      if (type) {
        filters.push({
          field: "type",
          operator: "eq",
          value: type,
        });
      }

      if (priceType) {
        filters.push({
          field: "priceType",
          operator: "eq",
          value: priceType,
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
        <Form.Item name="type" style={{ marginBottom: 0, minWidth: 150 }}>
          <Select placeholder="Filter by type" allowClear>
            <Select.Option value="HERO">Hero</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item name="priceType" style={{ marginBottom: 0, minWidth: 150 }}>
          <Select placeholder="Filter by price type" allowClear>
            <Select.Option value="TOKEN">Token</Select.Option>
            <Select.Option value="CRYSTAL">Crystal</Select.Option>
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
        <Table.Column dataIndex="name" title="Name" sorter />
        <Table.Column dataIndex="price" title="Price" sorter />
        <Table.Column dataIndex="priceType" title="Price Type" sorter />
        <Table.Column dataIndex="type" title="Type" sorter />
        <Table.Column
          dataIndex="heroId"
          title="Hero"
          render={(heroId) => {
            const hero = heroes.find((h) => h.id === heroId);
            return hero ? hero.name : "Not assigned";
          }}
        />
        <Table.Column
          dataIndex="imageUrl"
          title="Image"
          render={(value) => (
            <img
              src={value}
              alt="Product"
              style={{ width: 50, height: 50, objectFit: "cover" }}
            />
          )}
        />
        <Table.Column
          dataIndex="createdAt"
          title="Created At"
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
