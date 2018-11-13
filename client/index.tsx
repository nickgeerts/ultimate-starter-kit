import React from 'react'
import ReactDOM from 'react-dom'
import { loadableReady } from '@loadable/component'

import App from 'client/app/App'

interface WindowWithInitialProps extends Window {
  __INITIAL_PROPS__: object
}

loadableReady(() => {
  const element = document.getElementById('app')
  const initialProps = (window as WindowWithInitialProps).__INITIAL_PROPS__

  ReactDOM.hydrate(<App initialProps={initialProps} />, element)
})
