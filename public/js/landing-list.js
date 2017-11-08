$(document).on('ready', function () {
  console.log('meow!');

  function getLocationList () {
// get request from db
$.get('/api/restrooms', function (data) {
  for (var i = 0; i < data.length; i++) {
    // not sure how to append new <div> for new tile
    // ("#tile").append("<div class='box'><% include ../partials/placecard %></div>");
    ('#location-name').append(data[i].name);
    ('#address').append(data[i].location);
    ('#category').append(data[i].category);
    // comments?
    // click event (comment icon) can invoke new function for retrieving comments from database
    // and listing in new window
  }
});
// Loop through the results
// for each, we pick up every attribute in one location object
// print each object to a tile
  }

  getLocationList();
});
