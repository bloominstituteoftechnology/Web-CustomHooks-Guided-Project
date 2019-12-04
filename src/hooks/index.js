import { useState, useEffect } from 'react';

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
