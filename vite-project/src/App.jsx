// src/App.js
import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import OrdersTable from "./components/OrdersTable";
import { sampleOrders } from "./Utils/Constants";

const App = () => {
  // Example dynamic data based on subdomain
  const subdomain = window.location.hostname.split(".")[0]; // Get the subdomain dynamically
  const companyData = {
    daraz: {
      logo: "https://example.com/daraz-logo.png",
      name: "Daraz",
    },
    foodpanda: {
      logo: "https://example.com/foodpanda-logo.png",
      name: "FoodPanda",
    },
    amazon: {
      logo: "https://example.com/amazon-logo.png",
      name: "Amazon",
    },
  };

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (subdomain?.length) {
      const subDomainOrders = sampleOrders[subdomain];
      setOrders(subDomainOrders);
    }
  }, [subdomain]);
  
  console.log("orders:", orders);

  const currentCompany = companyData[subdomain] || {
    logo: "https://example.com/default-logo.png",
    name: "Default Company",
  };

  return (
    <div className="App">
      <Header logo={currentCompany.logo} name={currentCompany.name} />
      <main className="main-container">
        <h1>Welcome to {currentCompany.name}</h1>
        <OrdersTable orders={orders} />
      </main>
    </div>
  );
};

export default App;
