$(document).on('ready', function() {

  


  $('.submitButton').on('click', function(e){
    var submittedQuote = $('#quote-edit').val();
    var submittedAuthor = $('#author-edit').val();
    console.log(submittedQuote);
    console.log(submittedAuthor);
		e.preventDefault();
    $('#quote-edit').val(' ');
    $('#author-edit').val(' ');


  $('.glyphicon-star').on("click", function(){
    $(this).css("color", "yellow");
    $(this).prevAll().css("color", "yellow");
    console.log("I clicked a STAR!!");
  });


  var postedQuote = $('<div class="postedQuote">');
  var postedAuthor = $('<div class="postedAuthor">');
  var postedContainer = $('<div class="postedContainer">');
  //var quoteBubble = $('<div class="quoteBubble">');
  var star = $('<div>')
    .addClass("glyphicon glyphicon-star");

  


  var newStar = [star.clone(), star.clone(), star.clone(), star.clone(), star.clone()];
 



  postedContainer
            //.append(quoteBubble)
            .append((postedQuote).text(submittedQuote))
            .append((postedAuthor).text(submittedAuthor))
            .append(newStar);
          
            


  $('#posted').append(postedContainer);

  var newPost = postedContainer.clone();






	})


  
});