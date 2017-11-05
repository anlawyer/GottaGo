$(document).on('click', '#submit', submitUser);

var $username = $('#username');
var $email = $('#email');
var $password = $('#password');

function submitUser () {
  event.preventDefault();
  var newUser = {
    username: $name.val().trim(),
    email: $location.val().trim(),
    password: $type.val(),
    // createdAt: req.body.createdAt,
    // updatedAt: req.body.updatedAt
  };
  $.post('api/new/user', newUser, function () {
    alert('Welcome!');
  });
  $username.val('');
  $email.val('');
  $password.val('');
}
