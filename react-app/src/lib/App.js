import React from 'react';
import { render } from 'react-dom';

const App = () => {
  console.log('React app started');

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
