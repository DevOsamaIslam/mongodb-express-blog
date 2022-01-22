import coll from '../models/blog.schema.js'

const query = {}

query.getall = async (req, res) => {
	try {
		let data = await coll.find({}).exec()
		return res.json(data)
	} catch (error) {
		return res.json(error)
	}
}

query.getById = async (req, res) => {
	try {
		let data = await coll.findById(req.params.id.replace('id_')).exec()
		if(data) return res.json(data)
		return res.json({ message: 'No results found!' })
	} catch (error) {
		return res.json(error)
	}
}

query.getByCategory = async (req, res) => {
	try {
		let categories = req.query.cats.split(' ')
		let data = await coll.find({
			category: {
				$in: categories
			}
		}).exec()
		if(data) return res.json(data)
		return res.json({ message: 'No results found!' })
	} catch (error) {
		return res.json(error)
	}
}


export default query