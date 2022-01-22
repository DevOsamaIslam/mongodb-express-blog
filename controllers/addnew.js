import coll from '../models/blog.schema.js'

export default async (req, res) => {
	let {title, body, category} = req.body
	try {
		let data = await coll.create({
			title, 
			body, 
			category
		})
		if(data) res.json(data)
	} catch (error) {
		return res.json(error)
	}
}