import React, { useState, useEffect } from 'react';

// this would be done in an external file
// for easy access (perhaps a hooks file??)
export function useLogIfCountEven(count) {
  useEffect(() => {
    if (count % 2 === 0) {
      console.log(`
        the count is even and is ${document.querySelector('#count').textContent}
      `);
    }
  });
}

export function useCounter(initial = 0, step = 1) { // is wrapping useState
  const [count, setCount] = useState(initial);
  useLogIfCountEven(count); // this wraps the useEffect

  const increment = event => setCount(count + step);
  const decrement = event => setCount(count - step);

  return [count, increment, decrement];
}
// the end of hooks

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
