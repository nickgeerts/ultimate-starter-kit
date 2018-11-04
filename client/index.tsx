import React from 'react'
import ReactDOM from 'react-dom'

import App from 'client/app/App'

interface WindowWithInitialProps extends Window {
  __INITIAL_PROPS__: object
}

document.addEventListener('DOMContentLoaded', () => {
  const element = document.getElementById('app')
  const initialProps = (window as WindowWithInitialProps).__INITIAL_PROPS__

  ReactDOM.hydrate(<App initialProps={initialProps} />, element)
})
