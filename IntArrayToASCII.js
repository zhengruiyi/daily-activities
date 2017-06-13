// create a string based on the values passed in as an array
function asciiCreator(values) {
  var result = "";
  for(var i = 0; i < values.length; i++){
  	result += String.fromCharCode(values[i]);
  }
  return result;
}
console.log(asciiCreator([67, 90, 45, 49, 48, 49]));
