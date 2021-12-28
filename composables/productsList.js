export function useProduct() {
    const productList = useState("productList", () => []);
    return {
        productList
    };
  }
  