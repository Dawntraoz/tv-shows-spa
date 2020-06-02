const history = require('connect-history-api-fallback')
const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')

app = express()
app.use(history())

app.use(serveStatic(path.join(__dirname, 'dist')))

// set up a route to redirect http to https
app.get('*', function(req, res) {
  res.redirect('https://' + req.headers.host + req.url)
})

const port = process.env.PORT || 80
app.listen(port)
