import fs from 'fs'
import React from 'react'
import express from 'express'
import path from 'path'
import ReactDOM from 'react-dom/server'
import { ChunkExtractor } from '@loadable/server'
import { Helmet } from 'react-helmet'

import App from 'client/app/App'
import home from 'server/data/home'
import workIndex from 'server/data/workIndex'
import workShow from 'server/data/workShow'
import globalStyling from 'client/helpers/globalStyling'

const app = express()
const distDir = path.join(__dirname, '../dist/client')
const staticDir = path.join(__dirname, '../static')
const statsFile = path.join(__dirname, '../dist/client/loadable-stats.json')

app.use(express.static(distDir))
app.use(express.static(staticDir))

app.get('/global.css', (_req, res) => {
  res.set('Content-Type', 'text/css')
  res.send(globalStyling)
})

const routes: { [index: string]: Function } = {
  '/': home,
  '/work': workIndex,
  '/work/:slug': workShow,
  '/contact': undefined
}

Object.entries(routes).forEach(([route, dataLoader]) => {
  app.get(`${route}.json`, async (req, res) => {
    const initialProps = dataLoader ? await dataLoader(req.params) : {}
    res.json(initialProps)
  })

  app.get(route, async (req, res) => {
    const extractor = new ChunkExtractor({ statsFile })
    const initialProps = dataLoader ? await dataLoader(req.params) : {}
    const jsx = extractor.collectChunks(<App path={req.path} initialProps={initialProps} />)
    const html = ReactDOM.renderToString(jsx)
    const helmet = Helmet.renderStatic()

    const view = `
      <!doctype html>
      <html>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="shortcut icon" href="/favicon/favicon-16x16.png" />
          <link rel="stylesheet" media="all" href="/global.css" />
          ${helmet.title.toString()}
          ${helmet.meta.toString()}
        </head>
        <body>
          <div id="app">${html}</div>
          <script>window.__INITIAL_PROPS__ = ${JSON.stringify(initialProps)}</script>
          ${extractor.getScriptTags()}
        </body>
      </html>
    `
    res.send(view)
  })
})

app.listen(3000, () => console.log('Server started on port 3000'))
