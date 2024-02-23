import React from "react";
import { mockTransactions } from "../mockData";

// Standalone JavaScript function
function calculateTopDrinks(transactions) {
  const categoryCounts = transactions.reduce((count, { drinkOrder }) => {
    if (drinkOrder) count[drinkOrder] = (count[drinkOrder] || 0) + 1;
    return count;
  }, {});

  const sortedCategories = Object.entries(categoryCounts)
    .sort(([, countA], [, countB]) => countB - countA)
    .map(([category]) => category);

  return sortedCategories.slice(0, 3); // Note that this will help return the top 3 drink categories
}

function TopDrinks() {
  const topDrinks = calculateTopDrinks(mockTransactions);

  return (
    <div>
      <h2>Top Drinks</h2>
      <ul>
        {topDrinks.map((drink, index) => (
          <li key={index}>{drink}</li>
        ))}
      </ul>
    </div>
  );
}

export default TopDrinks;
