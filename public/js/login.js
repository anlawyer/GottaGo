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
    // this now works if user exists or does not. Now we need to implement the
    // password functionality to make sure that entered username + password match

    // not sure where in here do we refer to passport? did I put the function in
    // the wrong file? (currently in api-routes, should it be here?)
    $.post('/api/check-user', currUser, function (res) {
      if (!res.user) {
        alert('No user exists, sign up as new user.');
      } else {
        window.location.href = '/landing_list';
      }
    });
  }
});
