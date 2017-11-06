$(document).ready(function () {

  var $username = $('#username');
  var $email = $('#email');
  var $password = $('#confirm-password');

  $(document).on('click', '#submit', submitUser);

  function submitUser (event) {
    event.preventDefault();
    // we should have some way to validate user input as they type or submit
    // i.e. if username is already taken, don't let them make one
    var newUser = {
      username: $username.val().trim(),
      email: $email.val().trim(),
      password: $password.val()
    };

    $.post('api/new/user', newUser, function () {
      window.location.href = '/landing_list';
    });
  }
});
