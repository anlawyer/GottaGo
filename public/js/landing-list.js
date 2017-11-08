$(document).ready(function () {
  $(document).on("click",".pcard", function () {
    var self = $(this)
    var id = self.attr("data-card");
    var match = $("#" + id);
    $("#" + id).toggle();
  });
});
