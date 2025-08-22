import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { productService } from "@/services/product.service";
import { ProductType } from "@/types";
import { getUserHeroesQueryOptions } from "./hero";
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
      queryClient.invalidateQueries(getUserHeroesQueryOptions());
      queryClient.invalidateQueries(getUserQueryOptions());
      toast.success("Product bought successfully");
    },
    onError: () => {
      toast.error("Failed to buy product");
    },
  });
};
