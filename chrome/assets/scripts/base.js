// Moving the user menu to the header
$('#filter').insertBefore($('#search-form'));

// Runs when site is finished loading
$( window ).load(function() {

  // Remove bs from the welcome message
  $('#message-intro-new').find('br').remove();

});

