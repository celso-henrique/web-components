import React from 'react'
import { render } from 'react-dom'
import { TextInput } from './lib'

const App = () => (
  <div style={{ width: 640, margin: '15px auto' }}>
    <h1>Hello React</h1>
    <TextInput
      onChange={e => console.log(e)}
      label="Email Address"
      placeholder="name@example.com"
    />
  </div>
)

class ReactApp extends HTMLElement {
  connectedCallback() {
    const mountPoint = document.createElement('span')
    this.attachShadow({ mode: 'open' }).appendChild(mountPoint)

    render(<App />, mountPoint)
  }
}
customElements.define('react-app', ReactApp)
