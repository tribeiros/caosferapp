var path = require('path');
var options = [
  {
    title: "chaos Notification",
    body: "xxx"
  }
]

function doNotify(evt) {
  if (evt.srcElement.id == "basic") {
    new Notification(options[0].title, options[0]);
  }
  else if (evt.srcElement.id != "basic") {
    new Notification(options[0].title, options[0]);
  }
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("basic").addEventListener("click", doNotify);
})
