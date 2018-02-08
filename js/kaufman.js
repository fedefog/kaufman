$(document).ready(function() {
    
    $('.home-slider').flexslider({
        animation: "fade",
        animationLoop: false,
        slideshow: true,
        animationLoop: true,
        directionNav: false,
        controlNav: false
    });
    
    
    $(".nav-icon").click(function() {
          $(".open-menu").addClass("open");              
    });

    $(".close-icon").click(function() {
          $(".open-menu").removeClass("open");              
    });
    
    if ($('.page-servicios').length > 0)
    {
        $(".l-management").click( function(){
            ScrollTo("#wealth-management");
        });
        $(".l-trading").click( function(){
            ScrollTo("#trading");
        });
        $(".l-reporting").click( function(){
            ScrollTo("#reporting");
        });
        $(".l-planing").click( function(){
            ScrollTo("#wealth-planing");
        });
    };
    
    if ($('.page-empresa').length > 0)
    {
        $(".l-clientes").click( function(){
            ScrollTo("#clientes");
        });
        $(".l-asesor").click( function(){
            ScrollTo("#asesor");
        });
        $(".l-panama").click( function(){
            ScrollTo("#panama");
        });
    };
    
    function ScrollTo(id){
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $(id).offset().top
        }, 800);
        $(".open-menu").removeClass("open");    
    }
    
      
});

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 14,
      center: {lat: 8.9785843, lng: -79.5123267}
    });

    var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';

    var marker = new google.maps.Marker({
      position: map.getCenter(),
      icon: 'images/map-icon.png',
      map: map
    });

      marker.setMap(map);
  }