import mongoose from 'mongoose'

const schema = new mongoose.Schema({
	title: {
		type: String,
		required: [true, 'The title is required!']
	},
	category: {
		type: Array,
		default: ['uncategorized'],
		index:true
	},
	body: {
		type: String,
		required: [true, 'What\'s a blog without content??']
	}
}, { timestamps: true})

export default mongoose.model('Post', schema)