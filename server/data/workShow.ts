import projects from 'server/projects'

export default function({ slug }) {
  const project = projects.find(project => project.slug === slug)

  return { project }
}
