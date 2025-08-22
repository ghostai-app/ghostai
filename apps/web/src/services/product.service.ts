import { axiosWithAuth } from "@/lib";
import { IProduct, ProductType } from "@/types";

class ProductService {
  async getProducts(type: ProductType) {
    const params = {
      type,
    };

    const response = await axiosWithAuth.get<IProduct[]>("/product/user", {
      params,
    });
    return response.data;
  }

  async buyProduct(productId: number) {
    const response = await axiosWithAuth.post(`/product/buy/${productId}`);
    return response.data;
  }
}

export const productService = new ProductService();
