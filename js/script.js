const sideMenu = document.querySelector('aside');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');

const darkMode = document.querySelector('.dark-mode');

menuBtn.addEventListener('click', () =>{
  sideMenu.style.display = 'block';
});

closeBtn.addEventListener('click', () =>{
  sideMenu.style.display = 'none';
});

darkMode.addEventListener('click', () =>{
  document.body.classList.toggle('dark-mode-variables');
  darkMode.querySelector('span:nth-child(1)').classList.toggle('active');
  darkMode.querySelector('span:nth-child(2)').classList.toggle('active');
});


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
script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAbQAyEwwMt9Ev4USaO7JzWN6IKhLDnpno&callback=initMap`;
script.async = true;
script.defer = true;
document.head.appendChild(script);