$(function () {

  function initMap() {
    var location = new google.maps.LatLng(51.021674,4.465360);

    var mapCanvas = document.getElementById('map-container');
    var mapOptions = {
      center: location,
      zoom: 14,
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
        '<p>Café Tilt<br/>Vrijgeweidestraat 62<br/>2800 Mechelen</p>' +
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
    var parkingLocation1 = new google.maps.LatLng(51.0201948,4.4636766);
    var parkingMarker1 = new google.maps.Marker({
      position: parkingLocation1,
      map: map,
      icon: parkingMarkerImage
    });

    var parkingContentString1 = '<div class="info-window">' +
        '<div class="info-content">' +
        '<p>Vrijbroekpark<br/>Ridder Dessainlaan<br/>2800 Mechelen</p>' +
        '</div>' +
        '</div>';

    var parkingInfowindow1 = new google.maps.InfoWindow({
      content: parkingContentString1,
      maxWidth: 400
    });

    parkingMarker1.addListener('click', function () {
      parkingInfowindow1.open(map, parkingMarker1);
    });

    var parkingLocation2 = new google.maps.LatLng(51.023662,4.467689);
    var parkingMarker2 = new google.maps.Marker({
      position: parkingLocation2,
      map: map,
      icon: parkingMarkerImage
    });

    var parkingContentString2 = '<div class="info-window">' +
        '<div class="info-content">' +
        '<p>Stuivenbergvaart<br/>2800 Mechelen</p>' +
        '</div>' +
        '</div>';

    var parkingInfowindow2 = new google.maps.InfoWindow({
      content: parkingContentString2,
      maxWidth: 400
    });

    parkingMarker2.addListener('click', function () {
      parkingInfowindow2.open(map, parkingMarker2);
    });

    var parkingLocation3 = new google.maps.LatLng(51.024960,4.447949);
    var parkingMarker3 = new google.maps.Marker({
      position: parkingLocation3,
      map: map,
      icon: parkingMarkerImage
    });

    var parkingContentString3 = '<div class="info-window">' +
        '<div class="info-content">' +
        '<p>Uilmolenweg<br/>2800 Mechelen</p>' +
        '</div>' +
        '</div>';

    var parkingInfowindow3 = new google.maps.InfoWindow({
      content: parkingContentString3,
      maxWidth: 400
    });

    parkingMarker3.addListener('click', function () {
      parkingInfowindow3.open(map, parkingMarker3);
    });



  }

  google.maps.event.addDomListener(window, 'load', initMap);
});