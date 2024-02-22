import { react } from "react";
import { mockTransactions } from "../mockData";

const PopularDrinks = ({ transactions }) => {
  const topThreeDrinks = Object.entries(
    transactions.reduce((count, { drinkOrder }) => {
      if (drinkOrder) count[drinkOrder] = (count[drinkOrder] || 0) + 1;
      return count;
    }, {})
  )
    .sort(([, countA], [, countB]) => countB - countA)
    .slice(0, 3)
    .map(([drink]) => drink);

  return (
    <div>
      {topThreeDrinks.map((drink, index) => (
        <li key={index}>{drink}</li>
      ))}
    </div>
  );
};

export default PopularDrinks;
