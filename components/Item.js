import React from 'react';
export default function Item({ index, Income, removeIncome }) {
  let date = new Date(Income.date);
  let day = date.getDay();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  const removeHandle = (i) => {
    removeIncome(i);
  };
  return (
    <div class="income-item">
      <button className="remove-item" onClick={() => removeHandle(index)}>
        X
      </button>
      <div className="desc">{Income.desc}</div>
      <div className="price">${Income.price}</div>
      <div className="date">{day + '/' + month + '/' + year}</div>
    </div>
  );
}
