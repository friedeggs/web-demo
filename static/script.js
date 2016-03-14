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
  '<img src="/static/heart-green.svg" class="like"/>'+
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

  $.post("/store_comment", {
    "poster": name,
    "comment": comment
  });
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

// $("img").hover(
//   function() {
//     $( this ).attr("src", Flask. url_for('static',filename='heart-green-filled.svg'));
//   }, function() {
//     $( this ).attr("src", Flask. url_for('static',filename='heart-green.svg'));
//   }
// );

$(document).on("mouseenter", "img", function(event){
    $( this ).attr("src", "/static/heart-green-filled.svg");
}).on("mouseleave", "img", function(event){
    $( this ).attr("src", "/static/heart-green.svg");
});

$(document).on("click", ".like", function(event){
    var val = parseInt($( this ).find("p").text());
    $( this ).find("p").text(val+1);
    console.log(val);
});

// $("img").hover(
//   function() {
//     $( this ).attr("src", "/static/heart-green-filled.svg");
//   }, function() {
//     $( this ).attr("src", "/static/heart-green.svg");
//   }
// );

// $( ".poster" ).hover(function() {
//   $( this ).fadeOut( 100 );
//   $( this ).fadeIn( 500 );
// });
