// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  
  if (Array.isArray(obj)) {
    var newObj = obj.map(function (item) {
      return stringifyJSON(item);
    });
    return '[' + newObj + ']';
  } else if (typeof obj === 'object') {
    var string = '';
    if (obj === null) {
      return 'null';
    }
    for (var key in obj) {
      if (typeof obj[key] !== 'function') {
        if (string !== '') {
          string += ',';
        }
        string += stringifyJSON(key) + ':' + stringifyJSON(obj[key]);
      } else {
        return '{}';
      }
    }
    return '{' + string + '}';
  } else if (typeof obj === 'string') {
    return '"' + obj + '"';
  }

  return '' + obj;
};
