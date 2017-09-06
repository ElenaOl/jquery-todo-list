
$(document).ready(function() {
});

//add click event function that adds list item
$("#add-button").click(function(){
  console.log('clicked');
  var newItemText = $("#list-item")[0];
  $('ul').append("<li><button class=\"delete\">Delete</button> " + newItemText.value + "</li>");
  newItemText.value = "";
  newItemText.focus();
});

//to remove item from the list
$('ul').on("click", ".delete", function(e){
 this.parentElement.remove();
 var newItemText = $("#list-item")[0];
 newItemText.focus();
});


