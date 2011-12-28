// Google Analytics
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-22036475-1']);
_gaq.push(['_setDomainName', 'bryanirace.com']);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

$(function() {
    var script = $('pre').text();

    /*
     Ghetto minification - this is fine for now. Make a call to the Google Closure Compiler API if we need to
     get fancier in the future.
     */
    var bookmarklet = 'javascript:' + script.split(' ').join('');

    $('#bookmarklet').attr('href', bookmarklet);
    $('#bookmarklet-source').text(bookmarklet);
});