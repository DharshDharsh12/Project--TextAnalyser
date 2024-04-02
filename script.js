const TEXT = document.getElementById("text");
// const WORDS = document.getElementById("words");

function show() {
  var character = (document.getElementById("text").value);
  document.getElementById("character").textContent = character.length;

  let char = 0;
  let sent = 0;
  let specialChar = 0;
  for (let i = 0; i < character.length; i++) {
    if (character[i] == " ") {
      words = char += 1;
    }
    document.getElementById("words").textContent = words;

    if (character[i] == "." || character[i] == "!" || character[i] == "?") {
      sent = sent += 1
    }
    document.getElementById("sentences").textContent = sent;

    if (character[i] == "@" || character[i] == "#" || character[i] == "$" || character[i] == "%" || character[i] == "^" || character[i] == "&" || character[i] == "*") {
      specialChar = specialChar += 1
    }
    document.getElementById("specialchar").textContent = specialChar;
  }
  var words = character.split(" ");
  let longestWord = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  document.getElementById("longestWord").textContent = longestWord;

  const wordsAvg = character.match(/\w+/g);

  if (wordsAvg) {
    const totalLength = wordsAvg.join("").length;
    const averageWordLength = totalLength / wordsAvg.length;
    const resultElement = document.getElementById("averageword");
    resultElement.textContent = averageWordLength.toFixed(2);
  }
  document.getElementById("averageword").textContent = resultElement;
}

