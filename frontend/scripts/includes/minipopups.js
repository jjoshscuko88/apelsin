import Vpopape from 'libs/vpopape-0.0.4.min.js';

(function (w, d) {
  'use strict';
  var POPUP = 'minipopup';
  var POPUP_HIDDEN = 'minipopup_hidden';
  var POPUP_ACTIVE = 'minipopup_active';
  var POPUP_CLOSER = 'minipopup__closer';

  w.addEventListener('DOMContentLoaded', init);

  function init () {
    var popups = d.querySelectorAll('.' + POPUP);
    Array.prototype.forEach.call(popups, initPopup);
  }

  function initPopup (popa) {
    var callers = d.querySelectorAll('[data-minipopup-id="' + popa.id + '"]');
    var closers = popa.querySelectorAll('.' + POPUP_CLOSER);

    new Vpopape({
      popup: popa,
      animationTime: 330,
      callers: callers,
      closers: closers,
      hideOnEsc: true,
      activeClassname: POPUP_ACTIVE,
      hidingClassname: POPUP_HIDDEN,
    });
  }

})(window, document);
