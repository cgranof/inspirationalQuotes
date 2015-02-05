$(document).on('ready', function() {
	


  $('.submitButton').on('click', function(e){
    var submittedQuote = $('#quote-edit').val();
    var submittedAuthor = $('#author-edit').val();
    console.log(submittedQuote);
    console.log(submittedAuthor);
		e.preventDefault();
    $('#quote-edit').val(' ');
    $('#author-edit').val(' ');



  var postedQuote = $('<div class="postedQuote">');
  var postedAuthor = $('<div class="postedAuthor">');
  var postedContainer = $('<div class="postedContainer">');


  postedContainer
            .append((postedQuote).text(submittedQuote))
            .append((postedAuthor).text(submittedAuthor));
            


  $('#posted').append(postedContainer);

  var newPost = postedContainer.clone();






	})


  
});