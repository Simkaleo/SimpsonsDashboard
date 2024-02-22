import { useState, useEffect } from "react";
import { mockTransactions } from "../mockData";

// CostTotal.jsx

function CostTotal() {
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    // Calculate the total cost when the component mounts
    const sum = mockTransactions.reduce((acc, transaction) => {
      const cost = parseFloat(transaction.cost);
      return acc + cost;
    }, 0);

    setTotalCost(sum);
    console.log(sum);
  }, []);

  return (
    <div>
      <h1>${totalCost.toFixed(2)}</h1>
    </div>
  );
}

export default CostTotal;

// import React from "react";
// import { mockTransactions } from "./mockData";

// function CostTotal({ transactions }) {
//   // formula to calculate the total cost
//   const totalCost = transactions.reduce(
//     (sum, transaction) => sum + parseFloat(transaction.cost),
//     0
//   );
//   console.log(totalCost);

//   return (
//     <>
//       <h2>Sales Obtained: ${totalcost.toFixed(2)}</h2>
//     </>
//   );
// }
// export default CostTotal;
