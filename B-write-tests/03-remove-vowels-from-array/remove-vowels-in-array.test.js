let removeVowelsFromWords = require("./remove-vowels-in-array");

test("remove vowels from all words in array", function () {
  // Arrange
  let names = ["Irina", "Etza", "Daniel"];
  // Act
  let expected = ["rn", "tz", "Dnl"]
  // Assert
  let output = removeVowelsFromWords(names);

 
  
  
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]
