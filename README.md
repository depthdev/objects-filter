# ObjectFilter
<p>v1.2.0</p>
<p>Filter lists/JSON objects by keywords, partial words, and groups of words.
Optionally, specify paths with JSON syntax and/or ask for case-sensitive results.</p>

<p>1 KB minified</p>

<p>ObjectFilter is a function that takes two parameters, an array of objects to filter through, and an array of objects with <em>what</em> to query, and returns a new array with the objects that matched the queries.</p>

<p><a href="http://codepen.io/depthdev/pen/emwBmW" target="_blank">Demo</a></p>
<p>Example Use:</p>
<pre>
var list = <strong>ObjectFilter(objectToQuery, [</strong>
	<strong>{</strong>
		<strong>filter:</strong> document.getElementById('filter-name').value,
		<strong>paths:</strong> 'name', // Optional
		<strong>caseSensitive:</strong> false // Optional, default is false
	<strong>},</strong>
	<strong>{</strong>
		<strong>filter:</strong> document.getElementById('filter-color').value,
		<strong>paths: [</strong>
			'color.notes',
			'size.diameter'
		<strong>],</strong> // Optional
		<strong>caseSensitive:</strong> false // Optional, default is false
	<strong>}</strong>
<strong>]);</strong>
</pre>
