import React from 'react';
export default function Header(props) {
  return (
    <header>
      <h1>Income Tracker</h1>
      <div class="total-income">${props.totalIncome}</div>
    </header>
  );
}
