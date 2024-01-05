import { useState } from "react";
import { Products } from "./components/Products";
import { products } from "./mocks/with-results.json";
import { Header } from "./components/Header";
function App() {
  const [filters, setFilters] = useState({
    category: "all",
    minPrice: 0,
  });

  const filterPrice = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === "all" || product.category === filters.category)
      );
    });
  };

  return (
    <>
      <Header />
      <Products products={filterPrice(products)} />
    </>
  );
}

export default App;
