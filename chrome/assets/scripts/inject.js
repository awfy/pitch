$(function(){
  var s = document.createElement('script');
  s.src = chrome.extension.getURL('assets/scripts/jquery-2.1.3.min.js');
  (document.head||document.documentElement).appendChild(s);
  s.onload = function() {
    s.parentNode.removeChild(s);
  };
});
$(function(){
  var s = document.createElement('script');
  s.src = chrome.extension.getURL('assets/scripts/base.min.js');
  (document.head||document.documentElement).appendChild(s);
  s.onload = function() {
    s.parentNode.removeChild(s);
  };
});
