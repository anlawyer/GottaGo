$(document).ready(function () {

  var name = $('#location-name');
  // var $location = $('#address');
  // var $type = $('label.radio');
  // var $comments = $('#comment');
  console.log(name + ' on ready'); // this outputs '[object Object] on ready'
  // console.log(typeof ($location));
  // console.log($location + ' on ready');
  // console.log($type + ' on ready');
  // console.log($comments + ' on ready');
  $(document).on('click', '#submit', submitRestroom);

  function submitRestroom (event) {
    console.log('clicked'); // this does not work yet
    event.preventDefault();
    var newRestroom = {
      name: $('#location-name').val().trim()
      // location: $location.val().trim(),
      // category: $type.val(),
      // comments: $comments.val().trim()
      // createdAt: req.body.createdAt,
      // updatedAt: req.body.updatedAt
    };

    console.log(newRestroom);
    $.post('/api/new/restroom', newRestroom, function () {
      alert('Restroom added!');
    })
    .then() // send user back to landing page
    ;

    $name.val('');
    $location.val('');
    $type.val('');
    $comments.val('');
  }
});
