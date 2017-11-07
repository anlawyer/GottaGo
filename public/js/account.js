$(document).ready(function () {

  var $username = $('#username');
  var $email = $('#email');
  var $old_password = $('#current-password');
  var $new_password = $('#new-password');
  var $confirm_password = $('#confirm-new-password');

  $(document).on('click', '#submit', updateUser);

  function updateUser (event) {
    event.preventDefault();
    // where do we authenticate??? here, to make sure they match? or backend to make
    // sure the old password is correct?? both?? what about bcrypt and passport???
    var updateInfo = {
      old_password: $old_password.val(),
      password: $confirm_password.val()
    };

    $.ajax({
      method: 'PUT',
      url: '/api/update/user',
      data: updateInfo
    }).done(function () {
      alert('Password has been updated!')
    });
  }
});

// to go in api-routes
app.put('/api/update/user', function (req, res) {
  console.log(req.body);
  db.User.update(req.body.password, {
    where: {
      password: req.body.old_password
    }
  })
  .then(function (data) {
    res.json(data);
  });
});
