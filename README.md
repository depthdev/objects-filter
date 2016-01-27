# ObjectsFilter
<p>v1.3.0</p>
<p>Filter lists/JSON objects by keywords, partial words, and groups of words.
Optionally, specify paths with JSON syntax and/or ask for case-sensitive results.</p>

<p>1 KB minified</p>

<p>ObjectsFilter is a function that takes two parameters, an array of objects to filter through, and an array of objects with <em>what</em> to query, and returns a new array with the objects that matched the queries.</p>

<p>Methods:</p>
<ul>
<li>filter - string to find</li>
<li>paths - nested properties to look through for the filter string, as a string, or array of strings, with object.property syntax</li>
<li>caseSensitive - boolean to look with case sensitivity or not. The default is false (not case sensitive in searching)</li>
</ul>

<p><a href="http://codepen.io/depthdev/pen/emwBmW" target="_blank">Demo</a></p>
<p>Example Use:</p>
<pre>
var list = <strong>ObjectsFilter(arrayOfObjectsToQuery, [</strong>
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
