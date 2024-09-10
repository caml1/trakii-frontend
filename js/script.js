window.onload = function() {
  // Initialize and add the map
  function initMap(lat, long) {
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: { lat: lat, lng: long }
    });

    // Add a marker at the user's location
    new google.maps.Marker({
      position: { lat: lat, lng: long },
      map: map
    });
  }

  // Get the device's location using Geolocation API
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      const lat = position.coords.latitude;
      const long = position.coords.longitude;
      initMap(lat, long); // Call the function to initialize the map
    }, function() {
      alert('Error: The Geolocation service failed.');
    });
  } else {
    alert('Error: Your browser doesn\'t support geolocation.');
  }
};

// Load the Google Maps API asynchronously
const script = document.createElement('script');
script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDW2qWyNtCO55Qn0ffBfA_1OP5h5oiwCJg&callback=initMap`;
script.async = true;
script.defer = true;
document.head.appendChild(script);