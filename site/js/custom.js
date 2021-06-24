$(function () {

  function initMap() {
    var location = new google.maps.LatLng(51.0145411,4.4417449,18.31);

    var mapCanvas = document.getElementById('map-container');
    var mapOptions = {
      center: location,
      zoom: 15,
      panControl: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(mapCanvas, mapOptions);

    var marker = new google.maps.Marker({
      position: location,
      map: map
    });

    var contentString = '<div class="info-window">' +
        '<div class="info-content">' +
        '<p>Dorpshuis Hombeek<br/>Leibeekstraat 2<br/>2811 Hombeek</p>' +
        '</div>' +
        '</div>';

    var infowindow = new google.maps.InfoWindow({
      content: contentString,
      maxWidth: 400
    });

    marker.addListener('click', function () {
      infowindow.open(map, marker);
    });

    var parkingMarkerImage = 'img/parking.png';
    var parkingLocation1 = new google.maps.LatLng(51.0138291,4.4366969,17);
    var parkingMarker1 = new google.maps.Marker({
      position: parkingLocation1,
      map: map,
      icon: parkingMarkerImage
    });

    var parkingContentString1 = '<div class="info-window">' +
        '<div class="info-content">' +
        '<p>Kriekerijveld<br/>2811 Hombeek</p>' +
        '</div>' +
        '</div>';

    var parkingInfowindow1 = new google.maps.InfoWindow({
      content: parkingContentString1,
      maxWidth: 400
    });

    parkingMarker1.addListener('click', function () {
      parkingInfowindow1.open(map, parkingMarker1);
    });

    var parkingLocation2 = new google.maps.LatLng(51.0161589,4.4439703,17.54);
    var parkingMarker2 = new google.maps.Marker({
      position: parkingLocation2,
      map: map,
      icon: parkingMarkerImage
    });

    var parkingContentString2 = '<div class="info-window">' +
        '<div class="info-content">' +
        '<p>Rugby Mechelen<br/>Hombekerkouter 14<br/>2811 Mechelen</p>' +
        '</div>' +
        '</div>';

    var parkingInfowindow2 = new google.maps.InfoWindow({
      content: parkingContentString2,
      maxWidth: 400
    });

    parkingMarker2.addListener('click', function () {
      parkingInfowindow2.open(map, parkingMarker2);
    });


  }

  google.maps.event.addDomListener(window, 'load', initMap);
});