import { useList } from "@refinedev/core";

export const useHeroes = () => {
  const { data, isLoading } = useList({
    resource: "hero",
    pagination: {
      mode: "off",
    },
  });

  return {
    heroes: data?.data || [],
    isLoading,
  };
};
