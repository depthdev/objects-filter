# ObjectFilter
<p>v1.2.0</p>
<p>Filter lists/JSON objects by keywords, partial words, and groups of words.
Optionally, specify paths with JSON syntax and/or ask for case-sensitive results.</p>

<p>1 KB minified</p>

<p><a href="http://codepen.io/depthdev/pen/emwBmW" target="_blank">Demo</a></p>
<p>Example Use:</p>
<pre>
var list = ObjectFilter(objectToQuery, [
	{
		filter: document.getElementById('filter-name').value,
		paths: 'name', // Optional
		caseSensitive: false // Optional, default is false
	},
	{
		filter: document.getElementById('filter-color').value,
		paths: [
			'color.notes',
			'size.diameter'
		], // Optional
		caseSensitive: false // Optional, default is false
	}
]);
</pre>
