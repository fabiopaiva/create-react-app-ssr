import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter, Route } from "react-router-dom"
import ReactApp from '../src/App'
import { readFileSync } from "fs"

const indexHTML = readFileSync(`${__dirname}/../build/index.html`, 'utf8')

const handleEnvVariables = html => html
  .replace(/%PUBLIC_URL%/g, process.env.PUBLIC_URL || '')

const context = {}
const App = ({ location }) => (
  <StaticRouter location={location} context={context} >
    <ReactApp />
  </StaticRouter>
)

module.exports = function (app) {
  app.get('*', (req, res) => {
    const html = renderToString(<App location={req.url} />)
    res.send(
      handleEnvVariables(
        indexHTML.replace('{SSR}', html)
      )
    )
  })
}
