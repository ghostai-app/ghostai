import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { productService } from "@/services/product.service";
import { ProductType } from "@/types";
import { getLastUserHeroQueryOptions, getUserHeroesQueryOptions } from "./hero";
import { getUserQueryOptions } from "./user";
import toast from "react-hot-toast";

export const getProductsQueryOptions = (type: ProductType) => ({
  queryKey: ["products", type],
  queryFn: () => productService.getProducts(type),
});

export const useBuyProduct = (id: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => productService.buyProduct(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      queryClient.invalidateQueries(getUserHeroesQueryOptions());
      queryClient.invalidateQueries(getUserQueryOptions());
      queryClient.invalidateQueries(getLastUserHeroQueryOptions());
      toast.success("Product bought successfully");
    },
    onError: (error: string) => {
      toast.error(error);
    },
  });
};
