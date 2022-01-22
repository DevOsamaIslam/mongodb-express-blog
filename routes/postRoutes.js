import { Router } from "express";
const rt = Router()

import addnew from '../controllers/addnew.js'

rt.post('/new', addnew)

export default rt