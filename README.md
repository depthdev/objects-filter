# filter
Filter lists/JSON objects by keywords

<p><a href="http://codepen.io/clearwavedesigns/pen/emwBmW" target="_blank">Demo</a></p>
<p>Example Use:</p>
<pre>
var list = Filter(objectToQuery, [
	{
		filter: document.getElementById('filter-name').value,
		paths: 'name', // Optional
		caseSensitive: false // Optional
	},
	{
		filter: document.getElementById('filter-color').value,
		paths: [
			'color.notes',
			'size.diameter'
		], // Optional
		caseSensitive: false // Optional
	}
]);
</pre>
