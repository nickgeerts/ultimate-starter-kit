import React from 'react'

import theme from 'client/helpers/theme'

type Props = {
  onClick: () => void
}

export default class extends React.Component<Props> {
  render() {
    const { children, ...props } = this.props

    return (
      <button
        style={{
          height: '35px',
          fontSize: '12px',
          lineHeight: '35px',
          background: 'white',
          padding: '0 20px',
          color: theme.colors.text,
          border: `solid 1px ${theme.colors.text}`,
          borderRadius: '5px',
          outline: 0,
          cursor: 'pointer'
        }}
        {...props}
      >
        {children}
      </button>
    )
  }
}
