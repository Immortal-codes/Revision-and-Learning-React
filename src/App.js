import "./App.css";
import Greeting from "./components/Greeting";
import ProfileCard from "./components/ProfileCard";
import ProductList from "./components/ProductList";

function App() {
  const products = [
    { id: 1, name: "iPhone 15", price: 999 },
    { id: 2, name: "Samsung S23", price: 899 },
    { id: 3, name: "OnePlus 12", price: 749 },
  ];
  return (
    <>
      <Greeting name="rajan" />

      <ProfileCard
        name="Rajan"
        role="Software Engineer"
        bio="Frontend Developer"
      />
      <ProductList items={products} />
    </>
  );
}

export default App;
