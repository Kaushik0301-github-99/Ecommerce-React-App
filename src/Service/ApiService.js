export async function getAllProductData() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const finalData = await response.json();
    return finalData;
  } catch (error) {
    return error;
  }
}
