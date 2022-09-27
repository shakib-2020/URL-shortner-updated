// section one
function getShortUrl() {
  let shortUrl = "https://bit.ly/jwudksl";
  document.getElementById("short__url__output").innerHTML = shortUrl;
}

function copyTextOne() {
  // Get the text field
  var copyText = document.getElementById("short__url__output").textContent;

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText);

  // Alert the copied text
  alert("Copied the text: " + copyText);
}

// section two
function getLongUrl() {
  let longUrl = "https://www.google.com";
  document.getElementById("long__url__output").innerHTML = longUrl;
}

function copyTextTwo() {
  // Get the text field
  var copyText = document.getElementById("long__url__output").textContent;

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText);

  // Alert the copied text
  alert("Copied the text: " + copyText);
}
