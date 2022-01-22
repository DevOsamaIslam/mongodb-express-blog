import { Router } from "express";
const rt = Router()

import query from '../controllers/query.js'

rt.get('/', query.getall)

rt.get('/category', query.getByCategory)

rt.get('/id_:id', query.getById)


export default rt