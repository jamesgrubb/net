export default {
	name: 'playlist',
	title: 'Playlist',
	type: 'document',
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string'
		},
		{
			name: 'track',
			title: 'Track',
			type: 'array',
			of: [
				{
					type: 'reference',
					to: {
						type: 'track'
					}
				}
			]
		},
		{
			name: 'cover',
			type: 'poster'
		}
	]
}
