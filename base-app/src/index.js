import '../../vue-app/src/dist/my-custom-element.js'

function component() {
  const element = document.createElement('div')

  element.innerHTML = 'hello webpack'

  return element
}

document.body.appendChild(component())
