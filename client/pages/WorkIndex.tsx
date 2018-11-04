import React from 'react'
import { Link } from 'react-router-dom'

import Layout from 'client/components/Layout'
import Nav from 'client/components/Nav'
import { Project } from 'shared/models/Project'

type Props = {
  projects: Array<Project>
}

export default class extends React.Component<Props> {
  render() {
    const { projects } = this.props

    return (
      <Layout>
        <Nav />
        <h1>Work</h1>
        <ul>
          {projects.map(project => (
            <li key={project.id}>
              <Link to={`/work/${project.slug}`}>{project.name}</Link>
            </li>
          ))}
        </ul>
      </Layout>
    )
  }
}
