import type { DataProvider } from "@refinedev/core";
import { axiosWithAuth } from "../api";

export const dataProvider = (): DataProvider => ({
  getList: async ({ resource, pagination, filters, sorters, meta }) => {
    const query = {
      page: pagination?.current,
      limit: pagination?.pageSize,
      filters,
      sort: sorters,
      ...meta?.query,
    };

    const { data } = await axiosWithAuth.get(resource, {
      params: query,
    });

    return {
      data: data.data,
      total: data.total,
    };
  },

  getOne: async ({ resource, id, meta }) => {
    const { data } = await axiosWithAuth.get(`${resource}/${id}`, {
      headers: meta?.headers,
    });

    return {
      data,
    };
  },

  create: async ({ resource, variables, meta }) => {
    const { data } = await axiosWithAuth.post(resource, variables, {
      headers: meta?.headers,
    });

    return {
      data,
    };
  },

  update: async ({ resource, id, variables, meta }) => {
    const { data } = await axiosWithAuth.patch(`${resource}/${id}`, variables, {
      headers: meta?.headers,
    });

    return {
      data,
    };
  },

  deleteOne: async ({ resource, id, meta }) => {
    const { data } = await axiosWithAuth.delete(`${resource}/${id}`, {
      headers: meta?.headers,
    });

    return {
      data,
    };
  },

  getApiUrl: () => {
    return import.meta.env.VITE_API_URL;
  },

  // Bulk actions
  getMany: async ({ resource, ids, meta }) => {
    const { data } = await axiosWithAuth.get(resource, {
      params: { id: ids },
      headers: meta?.headers,
    });

    return {
      data,
    };
  },

  createMany: async ({ resource, variables, meta }) => {
    const { data } = await axiosWithAuth.post(`${resource}/bulk`, {
      values: variables,
      headers: meta?.headers,
    });

    return {
      data,
    };
  },

  updateMany: async ({ resource, ids, variables, meta }) => {
    const { data } = await axiosWithAuth.patch(
      `${resource}/bulk`,
      {
        ids,
        values: variables,
      },
      {
        headers: meta?.headers,
      }
    );

    return {
      data,
    };
  },

  deleteMany: async ({ resource, ids, meta }) => {
    const { data } = await axiosWithAuth.delete(`${resource}/bulk`, {
      data: { ids },
      headers: meta?.headers,
    });

    return {
      data,
    };
  },
});
