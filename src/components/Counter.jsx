import React, { useState } from 'react';

// this would be done in an external file
// for easy access (perhaps a hooks file??)
export function useCounter() {
  const [count, setCount] = useState(0);

  const increment = event => setCount(count + 1);
  const decrement = event => setCount(count - 1);

  return [count, increment, decrement];
}
// the end

export default function Counter({ user }) {
  const [theFunkyCount, increment, decrement] = useCounter();

  return (
    <div style={{ borderColor: 'red' }} className='component'>
      <h5>{user}&apos;s count:</h5>
      <div>The count is {theFunkyCount}</div>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
}
