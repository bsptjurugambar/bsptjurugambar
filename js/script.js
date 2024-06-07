// Function to get URL parameters
function getUrlParameter(name) {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  var results = regex.exec(location.search);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Retrieve the turn number from the URL parameter
var turnNumber = getUrlParameter('turnNumber');

// Display the turn number on the page
document.getElementById('turnNumber').innerText = turnNumber;
