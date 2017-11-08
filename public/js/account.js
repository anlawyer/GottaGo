$(document).ready(function () {

  var $username = $('#username');
  // var $email = $('#email');
  var $old_password = $('#current-password');
  var $new_password = $('#new-password');
  var $confirm_password = $('#confirm-new-password');

  $(document).on('click', '#submit', updateUser);

  function updateUser (event) {
    event.preventDefault();

    var updateInfo = {
      username: $username.val().trim(),
      old_password: $old_password.val(),
      password: $confirm_password.val(),
      updatedAt: $.now()
    };

    $.ajax({
      method: 'PUT',
      url: '/api/update/user',
      data: updateInfo
    }).done(function (res) {
      if (!res.user) {
        console.log('Username or password does not match. Try again.');
      } else {
        window.location.href = '/landing_list';
      }
    });
  }
});
