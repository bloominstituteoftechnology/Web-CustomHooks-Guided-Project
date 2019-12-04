import React, { useState } from 'react';

// this would be done in an external file
// for easy access (perhaps a hooks file??)
export function useCounter(initial = 0, step = 1) {
  const [count, setCount] = useState(initial);

  const increment = event => setCount(count + step);
  const decrement = event => setCount(count - step);

  console.log(`
    the count is ${document.querySelector('#count').textContent}
  `);

  return [count, increment, decrement];
}
// the end

export default function Counter({ user }) {
  const [theFunkyCount, increment, decrement] = useCounter(1, 1);

  return (
    <div style={{ borderColor: 'red' }} className='component'>
      <h5>{user}&apos;s count:</h5>
      <div>The count is <span id='count'>{theFunkyCount}</span></div>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
}
