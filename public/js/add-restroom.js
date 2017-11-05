$(document).on('click', '#submit', submitRestroom);

var $name = $('#location-name');
var $location = $('#address');
var $type = $('label.radio');
var $comments = $('#comment');

function submitRestroom () {
  event.preventDefault();
  var newRestroom = {
    name: $name.val().trim(),
    location: $location.val().trim(),
    category: $type.val(),
    comments: $comments.val().trim()
    // createdAt: req.body.createdAt,
    // updatedAt: req.body.updatedAt
  };
  $.post('api/new/restroom', newRestroom, function () {
    alert('Restroom added!');
  });
  $name.val('');
  $location.val('');
  $type.val('');
  $comments.val('');
}
