import React from 'react';
import { useCounter } from '../hooks';

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
