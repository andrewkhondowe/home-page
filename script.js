var x = null;
var y = null;
var max = 0.09;
var min = -max;
$('.rainbow').on('mousemove touchmove', function(e) {
  if (!$(this).hasClass('js-mousedown')) {
    return;
  }
  var pageX = e.pageX;
  var pageY = e.pageY;
  if (x === null) {
    x = pageX;
  }
  if (y === null) {
    y = pageY;
  }
  var styles = window.getComputedStyle(this)
  var xvar = parseFloat(styles.getPropertyValue('--x').trim('em'));
  var yvar = parseFloat(styles.getPropertyValue('--y').trim('em'));

  newxvar = ((pageX - x) / 1000) + xvar;
  newyvar = ((pageY - y) / 1000) + yvar;

  if (newxvar > max) {
    newxvar = max;
  }
  if (newxvar < min) {
    newxvar = min;
  }
  if (newyvar > max) {
    newyvar = max;
  }
  if (newyvar < min) {
    newyvar = min;
  }

  $(this).css({ '--x': newxvar + 'em', '--y': newyvar + 'em'});

  x = pageX;
  y = pageY;
}).on('mouseover', function() {
  $(this).addClass('js-hover');
}).on('mouseout', function() {
  $(this).removeClass('js-hover');
}).on('mousedown touchstart', function() {
  $(this).addClass('js-mousedown');
});
$(document).on('mouseup touchend', function() {
  x = null;
  y = null;
  $('.rainbow').removeClass('js-mousedown');
})
