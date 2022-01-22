import express from 'express'
import parser from 'body-parser'
import mongoose from 'mongoose'

import getRoutes from './routes/getRoutes.js'
import postRoutes from './routes/postRoutes.js'
import updateRoutes from './routes/updateRoutes.js'
import deleteRoutes from './routes/deleteRoutes.js'


const app = express()
const port = 3000
mongoose.connect('mongodb://127.0.0.1:27017/blog_db')

app.use(parser.json())


app.get('*', getRoutes)
app.post('*', postRoutes)
app.patch('*', updateRoutes)
app.delete('*', deleteRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})