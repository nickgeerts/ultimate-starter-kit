import React from 'react'
import { BrowserRouter, StaticRouter, Route, Switch } from 'react-router-dom'
import loadable from '@loadable/component'

import LoadablePage from './LoadablePage'

const serverSide = typeof window === 'undefined'
const Router = serverSide ? StaticRouter : BrowserRouter
const AppContext = React.createContext({})

function loadablePage(component) {
  return props => (
    <AppContext.Consumer>
      {appContext => (
        <LoadablePage appContext={appContext || {}} component={component} {...props} />
      )}
    </AppContext.Consumer>
  )
}

const Home = loadablePage(loadable(() => import('client/pages/Home')))
const WorkIndex = loadablePage(loadable(() => import('client/pages/WorkIndex')))
const WorkShow = loadablePage(loadable(() => import('client/pages/WorkShow')))
const Contact = loadablePage(loadable(() => import('client/pages/Contact')))

type Props = {
  path?: string
  initialProps: object
}

type State = {
  initialRender: boolean
  initialProps: object
}

export default class extends React.Component<Props, State> {
  constructor(props) {
    super(props)

    this.state = {
      initialRender: true,
      initialProps: props.initialProps
    }
  }

  onDataFetched = () => {
    this.setState({ initialRender: false })
  }

  get appContext() {
    return {
      initialRender: this.state.initialRender,
      initialProps: this.state.initialProps,
      onDataFetched: this.onDataFetched
    }
  }

  render() {
    const { path } = this.props
    const routerContext = {}

    return (
      <AppContext.Provider value={this.appContext}>
        <Router location={path} context={routerContext}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/work/:slug" component={WorkShow} />
            <Route path="/work" component={WorkIndex} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </Router>
      </AppContext.Provider>
    )
  }
}
