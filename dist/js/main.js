/* ==========================================================================

    Project: front end test
    Author: XHTMLized
    Last updated: Fri Aug 22 2014 16:54:26

   ========================================================================== */

(function($) {

  'use strict';

  var App = {

    /**
     * Init Function
     */
    init: function() {
      // App.feature1();
      // App.feature2();
    },

    /**
     * Custom feature 1
     */
    feature1: function() {

    },

    /**
     * Custom feature 2
     */
    feature2: function() {

    }

  };

  $(function() {
    App.init();
  });

  $('.gallery').colorbox({
    open: true,
    rel: 'group1'
  });

  $(document).bind('cbox_complete', function() {
    setTimeout($.colorbox.next, 2000);
    setTimeout(parent.$.colorbox.close, 8000);
  });


})(jQuery);
