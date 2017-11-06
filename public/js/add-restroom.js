$(document).ready(function () {

  var $name = $('#location-name');
  var $location = $('#address');
  var $comments = $('#comment');

  $(document).on('click', '#submit', submitRestroom);

  function submitRestroom (event) {
    event.preventDefault();

    var newRestroom = {
      name: $name.val().trim(),
      location: $location.val().trim(),
      category: $('input[name="question"]:checked').val(),
      comments: $comments.val().trim()
    };

    $.post('/api/new/restroom', newRestroom, function () {
      alert('Restroom added!');
    })
    .then(landingPage);

    // send user back to landing page
    function landingPage () {
      $.get('/landing_list');
    }

    // $name.val('');
    // $location.val('');
    // // $type.val('');
    // $comments.val('');
  }
});
