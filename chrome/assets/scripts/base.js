// Moving elements to/around the header
$('#shuf').insertAfter($('#header ul.menu'));
$('#filter').insertBefore($('#search-form'));


// Runs when site is finished loading
$( window ).load(function() {

  // Remove bs from the welcome message
  $('#message-intro-new').find('br').remove();

});

