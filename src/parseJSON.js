// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:

//"['foo', 'bar']"
var parseJSON = function(json) {
  let result;
  let stringJson = json;
  //console.log(json);
  let index = 0;


  var parseArray = function(string) {
    var result = [];

    /*if (string[index] === '[') {
      index++;
      result.push(parseArray(string));
    }*/
    console.log('Enter Array');
    if (string[index] === '"' || string[index] === '\'') {
      index++;
      if (string[index] !== ']') {
        result.push(parseString(string));
      } else {
        console.log('Exit Array');
        return result;
      } //what to do with closing bracket
    }
    return result;
  };

  var parseString = function(string) {
    var result = '';
    console.log('Enter parseString');
    console.log('Starting on character ' + string[index] + ' in ' + string);
    while ( string[index] !== '"' && string[index] !== '\'') {
      //console.log(string[index]);
      console.log('on char ' + string[index] + ' in ' + string);
      //console.log(string[index] === '"');
      if ( index > string.length) {
        return result;
      }
      result += string[index];
      index++;
    }
    index++;
    console.log('string Parse result is ' + result);
    console.log('Exit parseString');
    return result;
  };

  if (json[index] === '[') {
    //return parseArray(json)
    index++;
    //console.log(json);
    return parseArray(stringJson);
  } else if (json[index] === '{') {
    result = {};
    console.log('This is an object');
  } else if (json[index] === '"') {
    result = '';
    console.log('This is a string');
  } else {
    
  }



  // your code goes here
};

console.log(parseJSON('["foo"]'));

//how to make "9" into a number?

/*
parseArray(json){
  var result = [];
  if(json[i] === '"'){
    push(;
  }
 
}

*/