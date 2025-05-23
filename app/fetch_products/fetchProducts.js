import apiClient from "../apiClient/apiClient";

export async function getAllProducts() {
  const res = await apiClient.get("/products");
  return res.data;
}

export async function getProductsById(id) {
  const res = await apiClient.get(`/products/${id}`);
  return res.data;
}
