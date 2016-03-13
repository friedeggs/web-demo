function add() {
  var element = document.createElement("div");
  element.className = "fading";
  element.innerHTML = "<h2>New Project</h2><p>This is a new project</p>";
  //element.style.transition = "all 1s";
  var parent = document.getElementById("container");
  container.appendChild(element);
  setTimeout(function() {
    element.className = "project";
    element.style.transition = "all 0.05s";
  }, 50);

  element.style = "";
}

// $(document).ready(function(){
//   $("#body").load("navbar.html");
// });

$("#comment-form").on("submit", function(e) {
  e.preventDefault();
  var name = $("#name").val();
  $("#name").val("");
  var comment = $("#textarea").val();
  $("#textarea").val("comment here");
  if(validate(name) && validate(comment))
    addComment(name, comment);
});

function validate(input) {
  // fill me in
  return true;
}

function addComment(name, comment) {
  var newComment = $('<div class="comment">'+
  '<image src="heart-green.svg" class="like"/>'+
  '<div class="poster">'+
  name
  +'</div>'+
  '<div class="comment-text">'+
  comment
  +'</div>'+
  +'</div>')
  //  $("<div/>", {
  //   "class": "comment"
  // });
  // newComment
  newComment.appendTo("#thread");
}

// $("#submit-comment").on("click", function(e) {
//   e.preventDefault();
//   var name = $("#name").val();
//   $("#name").empty();
//   alert(name);
// });

// $("img").hover(function() {
//   alert("hover");
//   var img = e.target;
//   img.attr("src", "heart-green-filled.svg");
//   console.log(img);
// }, function() {
//   var img = e.target;
//   img.attr("src", "heart-green.svg");
// });

$("img").hover(
  function() {
    $( this ).attr("src", "heart-green-filled.svg");
  }, function() {
    $( this ).attr("src", "heart-green.svg");
  }
);

// $( ".poster" ).hover(function() {
//   $( this ).fadeOut( 100 );
//   $( this ).fadeIn( 500 );
// });
