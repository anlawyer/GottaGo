$(document).ready(function () {

  var $username = $('#username');
  var $email = $('#email');
  var $password = $('#confirm-password');

  $(document).on('click', '#submit', submitUser);

  var specialChars = "<>@!#$%^&*()_+[]{}?:;|'\"\\,./~`-=";

  function checkValid (username, password) {
    for (var i = 0; i < specialChars.length; i++) {
      if ((username.indexOf(specialChars[i]) > -1) || (password.indexOf(specialChars[i]) > -1)) {
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

  function submitUser (event) {
    event.preventDefault();

    var newUser = {
      username: $username.val().trim(),
      email: $email.val().trim(),
      password: $password.val()
    };

    if (passwordMatch($("#password").val(), newUser.password)) {
      $("#pass-mismatch").hide();
      if (checkValid(newUser.username, newUser.password)) {
        $.post('api/new/user', newUser, function (res) {
          if (res.user) {
            alert('User already exists.');
          } else {
            window.location.href = '/landing_list';
          }
        });
      } else {
        $("#input-warning").show();
      }
    } else {
      $("#pass-mismatch").show();
    }
  }
});
