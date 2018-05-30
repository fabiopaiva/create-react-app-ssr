const dotenv = require('dotenv')

dotenv.config()

require('babel-core/register')({
  presets: [ 'es2015', 'react-app' ]
})
const express = require('express')
const app = express()
const renderer = require('./renderer')

renderer(app)

app.listen(3000, () => console.log('Example app listening on port 3000!'))
