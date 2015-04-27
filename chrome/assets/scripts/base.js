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
      $(this).find('div#player-nowplaying > div.share-icons').insertAfter($('a#playerFav'));
      $(this).find('div#player-controls > div.share-icons > a').wrapAll('<div class="playersharemenu">');

      // moves volume controls
      $(this).find('div#player-timebar > div#player-volume-mute, div#player-timebar > div#player-volume-outer').insertAfter($('a#playerNext'));

    });

    // track
    $('div.section-player').each(function () {

      // moves play/pause control
      $(this).find('ul.tools li.playdiv').detach().appendTo(this);
      $(this).find('> li.playdiv').wrapAll('<ul class="playpause">');

      // moves rank
      $(this).find('> span.rank').insertBefore($(this).find('> h3.track_name a.artist'));

      // create the controls element
      $(this).find('span.share-links, div.meta, ul.tools').addClass('control-latch');
      $(this).find('> .control-latch').wrapAll('<div class="controls">');
      $(this).find('> div.controls > span.share-links, div.controls > div.meta').addClass('control-latch-sub');
      $(this).find('> div.controls > .control-latch-sub').wrapAll('<div class="options">');
      $(this).find('> div.controls > ul.tools > li.playlist-ctrls').insertBefore($(this).find('> div.controls > div.options > div.meta'));
      $(this).find('> div.controls > div.options > li.playlist-ctrls').wrapAll('<ul class="playlistcontrols">');
      $(this).find('> div.controls > div.options > ul.playlistcontrols, > div.controls > div.options > span.share-links, > div.controls > div.options > div.meta').wrapAll('<div class="options-dropdown">');
      $(this).find('> div.controls > div.options > div.options-dropdown > span.share-links').insertAfter($(this).find('> div.controls > div.options > div.options-dropdown > div.meta'));

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

    // genres
    $('body#tags').each(function() {

      $(this).find('div#browse-genres > ul#tags_more').insertBefore($('ul#submenu > li#nav-all'));
      $(this).find('ul#submenu > ul#tags_more').wrapAll('<li id="submenu-filter" class="submenu-genres">');
      $(this).find('ul#submenu > li#submenu-filter').prepend('<span class="submenu-filter-control"></span>');
      $(this).find('ul#submenu > li#submenu-filter > span.submenu-filter-control').html('<span class="title">Genre:</span><span id="submenu-filter-title">Funk</span>');

    });

    // pagination
    $('div.paginator').each(function () {

      $(this).find('> a#infinite-tracks-button').wrapAll('<div class="paginator-inner">');

    });

  };

  hypem();

  $(document).on('ajaxComplete', hypem);

});