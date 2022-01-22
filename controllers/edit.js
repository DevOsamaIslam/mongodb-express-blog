import coll from '../models/blog.schema.js'

const edit = {}

edit.category = async (req, res) => {
	let id = req.params.id
	let cats = req.query.cats.split(' ')
	let action = req.query.action

	if(action === 'add') {
		try {
			let data = await coll.findByIdAndUpdate(id,{
					$addToSet: {category: cats}
			}, { new: true}).exec()	
			return res.json(data)
		} catch (error) {
			return res.json(error)
		}		
	}
	else if(action === 'remove') {
		try {
			let data = await coll.findByIdAndUpdate(id,{
					$pullAll: {category: cats}
			}, { new: true }).exec()	
			return res.json(data)
		} catch (error) {
			return res.json(error)
		}			
	}
	else {
		try {
			let data = await coll.findByIdAndUpdate(req.params.id,{
				$set: { category: cats}
			}, { new: true }).exec()	
			return res.json(data)
		} catch (error) {
			return res.json(error)
		}	
	}

}






export default edit