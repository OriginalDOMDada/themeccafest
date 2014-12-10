$(document).ready(function(){
	// hides the answer as soon as the DOM is ready
  $(".answer").hide();
 	// toggles the answer on clicking the noted link  
  $('.question').click(function() {
	  $(this).next('.answer').toggle(400);
  });
});



