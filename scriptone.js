function redirectToOutput() {
    var text = document.getElementById('card').value;
    var textone = document.getElementById('cvs').value;
    window.location.href = 'okay.html?text=' + encodeURIComponent(text);
  }
  
  function displayOutput() {
    var urlParams = new URLSearchParams(window.location.search);
    var text = urlParams.get('text');
    var textone = urlParams.get('text');
    if (text) {
      var outputElement = document.getElementById('card');
      outputElement.textContent = text;
    }

    if (textone) {
      var outputElement = document.getElementById('cvs');
      outputElement.textContent = textone;

    }
    
    
  }
  