import React, { useRef } from 'react';
export default function Form({ Income, setIncome }) {
  const desc = useRef(null);
  const date = useRef(null);
  const price = useRef(null);
  const addincome = (e) => {
    e.preventDefault();
    let d = date.current.value.split('-');
    let newDat = new Date(d[0], d[1] - 1, d[2]);
    setIncome([
      ...Income,
      {
        desc: desc.current.value,
        price: price.current.value,
        date: newDat.getTime(),
      },
    ]);
    desc.current.value = ' ';
    price.current.value = null;
    date.current.value = null;
  };

  return (
    <form class="income-form" onSubmit={addincome}>
      <div className="form-inner">
        <input
          type="text"
          name="desc"
          id="desc"
          ref={desc}
          placeholder="income description"
        />
        <input
          type="number"
          placeholder="Price"
          name="price"
          id="price"
          ref={price}
        />
        <input
          type="date"
          name="date"
          id="date"
          placeholder="Date.."
          ref={date}
        />
        <input type="submit" value="Add Income" />
      </div>
    </form>
  );
}
