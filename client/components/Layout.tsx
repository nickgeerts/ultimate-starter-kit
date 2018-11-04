import React from 'react'

export default class extends React.Component {
  render() {
    const { children, ...props } = this.props

    return (
      <div style={{ maxWidth: 1280, margin: '20px auto' }} {...props}>
        {children}
      </div>
    )
  }
}
