import React from 'react'
import { Link } from 'react-router-dom'

import Layout from 'client/components/Layout'
import Button from 'client/components/Button'
import Nav from 'client/components/Nav'
import { Project } from 'shared/models/Project'

type Props = {
  projects: Array<Project>
}

export default class extends React.Component<Props> {
  state = { counter: 1 }

  render() {
    const { projects } = this.props

    return (
      <Layout>
        <Nav />
        <h1>Home</h1>
        <p>
          <Button onClick={() => this.setState({ counter: this.state.counter + 1 })}>
            Test interactivity ({this.state.counter})
          </Button>
        </p>
        <p>
          <h3>Projects</h3>
          <ul>
            {projects.map(project => (
              <li key={project.id}>
                <Link to={`/work/${project.slug}`}>{project.name}</Link>
              </li>
            ))}
          </ul>
        </p>
      </Layout>
    )
  }
}
