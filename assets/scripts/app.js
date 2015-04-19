$(document).ready(function() {

  // Body
  $('body:not(.loggedin)').addClass('logged-out');

  // Content
  $('.content').find('#siteTable_organic').parent('.spacer').addClass('attention-listing');

    // Thumbnail
    var $thumbnail = $(".thumbnail");
    var $img = $(".thumbnail img");

    var attributes = $img.prop("attributes");

    $.each(attributes, function() {
      $thumbnail.attr(this.name, this.value);
    });

  // Sidebar
  $('.side').removeClass('side').addClass('sidebar');

    // Search Box
    $('.profile-page').addClass('no-search');
    $('.sidebar').find('#search').parent('.spacer').addClass('search-box');

    // Login
    $('.sidebar').find('.login-form-side').parent('.spacer').addClass('login-form-box');

    // Submit & Create
    $('.sidebar').find('.submit.submit-link').parent('.spacer').addClass('create-link-box');
    $('.sidebar').find('.submit.submit-text').parent('.spacer').addClass('create-link-box');
    $('.sidebar').find('.sidebox.create').parent('.spacer').addClass('create-link-box');
    $('.sidebar').find('.sidebox.submit.disabled').parent('.spacer').addClass('create-link-box');

    $('.sidebar').find('.submit.submit-link').find('a').addClass('new-a').addClass('new-link');
    $('.sidebar').find('.submit.submit-text').find('a').addClass('new-a').addClass('new-text');
    $('.sidebar').find('.sidebox.create').find('a').addClass('new-a').addClass('new-reddit');
    $('.sidebar').find('.sidebox.submit.disabled').find('a').addClass('new-a').addClass('new-disabled');

    $('.new-link').text('Link Post');
    $('.new-text').text('Text Post');
    $('.new-reddit').text('Sub-Reddit');

    // New Dropdown
    $('.sidebar').append('<div class="creation-dropdown">New...<div class="creation-dropdown-area"></div></div>');
    $('.sidebar').find('.creation-dropdown-area').append($('.new-a'));

    $('.sidebar').find('.creation-dropdown').on('click', function() {
      $(this).find('.creation-dropdown-area').toggleClass('show-dropdown');
    });

    $('.sidebar').find('.creation-dropdown').on('mouseleave', function() {
      setTimeout(function () {
          $(this).find('.creation-dropdown-area').removeClass('show-dropdown');
      }, 3);
    });

    // Sponsor & Ad Frame & Gold
    $('.sidebar').find('.sponsorshipbox').parent('.spacer').addClass('sponsor-box');
    $('.sidebar').find('#ad-frame').parent('.spacer').addClass('ad-box');
    $('.sidebar').find('#ad_main').parent('.spacer').addClass('ad-box');
    $('.sidebar').find('.goldvertisement').parent('.spacer').addClass('gold-box');

    // Recently Viewed
    $('.sidebar').find('.reddit-link').closest('.spacer').addClass('recently-viewed');
    $('.sidebar').find('.recently-viewed').find('.title').find('h1').text('Recently Viewed');

    // Account Activity
    $('.sidebar').find('.account-activity-box').parent('.spacer').addClass('account-activity-box');

    // Sub-Reddit
    $('.sidebar').find('h1.redditname').closest('body').addClass('subreddit-page');

      /* Info */
      $('.sidebar').find('h1.redditname').closest('.spacer').addClass('subreddit-info-box');

        /* Details */
        $('.subreddit-info-box').find('.titlebox').prepend('<div class="subreddit-details"></div>');
        $('.subreddit-info-box').find('.subreddit-details').append($('h1.redditname'));
        $('.subreddit-info-box').find('.subreddit-details').append($('.subscribers'));

        /* Options */
        $('.subreddit-info-box').find('.titlebox').prepend('<div class="subreddit-options"><div class="subreddit-options-dropdown"></div></div>');

          /* Flair */
          $('.subreddit-info-box').find('.titlebox').prepend('<div class="flair-controls"></div>');
          $('.subreddit-info-box').find('.flairtoggle').addClass('flair-element');
          $('.subreddit-info-box').find('.tagline').addClass('flair-element');
          $('.subreddit-info-box').find('.flair-controls').append($('.flair-element'));
          $('.subreddit-info-box').find('.subreddit-options-dropdown').append($('.flair-controls'));

          /* Sub Style */
          $('.subreddit-info-box').find('.subreddit-details').next('div').addClass('use-sub-style');
          $('.subreddit-info-box').find('.subreddit-options-dropdown').append($('.use-sub-style'));


      /* Mods */
      $('h1:contains("MODERATORS")').closest('.spacer').addClass('moderators-box');

    // Profile
    $('.sidebar').find('.comment-karma').closest('.spacer').addClass('side-profile');
    $('.side-profile').find('h1').after('<div class="karma-count"></div>');
    $('.side-profile').find('.karma-count').append($('.karma'));

    $('.sidebar').find('.trophy-area').removeClass('trophy-area').closest('.spacer').addClass('trophy-area');

});