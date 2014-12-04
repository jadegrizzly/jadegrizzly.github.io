$(document).ready(function() {

  $('.banner').append(
    '<a href="http://hackreactor.com"> \
    <img style="position: fixed; top: 0; right: 0; border: 0;" \
    src="http://i.imgur.com/x86kKmF.png" \
    alt="Built at Hack Reactor"> \
    </a>'
  );

  var icons = ['fa-camera-retro', 'fa-thumbs-o-up', 'fa-thumbs-o-down', 'fa-heart-o', 'fa-beer'];


  var $icon = $('.jg-icon');
  var counter = 1;
  // Set initial icon
  $icon.addClass(icons[0]);

  // Loop through array setting and cleaning up previous classes per iteration
  setInterval(function() {
    if(counter === icons.length) {
      counter = 0;
      $icon.removeClass(icons[icons.length-1]);
    }

    $icon.addClass(icons[counter]);
    counter++;

    $icon.removeClass(icons[counter-2]);
  }, 2000);

  
});

