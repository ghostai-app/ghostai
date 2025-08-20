export interface IQueryOptions {
  page?: number;
  per_page?: number;
  filters?: Array<{
    field: string;
    operator: 'eq' | 'contains';
    value: string | number;
  }>;
  sorters?: Array<{
    field: string;
    order: 'asc' | 'desc';
  }>;
}
