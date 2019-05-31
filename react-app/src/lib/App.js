import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';

const App = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const addCounter = () => {
      console.log('added to counter');
      setCounter(counter + 1);
    };

    window.addEventListener('addCounter', addCounter);

    return () => {
      window.removeEventListener('addCounter', addCounter);
    };
  }, [counter]);

  return (
    <div
      style={{
        margin: '15px 0',
        border: '1px solid blue',
        color: 'blue',
        padding: '20px',
        fontFamily: 'arial'
      }}
    >
      <h1>Hello from React</h1>
      <h2>Counter: {counter}</h2>
    </div>
  );
};

class ReactApp extends HTMLElement {
  connectedCallback() {
    const mountPoint = document.createElement('span');
    this.attachShadow({ mode: 'open' }).appendChild(mountPoint);

    render(<App />, mountPoint);
  }
}

customElements.define('react-app', ReactApp);
