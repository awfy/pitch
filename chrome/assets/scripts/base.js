$(function(){

  var hypem = function() {

    $(window).scroll(function() {

      var scroll = $(window).scrollTop();

      if (scroll <= 54) {

        $("div#content-wrapper").removeClass('scrolling');

      }

      if (scroll >= 54) {

        $("div#content-wrapper").addClass('scrolling');

      }

    });

    // header
    $('a#shuf').insertAfter($('div#header ul.menu'));
    $('div#filter').insertBefore($('form#search-form'));

    // player & track control consistancy
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

    // player
    $('div#player-container').each(function () {

      if ($(this).hasClass('stick')) {

        $('div#content-wrapper').addClass('scrolling');

      }

      // moves sharing controls
      $(this).find('#player-nowplaying > div.share-icons').insertAfter($('a#playerFav'));
      $(this).find('#player-controls > div.share-icons > a').wrapAll('<div class="playersharemenu">');

      // moves volume controls
      $(this).find('#player-timebar > div#player-volume-mute, #player-timebar > div#player-volume-outer').insertAfter($('a#playerNext'));

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

    // move submenu
    $('div#content-left ul#submenu').prependTo($('div#content-wrapper')).wrapAll('<div id="submenu-container">');

    // submenu
    $('ul#submenu').each(function () {

      // favorite selection fix
      if ($('li#nav-playlist-1 a, li#nav-playlist-2 a, li#nav-playlist-3 a').hasClass('selected')) {

        $(this).find('li#nav-favorites a').removeClass('selected');

      }

    });

    // pagination
    $('div.paginator').each(function () {

      $(this).find('> a#infinite-tracks-button').wrapAll('<div class="paginator-inner">');

    });

  };

  hypem();

  $(document).on('ajaxComplete', hypem);

});