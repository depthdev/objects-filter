# filter
Filter lists/JSON objects by keywords, partial words, and groups of words.
Optionally, specify paths with JSON syntax and/or ask for case-sensitive results.

<p>1.04 KB minified</p>

<p><a href="http://codepen.io/clearwavedesigns/pen/emwBmW" target="_blank">Demo</a></p>
<p>Example Use:</p>
<pre>
var list = Filter(objectToQuery, [
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
