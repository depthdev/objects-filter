/*
 Filter v1.1.0
 (c) 2015 Clearwave Designs, LLC. http://clearwavedesigns.com
 License: Apache 2.0
*/

function Filter(data, filters) {
	
	var data = data;
	
	var escape = /[\-\[\]\/\{\}\(\)\*\+\?\:\.\\\^\$\|]/g; // RegEx to escape regex characters in user's search fields
	
	// Query all matches from data set
	var query = function(obj) {
		
		// If there is some text, and it's not a space in the provided text input...
		if (obj.filter && /\S+/.test(obj.filter)) {
			
			// Get all values from input
			var vals = obj.filter.split(/\s+/);
			var regexes = [];
			for (var i = 0, l = vals.length; i < l; i++) {
				var v = vals[i].replace(escape,'\\$&');
				var flag = obj.caseSensitive ? '' : 'i';
				regexes[i] = new RegExp(v, flag);
			}
			
			var searchStr = function(str) {
				// Get all filter values
				var foundAll = true;
				// Loop through object to find if all filter values exist; if so, return the result
				for (var i = 0, l = vals.length; i < l; i++) {
					if (foundAll) {
						for (var ii = 0, ll = regexes.length; ii < ll; ii++) {
							if (!regexes[ii].test(str)) {
								foundAll = false; break;
							}
						}
					} else {
						break;
					}
				}
				// Return search result boolean
				return foundAll;
			}; // end searchStr
			
			

			// Loop through all projects
			var temp = [];
			for (var i = 0, l = data.length; i < l; i++) {
				/*
				* If exact match, push to new temp array;
				* otherwise, see if all provided words exist somewhere in the provided object property using the "searchStr" function;
				* and, if so, push it to the temp array
				*/
				if (obj.paths) {
					
					// Set object property paths
					var propPaths = [];
					if (Array.isArray(obj.paths)) {
						for (var ii = 0, ll = obj.paths.length; ii < ll; ii++) {
							var props = obj.paths[ii].split(/\./);
							var prop = data[i];
							for (var iii = 0, lll = props.length; iii < lll; iii++) {
								if (prop.hasOwnProperty(props[iii])) {
									prop = prop[props[iii]];
								}
							}
							propPaths.push(typeof prop === 'object' ? JSON.stringify(prop) : prop);
						}
					} else {
						var props = obj.paths.split(/\./);
						var prop = data[i];
						for (var ii = 0, ll = props.length; ii < ll; ii++) {
							if (prop.hasOwnProperty(props[ii])) {
								prop = prop[props[ii]];
							}
						}
						propPaths.push(typeof prop === 'object' ? JSON.stringify(prop) : prop);
					}
				
					var keepObj = false;
					
					// Loop through each path's values, and if an object itself, search all children;
					for (var ii = 0, ll = propPaths.length; ii < ll; ii++) {
						// Find matches
						if (obj.caseSensitive) {
							if (obj.filter === propPaths[ii] || searchStr(propPaths[ii])) {
								keepObj = true;
							}
						} else {
							if (obj.filter.toString().toLowerCase() === propPaths[ii].toString().toLowerCase() || searchStr(propPaths[ii])) {
								keepObj = true;
							}
						}
					} // end ii for loop
					
					
				} else {
					if (searchStr(JSON.stringify(data[i]))) {
						keepObj = true;
					}
				}
				
				// If all values were found, push this object to the temp array
				if (keepObj) {
					temp.push(data[i]);
				}
				
			} // end i for loop
			// Replace pointer variable with filtered data set
			data = temp;
		}
	}; // query()
	
	// Run queries
	for (var i = 0, l = filters.length; i < l; i++) {
		query(filters[i]);
	}
	
	// Return the filtered data set
	return data;
} // end Filter
