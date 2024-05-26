function makeCall() {
    alert("Calling emergency services!");
  
    var tenMinutes = 60 * 10, 
        display = document.getElementById('waitTime');
    startCountdown(tenMinutes, display);
  }
  
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      document.getElementById("locationDisplay").innerHTML = "Geolocation is not supported by this browser.";
    }
  }
  
  function showPosition(position) {
    document.getElementById("locationDisplay").innerHTML = "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;
  }
  
  function startCountdown(duration, display) {
    var timer = duration, minutes, seconds;
    var intervalId = setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);
  
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
  
      display.textContent = minutes + ":" + seconds;
  
      if (--timer < 0) {
        clearInterval(intervalId);
        display.textContent = "The ambulance should have arrived.";
      }
    }, 1000);
  }
  
  window.onload = getLocation;
  