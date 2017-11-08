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

    if ((newRestroom.name.length > 0) && (newRestroom.location.length > 0) && (newRestroom.category > -1)) {
      $.post('/api/new/restroom', newRestroom, function () {
        alert('Restroom added!');
        window.location.href = '/landing_list';
      });
    } else {
      $("#rest-wrong").show();
    }
  }
});
