import React from 'react'

type Match = {
  url: string
}

type Props = {
  component: React.ComponentType
  appContext: {
    initialRender: boolean
    initialProps: object
    onDataFetched: () => void
  }
  match?: Match
}

type State = {
  initialProps: object
  loaded: boolean
}

export default class extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    if (props.appContext.initialRender) {
      this.state = {
        initialProps: props.appContext.initialProps,
        loaded: true
      }
    } else {
      this.state = {
        initialProps: {},
        loaded: false
      }
    }
  }

  async componentDidMount() {
    const { appContext, match } = this.props

    if (!appContext.initialRender) {
      let result = await fetch(`${match.url}.json`)
      const initialProps = (await result.json()) || {}
      this.setState({ initialProps, loaded: true })
    }
    this.props.appContext.onDataFetched()
  }

  render() {
    const Component = this.props.component

    if (this.state.loaded) {
      return <Component {...this.state.initialProps} />
    } else {
      return null
    }
  }
}
