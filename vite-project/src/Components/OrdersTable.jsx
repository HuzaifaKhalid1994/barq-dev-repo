// src/components/OrdersTable.js
import React, { useEffect, useState } from "react";

const OrdersTable = ({ orders }) => {
  const [sortedOrders, setSortedOrders] = useState(orders);
  const [currentPage, setCurrentPage] = useState(1);
  const [displayedOrders, setDisplayedOrders] = useState([]);
  const itemsPerPage = 10;

  const handleSort = (column) => {
    const sorted = [...sortedOrders].sort((a, b) => {
      if (a[column] < b[column]) return -1;
      if (a[column] > b[column]) return 1;
      return 0;
    });
    setSortedOrders(sorted);
  };

  useEffect(() => {
    debugger
    if (sortedOrders?.length) {
        const indexOfLastOrder = currentPage * itemsPerPage;
        const indexOfFirstOrder = indexOfLastOrder - itemsPerPage;
        const currentOrders = sortedOrders.slice(indexOfFirstOrder, indexOfLastOrder);
        
        setDisplayedOrders(currentOrders);
    }
  }, [sortedOrders]);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  console.log("sortedOrders:", sortedOrders);
  console.log("displayedOrders:", displayedOrders);

  return (
    <div className="orders-table">
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort("orderId")}>Order ID</th>
            <th onClick={() => handleSort("customerName")}>Customer</th>
            <th onClick={() => handleSort("amount")}>Amount</th>
            <th onClick={() => handleSort("status")}>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders?.map((order) => (
            <tr key={order.id}>
              <td>{order.orderId}</td>
              <td>{order.customerName}</td>
              <td>{order.amount}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* <div className="pagination">
        {Array.from({ length: Math.ceil(orders.length / itemsPerPage) }, (_, index) => (
          <button key={index} onClick={() => paginate(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div> */}
    </div>
  );
};

export default OrdersTable;
