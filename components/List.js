import React from 'react';
import Item from './Item.js';
export default function List({ Income, setIncome }) {
  const removeIncome = (i) => {
    let temp = Income.filter((v, index) => {
      index != i;
    });
    setIncome(temp);
  };
  const sortByDate = (a, b) => {
    return a.date - b.date;
  };
  return (
    <div class="income-list">
      {Income.sort(sortByDate).map((v, index) => (
        <Item
          key={index}
          Income={v}
          index={index}
          removeIncome={removeIncome}
        />
      ))}
    </div>
  );
}
