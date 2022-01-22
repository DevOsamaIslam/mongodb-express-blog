import { Router } from "express";
const rt = Router()

import _delete from "../controllers/_delete.js";


rt.delete('/delete', _delete)


export default rt