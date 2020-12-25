let map;
  
function initMap() {
    
    var options = {
        center:{
            lat:43.268825,lng:76.944648
        }, 
        zoom:12
    }
  map = new google.maps.Map(document.getElementById("map"), options);


  var optionss = {
    center:{
        lat:43.265897,lng:76.825010
    }, 
    zoom:12
}
map = new google.maps.Map(document.getElementById("map"), optionss);


  var icon = {
      url:"images/mapp.ico",
      scaledSize: new google.maps.Size(30,30),

  }
  var marker = new google.maps.Marker({
      position: {lat:43.23355742968276, lng: 76.95679813991896},
      map:map,
      icon: icon
  })
  var marker2 = new google.maps.Marker({
      position: {lat:43.21932101638762, lng: 76.9279241920498},
      map:map,
      icon: icon
  })
  var marker3 = new google.maps.Marker({
      position: {lat: 43.24833057853327, lng: 76.87258725311727},
      map:map,
      icon: icon
  })
}
//AOS initialization
AOS.init({
    disable: false, 
    startEvent: 'DOMContentLoaded', 
    initClassName: 'aos-init', 
    animatedClassName: 'aos-animate', 
    useClassNames: false, 
    disableMutationObserver: false,
    debounceDelay: 50, 
    throttleDelay: 99, 
    offset: 120, 
    delay: 0, 
    duration: 750, 
    easing: 'ease', 
    once: false, 
    mirror: false, 
    anchorPlacement: 'top-bottom', 
 });