$(document).ready(function () {

  var $name = $('#location-name');
  var $location = $('#address');
  var $type = $('label.radio');
  var $comments = $('#comment');
  console.log($name + ' on ready'); // this outputs '[object Object] on ready'

  $(document).on('click', '#submit', submitRestroom);

  function submitRestroom (event) {
    console.log($name + ' on submit'); // this does not work yet
    event.preventDefault();
    var newRestroom = {
      name: $name.val().trim(),
      location: $location.val().trim(),
      category: $type.val(),
      comments: $comments.val().trim()
      // createdAt: req.body.createdAt,
      // updatedAt: req.body.updatedAt
    };

    console.log(newRestroom);
    $.post('/api/new/restroom', newRestroom, function () {
      alert('Restroom added!');
    });

    $name.val('');
    $location.val('');
    $type.val('');
    $comments.val('');
  }
});
