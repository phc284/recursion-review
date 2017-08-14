// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:

//"['foo', 'bar']"
var parseJSON = function(json) {
  let result;
  let stringJson = json;
  //console.log(json);
  let index = 0;
  if (json[index] === '[') {
    //return parseArray(json)
    index++;
    parseArray(stringJson);
    console.log('This is an array');
  } else if (json[index] === '{') {
    result = {};
    console.log('This is an object');
  } else if (json[index] === '"') {
    result = '';
    console.log('This is a string');
  } else {
    
  }

  var parseArray = function(string) {
    var result = [];

    /*if (string[index] === '[') {
      index++;
      result.push(parseArray(string));
    }*/
    if (string[index] === '"' || string[index] === '\'') {
      index++;
      result.push(parseString(string));
    }
    
    return result;
  };

  var parseString = function(string) {
    var result = '';
    while (string[index] !== '"' || string[index] !== "'") {
      result += string[index];
      index++;
    }
    return result;
  };

  return result;
  // your code goes here
};

//how to make "9" into a number?

/*
parseArray(json){
  var result = [];
  if(json[i] === '"'){
    push(;
  }
 
}

*/