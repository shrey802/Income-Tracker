import React, { useEffect, useState } from 'react';
import './style.css';
import Header from '../components/Header.js';
import Form from '../components/Form.js';
import List from '../components/List.js';
export default function App() {
  const [Income, setIncome] = React.useState([]);
  const [totalIncome, setTotalIncome] = React.useState(0);
  useEffect(() => {
    let temp = 0;
    for (let i = 0; i < Income.length; i++) {
      temp += parseInt(Income[i].price);
    }
    setTotalIncome(temp);
  }, [Income]);
  return (
    <div class="App">
      <Header totalIncome={totalIncome} />
      <Form setIncome={setIncome} Income={Income} />
      <List Income={Income} setIncome={setIncome} />
    </div>
  );
}
