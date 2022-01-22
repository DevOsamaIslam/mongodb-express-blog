import { Router } from 'express';
const rt = Router()

import edit from '../controllers/edit.js'

rt.patch('/category/:id', edit.category)

export default rt
