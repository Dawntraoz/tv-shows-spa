const history = require('connect-history-api-fallback')
const express = require('express')
const expressStaticGzip = require('express-static-gzip')
const path = require('path')

const app = express()
app.use(history())

// gzip
app.use('/', expressStaticGzip(path.join(__dirname, 'dist')))

const port = process.env.PORT || 80
app.listen(port)
