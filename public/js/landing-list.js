$(document).on('ready', function () {
  console.log('meow!');
});

// get request from db
$.get('/api/restrooms', function (data) {
  for (var i = 0; i < data.length; i++) {
    ('#location-name').append(data[i].name);
    ('#address').append(data[i].location);
    ('#category').append(data[i].category);
    // comments?
  }
});
// Loop through the results
// for each, we pick up every attribute in one location object
// print each object to a tile
