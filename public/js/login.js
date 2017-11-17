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

    $.post('/api/check-user', currUser, function (res) {
      if (res.user === 'no user') {
        $('#username-warning').show();
      } else if (res.user === 'wrong password') {
        $('#password-warning').show();
      } else {
        window.location.href = '/landing_list';
      }
    });
  }
});
