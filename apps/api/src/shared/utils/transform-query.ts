import { IQueryOptions } from '../types/query-options.types';

interface FilterGroup {
  field?: string;
  operator?: string;
  value?: string | number;
}

interface SorterGroup {
  field?: string;
  order?: string;
}

export const transformQueryParams = (
  query: Record<string, string>,
): IQueryOptions => {
  const result: IQueryOptions = {
    page: Number(query.page) || 1,
    per_page: Number(query.per_page) || 10,
    filters: [],
    sorters: [],
  };

  const filterKeys = Object.keys(query).filter((key) =>
    key.startsWith('filters['),
  );
  const filterGroups = new Map<number, FilterGroup>();

  filterKeys.forEach((key) => {
    const match = key.match(/filters\[(\d+)\]\[(\w+)\]/);
    if (match) {
      const [, index, field] = match;
      const groupIndex = parseInt(index);
      if (!filterGroups.has(groupIndex)) {
        filterGroups.set(groupIndex, {});
      }
      const group = filterGroups.get(groupIndex);
      if (group && field) {
        group[field as keyof FilterGroup] = query[key];
      }
    }
  });

  result.filters = Array.from(filterGroups.values())
    .filter((filter): filter is Required<FilterGroup> =>
      Boolean(filter.field && filter.operator && filter.value !== undefined),
    )
    .map((filter) => ({
      field: filter.field,
      operator: filter.operator as 'eq' | 'contains',
      value: filter.value,
    }));

  // Transform sorters
  const sorterKeys = Object.keys(query).filter((key) =>
    key.startsWith('sort['),
  );
  const sorterGroups = new Map<number, SorterGroup>();

  sorterKeys.forEach((key) => {
    const match = key.match(/sort\[(\d+)\]\[(\w+)\]/);
    if (match) {
      const [, index, field] = match;
      const groupIndex = parseInt(index);
      if (!sorterGroups.has(groupIndex)) {
        sorterGroups.set(groupIndex, {});
      }
      const group = sorterGroups.get(groupIndex);
      if (group && field) {
        group[field as keyof SorterGroup] = query[key];
      }
    }
  });

  result.sorters = Array.from(sorterGroups.values())
    .filter((sorter): sorter is Required<SorterGroup> =>
      Boolean(sorter.field && sorter.order),
    )
    .map((sorter) => ({
      field: sorter.field,
      order: sorter.order.toLowerCase() as 'asc' | 'desc',
    }));

  return result;
};
