import React from 'react';
import { useCounter } from '../hooks';

// AT A COMPANY STUCK USING AN OLD REACT (16.2)
// Higher Order Components (wrappers for existing components)
// Render Props

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
