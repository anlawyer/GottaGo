$(document).ready(function () {

  var $username = $('#username');
  var $password = $('#password');

  $(document).on('click', '#submit', submitUser);

  function submitUser (event) {
    event.preventDefault();

    // somewhere in this code I believe we should be able to validate the user's login info
    // perhaps that is a backend function

    $.get('api/check-user', function () {
      // somehow communicate with backend? is that where the validation happens?
      // then on success, we then allow them to log in?
    })
    .then(function (data) {
      window.location = data.redirectUrl;
    });
  }
});
