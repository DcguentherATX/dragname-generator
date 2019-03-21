$(document).ready(function() {

  var $names = ('<div></div>');

  $('.btn').on('click', function() {
  	var $names = $('<div></div>');
  	var $random = getName();

    $names.html($random);
  	$names.appendTo('.names')
  });



});