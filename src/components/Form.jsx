import React, { useState } from 'react';

// this should be out of here
export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });
  const setValue = value => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };
  return [storedValue, setValue];
};

export default function Form({ user }) {
  const [fname, setFname] = useLocalStorage('fname', '');
  const [lname, setLname] = useLocalStorage('lname', '');

  const onFnameChange = evt => {
    setFname(evt.target.value);
  };

  const onLnameChange = evt => {
    setLname(evt.target.value);
  };

  const onFormSubmit = event => {
    event.preventDefault();
    alert(`submitting ${lname}, ${fname}`);
  };

  return (
    <form
      className='component'
      onSubmit={onFormSubmit}
      style={{ borderColor: 'green' }}
    >
      <h5>{user}&apos;s best friend:</h5>
      <label>first name
        <input value={fname} onChange={onFnameChange} />
      </label><br />

      <label>last name
        <input value={lname} onChange={onLnameChange} />
      </label><br />

      <button>submit</button>
    </form>
  );
}
