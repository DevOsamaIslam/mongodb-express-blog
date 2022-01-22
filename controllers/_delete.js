import coll from '../models/blog.schema.js'

export default async (req, res) => {

	let id = req.query.id
	let category = req.query.category
	if(id) {
		try {
			let data = await coll.findByIdAndDelete(id).exec()
			if(data) res.json({...data, message: 'deleted'})
		} catch (error) {
			return res.json(error)
		}	
	} else if(category) {
		try {
			let data = await coll.deleteMany({category}).exec()
			if(data) res.json({...data, message: 'deleted'})
			else return res.json('No match found.')
		} catch (error) {
			return res.json(error)
		}		
	}
	
}

