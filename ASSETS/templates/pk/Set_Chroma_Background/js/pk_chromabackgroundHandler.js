
function process(data) {
  data = JSON.parse(data) // <-- This works only with JSON data templates (not XML).
  for (var fField in data) {
    var domElement = document.getElementById(fField);
    if (domElement) {
      let value = data[fField].text || data[fField] || '';
      if ( value == "null" || value == "undefined" ) value = "";
      domElement.innerHTML = value;
    }
  }
}

function play() {
  runAnimationIN(false)
}


function stop() {
  runAnimationOUT()
}

function update(data) {
  process(data)
}

function next(data) {
  runAnimationNEXT()
}
