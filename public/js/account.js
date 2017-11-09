$(document).ready(function () {

  var $username = $('#username');
  // var $email = $('#email');
  var $old_password = $('#current-password');
  var $new_password = $('#new-password');
  var $confirm_password = $('#confirm-new-password');

  $(document).on('click', '#submit', updateUser);

  var specialChars = "<>@!#$%^&*()_+[]{}?:;|'\"\\,./~`-=";

  function checkValid (password) {
    for (var i = 0; i < specialChars.length; i++) {
      if ((password.indexOf(specialChars[i]) > -1)) {
        return false;
      }
    }
    return true;
  }

  function passwordMatch (pass, confirm) {
    if (pass === confirm) {
      return true;
    } else {
      return false;
    }
  }

  function updateUser (event) {
    event.preventDefault();

    var updateInfo = {
      username: $username.val().trim(),
      old_password: $old_password.val(),
      password: $confirm_password.val()
      // updatedAt: $.now()
    };

    if (passwordMatch ($new_password.val(), $confirm_password.val())) {
      $('#pass-mismatch').hide();
      $('#user-pass-mismatch').hide();
      if (checkValid(updateInfo.password)) {
        $.ajax({
          method: 'PUT',
          url: '/api/update/user',
          data: updateInfo
        }).done(function (res) {
          if (!res.user) {
            $('#user-pass-mismatch').show();
          } else {
            alert('Password has been updated!')
            window.location.href = '/landing_list';
          }
        });
      } else {
        $('#input-warning').show();
      }
    } else {
      $('#pass-mismatch').show();
    }
  }
});
