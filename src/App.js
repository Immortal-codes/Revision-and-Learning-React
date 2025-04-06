import "./App.css";
import Greeting from "./components/Greeting";
import ProfileCard from "./components/ProfileCard";
import ProductList from "./components/ProductList";
import CounterApp from "./components/CounterApp";
import DarkModeToggle from "./components/Theme";
import UserList from "./components/UserList";
import StatusBadge from "./components/StatusBadge";
import CustomButton from "./components/ReusableButton";
import { useState } from "react";
function App() {
  const userOnline = true;

  const [message, setMessage] = useState("");

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

      <CounterApp />
      <DarkModeToggle />

      <UserList />
      <StatusBadge isOnline={userOnline} />

      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>Reusable Button Example</h2>

        <CustomButton
          label="Login"
          onClick={() => setMessage("✅ Login button clicked!")}
        />

        <CustomButton
          label="Sign Up"
          onClick={() => setMessage("✅ Sign Up button clicked!")}
        />

        <CustomButton
          label="Logout"
          onClick={() => setMessage("✅ Logout button clicked!")}
        />

        {message && (
          <div
            style={{
              marginTop: "20px",
              padding: "15px",
              backgroundColor: "#d4edda",
              color: "#155724",
              borderRadius: "5px",
              display: "inline-block",
            }}
          >
            {message}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
