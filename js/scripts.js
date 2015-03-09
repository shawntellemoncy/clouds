
jQuery(function($) {
  $('#sky').jQlouds();
});

$('#sky').jQlouds();

$('#sky').jQlouds({
  wind: true
});

$('#sky').jQlouds({
  maxWidth: 300,
  maxHeight: 200,
});

$('#sky').jQlouds({
  maxClouds: 10
});

$('#sky').jQlouds({
  src: 'img/new-cloud.png',
});
