$(function(){

  var hypem = function() {

    // header
    $('a#shuf').insertAfter($('div#header ul.menu'));
    $('div#filter').insertBefore($('form#search-form'));

    // play/pause consistancy
    $('a#playerPlay').click(function () {

      if ($('a#playerPlay').hasClass('play')) {

        $('div.section-track').removeClass('content-paused').removeClass('content-playing');
        $('div.section-track.haarp-active').addClass('content-paused');
        $('div.section-track.content-paused > a.play-ctrl').removeClass('pause').addClass('play');

      }

      if ($('a#playerPlay').hasClass('pause')) {

        $('div.section-track').removeClass('content-paused').removeClass('content-playing');
        $('div.section-track.haarp-active').addClass('content-playing');
        $('div.section-track.content-paused > a.play-ctrl').removeClass('play').addClass('pause');

      }

    });

    // track
    $('div.section-player').each(function () {

      // create the controls element
      $(this).find('span.share-links, div.meta, ul.tools').addClass('control-latch');
      $(this).find('> .control-latch').wrapAll('<div class="controls">');

      // tidies up the sharing elements
      $(this).find('.controls span.share-links').each(function () {

        $(this).find('> .twitter-share, > .facebook-share').wrapAll('<ul class="sharemenu">');

      });

      // moves play/pause control
      $(this).find('ul.tools li.playdiv').detach().appendTo(this);
      $(this).find('> li.playdiv').wrapAll('<ul class="playpause">');

    });

  };

  hypem();

  $(document).on('ajaxComplete', hypem);

});