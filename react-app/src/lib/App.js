import React from 'react';
import { render } from 'react-dom';

const App = () => (
  <div style={{ width: 640, margin: '15px auto' }}>
    <h1>Hello React</h1>
  </div>
);

class ReactApp extends HTMLElement {
  connectedCallback() {
    const mountPoint = document.createElement('span');
    this.attachShadow({ mode: 'open' }).appendChild(mountPoint);

    render(<App />, mountPoint);
  }
}

customElements.define('react-app', ReactApp);
