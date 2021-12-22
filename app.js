const express = require("express")
const qr = require("qr-image")

const app = express()

app.get("/", (req, res) => {
  res.send("Goto /:type/:input. The types are png, svg, pdf, and eps")
})

app.get("/:type/:input*", (req, res) => {
  let image = qr.image(decodeURI(req.params.input + req.params[0]), {
    type: req.params.type,
  })
  image.pipe(res)
})

module.exports = app
