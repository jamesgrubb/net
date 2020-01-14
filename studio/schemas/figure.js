export default {
	title: 'Poster',
	name: 'poster',
	type: 'object',
	options: {
		hotspot: true // <-- Defaults to false
	},
	fields: [
		{
			name: 'image',
			type: 'image',
			title: 'Image'
		},
		{
			name: 'caption',
			type: 'string',
			title: 'Caption',
			options: {
				isHighlighted: true // <-- make this field easily accessible
			}
		},
		{
			// Editing this field will be hidden behind an "Edit"-button
			name: 'attribution',
			type: 'string',
			title: 'Attribution'
		}
	]
}
