$(function(){
  
  var do_stuff = function() {
    // header
    $('a#shuf').insertAfter($('div#header ul.menu'));
    $('div#filter').insertBefore($('form#search-form'));
  
    // track
    $('div.section-player').each(function () {
  
      // create the controls element
      $(this).find('span.share-links, div.meta, ul.tools').addClass('control-latch');
      $(this).find('.control-latch').wrapAll('<div class="controls">');
  
      // tidies up the sharing elements
      $(this).find('span.share-links').each(function () {
  
        $(this).find('.twitter-share, .facebook-share').wrapAll('<ul class="sharemenu">');
  
      });
  
      // moves play/pause control
      $(this).find('li.playdiv').detach().appendTo(this);
      $(this).find('li.playdiv').wrapAll('<ul class="playpause">');
  
    });
  };
  
  do_stuff();
  
  $(document).ajaxComplete(function() {
    do_stuff();
  });
});
