$(document).ready(function() {
  // Getting a reference to the input field where user adds a new todo
  var $newLocation = $("#location-name");
  var $address = $("#address");
  var $category = $(".radio");
  var $comment = $("#comment");

  // Our new todos will go inside the todoContainer
  var $todoContainer = $(".todo-container");
  // Adding event listeners for deleting, editing, and adding todos
  $(document).on("click", "#submit", insertLocation);
  
  // Our initial todos array
  var t = [];

  // Getting todos from database when page loads
  getLocations();

  // This function resets the todos displayed with new todos from the database
  function initializeRows() {
    $todoContainer.empty();
    var rowsToAdd = [];
    for (var i = 0; i < todos.length; i++) {
      rowsToAdd.push(createNewRow(todos[i]));

    $todoContainer.prepend(rowsToAdd);
  }

  // This function grabs todos from the database and updates the view
  function getLocations() {
    $.get("/api/todos", function(data) {
      t = data;
      initializeRows();
    });
  }

  // This function inserts a new todo into our database and then updates the view
  function insertLocation(event) {
    event.preventDefault();
    var t = {
      text: $newItemInput.val().trim(),
      complete: false
    };

    $.post("/api/todos", t, getLocations);
    $newItemInput.val("");
  }
}
