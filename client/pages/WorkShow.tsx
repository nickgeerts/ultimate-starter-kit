import React from 'react'
import { Link } from 'react-router-dom'

import Layout from 'client/components/Layout'
import Nav from 'client/components/Nav'
import { Project } from 'shared/models/Project'

type Props = {
  project: Project
}

export default class extends React.Component<Props> {
  render() {
    const { project } = this.props

    return (
      <Layout>
        <Nav />
        <h1>{project.name}</h1>
        <p>{project.description}</p>
        <p>
          <a href={project.url} target="_blank">
            Visit project
          </a>
        </p>
        <p>
          <Link to="/work">Back</Link>
        </p>
      </Layout>
    )
  }
}
