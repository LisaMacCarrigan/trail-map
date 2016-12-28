function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(39.900, -75.058),
        zoom: 17,
        mapTypeId: google.maps.MapTypeId.HYBRID
    }
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}
