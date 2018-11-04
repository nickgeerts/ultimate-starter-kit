import React from 'react'
import { Link } from 'react-router-dom'

import Layout from 'client/components/Layout'
import Nav from 'client/components/Nav'

export default class extends React.Component {
  render() {
    return (
      <Layout>
        <Nav />
        <h1>Contact</h1>
        <p>Out of office...</p>
      </Layout>
    )
  }
}
