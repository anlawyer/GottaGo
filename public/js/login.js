$(document).ready(function () {

  var $username = $('#username');
  var $password = $('#password');

  $(document).on('click', '#submit', submitUser);

  function submitUser (event) {
    event.preventDefault();

    var currUser = {
      username: $username.val().trim(),
      password: $password.val()
    };
    // this only works if user does exist (no password validation yet, only checks username)
    // sql throws an error if user does not exist and won't complete function
    $.post('/api/check-user', currUser, function (res) {
      if (!res.user) {
        alert('No user exists, sign up as new user.');
      } else {
        window.location.href = '/landing_list';
      }
    });
  }
});
