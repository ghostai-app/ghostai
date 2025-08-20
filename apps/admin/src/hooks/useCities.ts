import { useList } from "@refinedev/core";

interface City {
  id: number;
  name: string;
  value: string;
  createdAt: string;
  updatedAt: string;
}

export const useCities = () => {
  return useList<City>({
    resource: "city",
    pagination: {
      pageSize: 1000, // Получаем все города
    },
  });
};
