import React from 'react'
import { renderToString } from 'react-dom/server'
import ReactApp from '../src/App'
import { readFileSync } from "fs"

const indexHTML = readFileSync(`${__dirname}/../public/index.html`, 'utf8')

const handleEnvVariables = html => html
  .replace(/%PUBLIC_URL%/g, process.env.PUBLIC_URL || '')

module.exports = function (app) {
  app.get('*', (req, res) => {
    const html = renderToString(<ReactApp />)
    res.send(
      handleEnvVariables(
        indexHTML.replace('{SSR}', html)
      )
    )
  })
}
