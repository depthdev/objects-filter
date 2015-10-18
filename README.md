# filter
Filter lists/JSON objects by keywords

<p>Example Use:</p>
<pre>
var sort = function() {
	var list = Filter(apples, [
		{
			filter: _('#filter-name').value,
			paths: 'name', // Optional
			caseSensitive: false // Optional
		},
		{
			filter: _('#filter-color').value,
			paths: [
				'color.notes',
				'size.diameter'
			], // Optional
			caseSensitive: false // Optional
		}
	]
);
</pre>
