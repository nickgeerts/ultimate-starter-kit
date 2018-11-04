import React from 'react'
import { Link } from 'react-router-dom'

export default class extends React.Component {
  render() {
    const { children, ...props } = this.props

    return (
      <p>
        <Link to="/">Home</Link> <Link to="/work">Work</Link> <Link to="/contact">Contact</Link>
      </p>
    )
  }
}
