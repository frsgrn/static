const express = require('express')
const cors = require('cors')
require('dotenv').config()

// defaults to port 3000 and ./public/ folder
const dir = process.env.DIR || "public"
const port = process.env.PORT || 3000

const app = express()

app.use(cors())
app.use(express.static(dir))

app.listen(port, () => {console.log(`Serving files on port ${port} in folder ${dir}`)})
