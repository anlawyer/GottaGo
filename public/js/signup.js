$(document).ready(function () {

  var $username = $('#username');
  var $email = $('#email');
  var $password = $('#confirm-password');

  $(document).on('click', '#submit', submitUser);

  function submitUser (event) {
    event.preventDefault();

    var newUser = {
      username: $username.val().trim(),
      email: $email.val().trim(),
      password: $password.val()
    };

    $.post('api/new/user', newUser, function () {
      window.location.href = '/landing_list';
    });
    // .then(function (data) {
    //   window.location = data.redirectUrl;
    // });
  }
});
